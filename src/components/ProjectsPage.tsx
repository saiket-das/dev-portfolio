"use client";

import { POSTS, EXTRA_PROJECTS } from "@/lib/data";

export function ProjectsPage({ onOpen }: { onOpen: (id: string) => void }) {
  const postProjects = POSTS.filter((p) => p.type === "project" || p.type === "thread");
  const allProjects = [
    ...postProjects.map((p) => ({
      id: p.id,
      title: p.title ?? "",
      subtitle: p.subtitle ?? "",
      stack: p.stack ?? [],
      status: "shipped",
      caption: p.caption ?? "",
      isPost: true,
    })),
    ...EXTRA_PROJECTS.map((p) => ({ ...p, isPost: false })),
  ];

  return (
    <div className="projects-page">
      <header className="projects-head">
        <div className="projects-mark mono">/ PROJECTS · index</div>
        <h1 className="serif">Work, in approximate order of pride.</h1>
      </header>
      <table className="projects-table">
        <thead className="mono">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Stack</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((p) => {
            const year = p.subtitle?.replace(/[^\d]/g, "") || "—";
            const statusKey = (p.status?.split(" ")[0] ?? "shipped").replace(".", "");
            return (
              <tr key={p.id} onClick={() => p.isPost ? onOpen(p.id) : undefined} style={{ cursor: p.isPost ? "pointer" : "default" }}>
                <td>
                  <div className="proj-title serif">{p.title}</div>
                  <div className="proj-cap">{p.caption}</div>
                </td>
                <td className="mono">{year}</td>
                <td className="mono">
                  {(p.stack ?? []).map((s: string) => <span key={s} className="proj-stack-i">{s}</span>)}
                </td>
                <td className="mono">
                  <span className={`proj-status proj-status-${statusKey}`}>{p.status}</span>
                </td>
                <td className="mono">↗</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
