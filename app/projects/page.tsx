export default function ProjectsPage() {
  const projects = [
    {
      title: "Website Portofolio",
      description:
        "Website personal menggunakan Next.js dan Tailwind CSS untuk menampilkan profil, pengalaman, dan project.",
      tech: "Next.js • TypeScript • Tailwind CSS",
    },
    {
      title: "CMS Landing Page Pegadaian",
      description:
        "Content Management System untuk mengatur konten website Pegadaian secara dinamis.",
      tech: "Next.js • NestJS • PostgreSQL",
    },
    {
      title: "Dashboard Inventory KFC",
      description:
        "Sistem monitoring stok, receiving, transfer, dan laporan inventory cabang.",
      tech: "Angular • Spring Boot • Oracle",
    },
    {
      title: "Recommendation System",
      description:
        "Sistem rekomendasi pemesanan barang menggunakan Apriori dan Random Forest.",
      tech: "Python • FastAPI • Scikit-Learn",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3">Projects</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Project Saya
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-slate-300 mb-4">
                {project.description}
              </p>

              <span className="text-blue-400 text-sm">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}