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
  {
    title: "XL Microservice App",
    description:
      "Bug fixing dan penambahan fitur pada aplikasi microservice XL, seperti validasi, null handling, dan peningkatan stabilitas API.",
    tech: "Spring Boot • Golang • Microservices",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pb-20 pt-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-blue-400">Welcome</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            My Portfolio
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Halo, my name is Rashad. I am a Fullstack Developer with experience
            in modern web development, backend services, API integration, and
            application deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-screen items-center bg-slate-900 px-6 py-24 scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-blue-400">About Me</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-300">
            A skilled Full-stack Programmer with expertise in VueJS, FastAPI,
            Spring Boot, and Angular. I seek to contribute to innovative
            web-based solutions by leveraging strong problem-solving abilities
            and a passion for delivering scalable and efficient applications.
            I am eager to join a dynamic team where I can enhance my skills in
            web development, cloud computing, data visualization, and DevOps.
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-blue-400">Projects</p>
          <h2 className="mb-10 text-4xl font-bold md:text-5xl">My Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
              >
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-slate-300">{project.description}</p>
                <span className="text-sm text-blue-400">{project.tech}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-screen items-center bg-slate-900 px-6 py-24 scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-3 font-semibold text-blue-400">Contact</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Contact Me</h2>

          <div className="space-y-4 text-lg text-slate-300">
            <p>
              Email: {" "}
              <a
                href="mailto:mrashadyusuf@gmail.com"
                className="text-blue-400 hover:underline"
              >
                mrashadyusuf@gmail.com
              </a>
            </p>
            <p>
              LinkedIn: {" "}
              <a
                href="https://linkedin.com/in/muhammad-rashad-yusuf"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                muhammad-rashad-yusuf
              </a>
            </p>
            <p>
              GitHub: {" "}
              <a
                href="https://github.com/mrashadyusuf"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/mrashadyusuf
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id="pacar"
        className="flex min-h-screen items-center bg-pink-50 px-6 py-24 text-slate-900 scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-6 text-4xl font-bold text-pink-600">Pacar</h2>

          <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full bg-pink-200">
            <img
              src="/gita.png"
              alt="Foto Gita Ariska"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3 text-left text-gray-700">
            <p>
              <span className="font-bold">Nama:</span> Gita Ariska
            </p>
            <p>
              <span className="font-bold">Agama:</span> Islam
            </p>
            <p>
              <span className="font-bold">Tinggi:</span> 163 cm
            </p>
            <p>
              <span className="font-bold">Berat:</span> 60 kg
            </p>
            <p>
              <span className="font-bold">Pekerjaan:</span> Kasir Alfamart
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
