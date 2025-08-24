"use client";
import { useState } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line
} from "recharts";

export default function Dashboard() {
  const [bus, setBus] = useState("Bus S61");

  // Dummy data untuk charts
  const occupancyData = [
    { name: "Penuh", value: 65 },
    { name: "Kosong", value: 25 },
    { name: "Prioritas", value: 10 },
  ];
  const COLORS = ["#2f80ed", "#ccc", "#eb5757"];

  const barData = [
    { day: "Senin", okupansi: 70 },
    { day: "Selasa", okupansi: 60 },
    { day: "Rabu", okupansi: 80 },
    { day: "Kamis", okupansi: 55 },
    { day: "Jumat", okupansi: 90 },
  ];

  const lineData = [
    { jam: "06:00", jumlah: 120 },
    { jam: "09:00", jumlah: 300 },
    { jam: "12:00", jumlah: 200 },
    { jam: "15:00", jumlah: 400 },
    { jam: "18:00", jumlah: 500 },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Hi, Username</h1>
          <p>Analisis Okupansi Kendaraan Umum dengan Mudah</p>
        </div>
        <select
          className="bus-select"
          value={bus}
          onChange={(e) => setBus(e.target.value)}
        >
          <option>Bus S61</option>
          <option>Bus S62</option>
          <option>Bus S63</option>
        </select>
      </div>

      {/* Grid */}
      <div className="dashboard-grid">
        {/* Persentase Okupansi */}
        <div className="card">
          <h3>Persentase Okupansi</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={occupancyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {occupancyData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="legend">
            {occupancyData.map((item, i) => (
              <span key={i}>
                <span className={`dot ${item.name.toLowerCase()}`} />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Okupansi Harian */}
        <div className="card">
          <h3>Okupansi per Hari</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="okupansi" fill="#2f80ed" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tren Penumpang */}
        <div className="card">
          <h3>Tren Penumpang per Jam</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="jam" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="jumlah" stroke="#2f80ed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
