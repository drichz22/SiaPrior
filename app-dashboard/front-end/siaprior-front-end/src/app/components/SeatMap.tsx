"use client";
import React from "react";

type Seat = { id: string; status: "full" | "empty" | "priority" };
export default function SeatMap({ seats }: { seats: Seat[] }) {
  // Render as 3 columns grid chunks of 3x3 blocks
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 28px)", gap: 8 }}>
      {seats.map((s) => (
        <div key={s.id} title={s.id}
          style={{
            width: 28, height: 28, borderRadius: 6,
            background: s.status === "full" ? "#1d4ed8" : s.status === "priority" ? "#ef4444" : "#d1d5db",
          }}
        />
      ))}
    </div>
  );
}
