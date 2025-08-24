"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

export default function PrediksiPage() {
  const [hari, setHari] = useState("Senin");
  const [bus, setBus] = useState("S61");

  // Example data (you can replace with real API data)
  const data = [
    { time: "06:00", occupancy: 45, rushHour: 0 },
    { time: "07:00", occupancy: 80, rushHour: 50 },
    { time: "08:00", occupancy: 120, rushHour: 95 },
    { time: "09:00", occupancy: 90, rushHour: 70 },
    { time: "10:00", occupancy: 60, rushHour: 0 },
    { time: "11:00", occupancy: 55, rushHour: 0 },
    { time: "12:00", occupancy: 65, rushHour: 0 },
    { time: "13:00", occupancy: 60, rushHour: 0 },
    { time: "17:00", occupancy: 140, rushHour: 110 },
    { time: "18:00", occupancy: 170, rushHour: 135 },
    { time: "19:00", occupancy: 130, rushHour: 90 },
  ];

  const totalPenumpang = data.reduce((sum, d) => sum + d.occupancy, 0);

  return (
    <div className="prediksi-page">
      <h1 className="prediksi-title">Prediksi Jumlah Penumpang</h1>
      <p className="prediksi-subtitle">
        Prediksi Penumpang per Bus dengan Mudah
      </p>

      {/* Dropdown Filter */}
      <div className="flex gap-4 mb-6">
        <select
          className="prediksi-filter"
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

        <select
          className="prediksi-filter"
          value={bus}
          onChange={(e) => setBus(e.target.value)}
        >
          <option>S61</option>
          <option>S62</option>
          <option>S63</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="prediksi-summary">
          <p>Total Penumpang</p>
          <p>{totalPenumpang}</p>
        </div>
        <div className="prediksi-summary">
          <p>Rata-rata</p>
          <p>{Math.round(totalPenumpang / data.length)}</p>
        </div>
        <div className="prediksi-summary">
          <p>Puncak</p>
          <p>{Math.max(...data.map((d) => d.occupancy))}</p>
        </div>
        <div className="prediksi-summary">
          <p>Jam Sibuk</p>
          <p>07:00 - 09:00, 17:00 - 19:00</p>
        </div>
      </div>

      {/* Chart */}
      <div className="prediksi-chart">
        <div className="prediksi-chart-inner">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rushHour" fill="#facc15" name="Rush Hour" />
              <Line
                type="monotone"
                dataKey="occupancy"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Predicted Occupancy"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
