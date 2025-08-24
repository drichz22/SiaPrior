"use client";

import Link from "next/link";

export default function EdukasiPage() {
  return (
    <div className="app-container">
      {/* Content */}
      <main className="content">
        <div className="hero">
          <img src="/bus.jpg" alt="Transjakarta Bus" />
        </div>

        <div className="grid two">
          <Link href="/edukasi/keadaan-transjakarta" className="card">
            <h3 className="card-title blue">Keadaan Transjakarta Saat Ini</h3>
            <p>Baca lebih lanjut</p>
          </Link>
          <Link href="/edukasi/kemajuan-transportasi" className="card">
            <h3 className="card-title blue">Kemajuan Transportasi Umum</h3>
            <p>Baca lebih lanjut</p>
          </Link>
          <Link href="/edukasi/keamanan" className="card">
            <h3 className="card-title blue">Jaga Keamanan Saat Naik TransJakarta</h3>
            <p>Baca lebih lanjut</p>
          </Link>
          <Link href="/edukasi/kepadatan" className="card">
            <h3 className="card-title blue">Kepadatan Transportasi Umum Saat Liburan</h3>
            <p>Baca lebih lanjut</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
