import React from "react";

export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="card">
      {title ? <h3 className="section-title">{title}</h3> : null}
      <div>{children}</div>
    </section>
  );
}
