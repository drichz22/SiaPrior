"use client";
import React from "react";

type Point = { x: number; y: number };
export default function SimpleLine({ data, w=640, h=260 }: { data: Point[]; w?: number; h?: number }) {
  const maxX = Math.max(...data.map(d=>d.x));
  const maxY = Math.max(...data.map(d=>d.y), 1);
  const pad = 28;
  const sx = (x:number)=> pad + (x/maxX)*(w-2*pad);
  const sy = (y:number)=> (h-pad) - (y/maxY)*(h-2*pad);
  const d = data.map((p,i)=> `${i?'L':'M'}${sx(p.x)},${sy(p.y)}`).join(" ");

  return (
    <svg width={w} height={h} role="img" aria-label="Line chart">
      <rect x={pad} y={pad} width={w-2*pad} height={h-2*pad} fill="none" stroke="#e5e7eb" />
      <path d={d} fill="none" stroke="#0d6efd" strokeWidth="3" />
      {data.map(p=> <circle key={p.x} cx={sx(p.x)} cy={sy(p.y)} r="4" />)}
    </svg>
  );
}
