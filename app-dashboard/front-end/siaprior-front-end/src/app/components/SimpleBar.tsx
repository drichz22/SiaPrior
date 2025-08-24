"use client";
import React from "react";

type Bar = { label: string; value: number };
export default function SimpleBar({ data, w=640, h=300 }: { data: Bar[]; w?: number; h?: number }) {
  const pad = 32;
  const bw = (w - 2*pad) / data.length - 12;
  const max = Math.max(...data.map(d=>d.value), 1);

  return (
    <svg width={w} height={h} role="img" aria-label="Bar chart">
      <rect x={pad} y={pad} width={w-2*pad} height={h-2*pad} fill="none" stroke="#e5e7eb" />
      {data.map((d, i) => {
        const x = pad + i*(bw+12) + 6;
        const hval = (d.value/max)*(h-2*pad);
        const y = h - pad - hval;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={bw} height={hval} rx="8" />
            <text x={x+bw/2} y={h-6} textAnchor="middle" fontSize="12">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
