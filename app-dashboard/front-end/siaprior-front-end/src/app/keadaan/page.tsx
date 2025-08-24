import Card from "../components/Card";

export default function KeadaanPage() {
  return (
    <div>
      <div className="hero">Keadaan Transjakarta Saat Ini</div>
      <Card>
        <h2 className="section-title">Bagaimana TJ Saat Ini?</h2>
        <p>
          Jakarta - Jalan TB Simatupang, Jakarta Selatan, dikeluhkan macet parah. Proyek pekerjaan yang mempersempit ruang jalan menambah ruwet lalu lintas di TB Simatupang. Warga diminta mencari alternatif lain serta menggunakan transportasi umum.
        </p>
        <p>
          Pemerintah Provinsi DKI Jakarta melalui Dinas Perhubungan mengimbau masyarakat agar beralih menggunakan transportasi umum. Di sekitar jalan tersebut, sudah tersedia layanan Transjakarta.
        </p>
      </Card>
    </div>
  );
}
