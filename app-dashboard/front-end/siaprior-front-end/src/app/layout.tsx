import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "SiaPrior",
  description: "Solusi Pintar untuk Keadilan Bersama",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
