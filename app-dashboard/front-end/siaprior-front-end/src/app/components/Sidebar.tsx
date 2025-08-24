"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { href: "/", label: "Beranda", icon: "/icons/home.png" },
    { href: "/edukasi", label: "Materi Edukasi", icon: "/icons/book.png" },
    { href: "/prediksi", label: "Prediksi Jumlah Penumpang", icon: "/icons/users.png" },
    { href: "/pelanggaran", label: "Grafik Pelanggaran", icon: "/icons/chart.png" },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <img
          src="/logo-siaprior.png"
          alt="Siaprior Logo"
          className="brand-logo"
        />
      </div>

      <nav>
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${pathname === item.href ? "active" : ""}`}
          >
            <img src={item.icon} alt="" className="nav-icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
