"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PelanggaranPage() {
  const [hari, setHari] = useState("Senin");

  // Example data (replace with API later)
  const data = [
    { kode: "S61", pelanggaran: 30 },
    { kode: "1W", pelanggaran: 120 },
    { kode: "9A", pelanggaran: 90 },
    { kode: "T11", pelanggaran: 100 },
  ];

  const total = data.reduce((sum, d) => sum + d.pelanggaran, 0);
  const rata2 = Math.round(total / data.length);

  return (
    <div className="pelanggaran-page">
      <h1 className="pelanggaran-title">Grafik Pelanggaran Kursi Prioritas</h1>
      <p className="pelanggaran-subtitle">
        Prediksi Penumpang per Bus dengan Mudah
      </p>

      {/* Dropdown Filter */}
      <div className="flex gap-4 mb-6">
        <select
          className="pelanggaran-filter"
          value={hari}
          onChange={(e) => setHari(e.target.value)}
        >
          <option>Senin</option>
          <option>Selasa</option>
          <option>Rabu</option>
          <option>Kamis</option>
          <option>Jumat</option>
          <option>Sabtu</option>
          <option>Minggu</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="pelanggaran-summary">
          <p>Total Pelanggaran</p>
          <p>{total}</p>
        </div>
        <div className="pelanggaran-summary">
          <p>Rata-rata per Bus</p>
          <p>{rata2}</p>
        </div>
        <div className="pelanggaran-summary">
          <p>Bus Terbanyak</p>
          <p>{data.reduce((a, b) => (a.pelanggaran > b.pelanggaran ? a : b)).kode}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="pelanggaran-chart">
        <div className="pelanggaran-chart-inner">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="kode" label={{ value: "Kode", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Jumlah Pelanggaran", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Bar dataKey="pelanggaran" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
