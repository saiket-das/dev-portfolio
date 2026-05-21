import type { NextApiRequest, NextApiResponse } from "next";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const QUERY = `query ($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
            weekday
          }
        }
      }
    }
  }
}`;

async function fetchPublicTotal(user: string, year: number) {
  const resp = await fetch(
    `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`,
    {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "Mozilla/5.0",
      },
    },
  );
  const html = await resp.text();
  const match = html.match(/([\d,]+)\s+contributions?\s+in\s+\d{4}/i);
  if (!match) throw new Error("Could not parse public contribution total");
  return Number(match[1].replace(/,/g, ""));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = process.env.GITHUB_TOKEN;
  if (!token)
    return res.status(500).json({ error: "GITHUB_TOKEN not configured" });

  const { user, year } = req.query;
  if (!user || Array.isArray(user))
    return res.status(400).json({ error: "missing user" });
  const yr =
    Number(Array.isArray(year) ? year[0] : year) || new Date().getFullYear();

  const from = `${yr}-01-01T00:00:00Z`;
  const to = `${yr}-12-31T23:59:59Z`;

  try {
    const resp = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: user, from, to },
      }),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      // Try to parse JSON error body, otherwise return text (trimmed)
      try {
        const j = JSON.parse(txt);
        const total = await fetchPublicTotal(String(user), yr);
        return res.status(200).json({
          total,
          weeks: null,
          source: "public",
          warning: j.message || j.error || JSON.stringify(j),
        });
      } catch (e) {
        const total = await fetchPublicTotal(String(user), yr);
        return res.status(200).json({
          total,
          weeks: null,
          source: "public",
          warning: txt.length > 1000 ? txt.slice(0, 1000) + "..." : txt,
        });
      }
    }

    const data = await resp.json();
    const weeks =
      data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ||
      [];
    const total =
      data?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions || 0;

    // Flatten weeks into array of weeks->days but return structure similar to calendar
    const outWeeks = weeks.map((w: any) =>
      w.contributionDays.map((d: any) => ({
        date: d.date,
        contributionCount: d.contributionCount,
        color: d.color,
        weekday: d.weekday,
      })),
    );

    return res.status(200).json({ total, weeks: outWeeks });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
}
