"use client";

type Props = {
    params: { slug: string };
};

const articles: Record<string, { title: string; banner: string; content: string }> = {
    "keadaan-transjakarta": {
        title: "Keadaan Transjakarta Saat Ini",
        banner: "/bus-detail.jpg",
        content: `
      Jakarta - Jalan TB Simatupang, Jakarta Selatan, dikeluhkan macet parah.
      Proyek pekerjaan yang mempersempit ruang jalan menambah ruwet lalu lintas di TB Simatupang.
      Warga diminta mencari alternatif lain serta menggunakan transportasi umum.
      
      Pemerintah Provinsi (Pemprov) DKI Jakarta melalui Dinas Perhubungan (Dishub)
      mengimbau masyarakat agar lebih memanfaatkan transportasi umum.
      Di sekitaran jalan tersebut, sudah tersedia layanan Transjakarta.
      
      Kepala Dishub DKI Jakarta, Syafrin Liputo mengatakan,
      penggunaan transportasi umum dapat menjadi solusi agar perjalanan warga lebih lancar
      efisien dibandingkan menggunakan kendaraan pribadi, karena dapat mengurangi kepadatan lalu lintas.
    `,
    },
    // Add other articles here...
};

export default function EdukasiDetail({ params }: Props) {
    const article = articles[params.slug];

    if (!article) return <div className="content">Not Found</div>;

    return (
        <div className="app-container">
            {/* Content */}
            <main className="content">
                <div className="hero">
                    <img src={article.banner} alt={article.title} />
                    <div className="hero-overlay">
                        <h1>{article.title}</h1>
                    </div>
                </div>

                <div className="article">
                    <h2>Bagaimana TJ Saat Ini?</h2>
                    <p>{article.content}</p>
                </div>
            </main>
        </div>
    );
}
