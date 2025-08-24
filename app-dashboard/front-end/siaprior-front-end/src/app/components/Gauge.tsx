"use client";
import React from "react";

type Props = { value: number; size?: number };
export default function Gauge({ value, size = 280 }: Props) {
  const pct = Math.max(0, Math.min(100, value));
  const r = size / 2;
  const stroke = 26;
  const innerR = r - stroke / 2;
  const circumference = Math.PI * innerR;
  const arc = (pct / 100) * circumference;

  return (
    <div style={{ width: size, height: size / 1.2 }}>
      <svg width={size} height={size / 1.2}>
        <g transform={`translate(${r},${r})`}>
          <path d={`M ${-innerR} 0 A ${innerR} ${innerR} 0 1 1 ${innerR} 0`} fill="none" stroke="#d1d5db" strokeWidth={stroke} strokeLinecap="round" />
          <path d={`M ${-innerR} 0 A ${innerR} ${innerR} 0 1 1 ${innerR} 0`} fill="none" stroke="#0d6efd" strokeWidth={stroke} strokeDasharray={`${arc} ${circumference}`} strokeLinecap="round" />
        </g>
      </svg>
      <div style={{ textAlign: "center", marginTop: -36, fontSize: 36, fontWeight: 800 }}>{pct}%</div>
    </div>
  );
}
