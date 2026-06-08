const projects = [
  {
    title: "CMS Landing Page Pegadaian",
    description:
      "Membangun CMS untuk mengelola konten landing page secara dinamis, rapi, dan mudah diperbarui oleh admin.",
    tech: "Next.js • NestJS • PostgreSQL",
  },
  {
    title: "Dashboard Inventory KFC",
    description:
      "Mengembangkan dashboard monitoring stok, receiving, transfer, dan laporan inventory cabang dengan integrasi backend.",
    tech: "Angular • Spring Boot • Oracle",
  },
  {
    title: "Recommendation System",
    description:
      "Membuat sistem rekomendasi pemesanan barang berdasarkan histori transaksi menggunakan Apriori dan Random Forest.",
    tech: "Python • FastAPI • Scikit-Learn",
  },
  {
    title: "XL Microservice App",
    description:
      "Melakukan bug fixing dan penambahan fitur pada aplikasi microservice, termasuk validasi, null handling, dan stabilitas API.",
    tech: "Spring Boot • Golang • Microservices",
  },
];

const services = [
  "Landing page bisnis/UMKM",
  "Website portofolio pribadi",
  "Company profile sederhana",
  "Integrasi form kontak & WhatsApp",
];

const portfolioWebsites = [
  {
    title: "Landing Page UMKM",
    category: "Website Jualan",
    description:
      "Tampilan satu halaman untuk menjelaskan produk, harga, benefit, FAQ, dan tombol order WhatsApp.",
  },
  {
    title: "Portfolio Personal",
    category: "Personal Branding",
    description:
      "Website profesional untuk menampilkan profil, skill, pengalaman, project, dan kontak agar terlihat siap kerja/freelance.",
  },
  {
    title: "Company Profile",
    category: "Bisnis & Jasa",
    description:
      "Website ringkas untuk memperkenalkan layanan, keunggulan, testimoni, dan kontak perusahaan.",
  },
];

const skills = [
  "Next.js",
  "React",
  "Angular",
  "Spring Boot",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "Oracle",
  "Docker",
  "GitLab CI/CD",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#070A13] text-white">
      <section id="home" className="relative min-h-screen px-6 pb-24 pt-32">
        <div className="absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 -z-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Fullstack Developer • Web Developer
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Hi, I&apos;m Rashad. I build modern websites and reliable web apps.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Saya membantu membuat website yang rapi, cepat, responsif, dan
              mudah digunakan — mulai dari portfolio pribadi, landing page
              jualan, sampai dashboard bisnis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio-web"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Lihat Portfolio Website
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-cyan-300">10+</p>
                <p className="text-sm text-slate-400">Tech Stack</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-cyan-300">4+</p>
                <p className="text-sm text-slate-400">Project Area</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-cyan-300">Fullstack</p>
                <p className="text-sm text-slate-400">Frontend + Backend</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950 p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 p-5 text-slate-950">
                  <p className="text-sm font-semibold opacity-80">Featured Skill</p>
                  <h2 className="mt-2 text-2xl font-bold">Clean UI + Scalable API</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">Frontend</p>
                    <p className="mt-2 font-semibold">Next.js / Angular</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">Backend</p>
                    <p className="mt-2 font-semibold">Spring / Nest / FastAPI</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 font-semibold">
                    Portfolio website, landing page, dashboard, API integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 font-semibold text-cyan-300">About Me</p>
            <h2 className="text-3xl font-bold md:text-5xl">Developer yang fokus ke solusi nyata.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              Saya adalah Fullstack Developer dengan pengalaman membangun aplikasi
              web, dashboard, API, dan integrasi sistem. Saya terbiasa bekerja
              menggunakan Next.js, Angular, Spring Boot, NestJS, FastAPI, dan database
              seperti PostgreSQL atau Oracle.
            </p>
            <p>
              Dalam setiap project, saya mengutamakan tampilan yang bersih,
              struktur kode yang mudah dikembangkan, serta fitur yang benar-benar
              membantu kebutuhan user atau bisnis.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 bg-slate-950/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-cyan-300">Skills</p>
          <h2 className="mb-8 text-3xl font-bold md:text-5xl">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-cyan-300">Experience</p>
          <h2 className="mb-10 text-3xl font-bold md:text-5xl">Selected Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.07]"
              >
                <h3 className="mb-3 text-2xl font-semibold group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mb-5 leading-relaxed text-slate-300">{project.description}</p>
                <span className="text-sm font-medium text-cyan-300">{project.tech}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-web" className="scroll-mt-24 bg-slate-950/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-semibold text-cyan-300">Website Portfolio</p>
              <h2 className="text-3xl font-bold md:text-5xl">Portfolio Jasa Pembuatan Website</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Cocok untuk personal branding, UMKM, jasa freelance, dan bisnis yang
              ingin tampil lebih profesional secara online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolioWebsites.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/60"
              >
                <div className="border-b border-white/10 bg-slate-900 p-4">
                  <div className="mb-4 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3 rounded-2xl bg-slate-950 p-4">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-400/80 to-indigo-500/80" />
                    <div className="h-3 w-3/4 rounded-full bg-slate-700" />
                    <div className="h-3 w-1/2 rounded-full bg-slate-800" />
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="h-12 rounded-xl bg-slate-800" />
                      <div className="h-12 rounded-xl bg-slate-800" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    0{index + 1} • {item.category}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-semibold text-cyan-300">Services</p>
            <h2 className="text-3xl font-bold md:text-5xl">Apa yang bisa saya bantu?</h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Saya bisa membantu membuat website yang langsung bisa dipakai untuk
              promosi, portfolio, company profile, atau kebutuhan bisnis kecil.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-lg font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 text-center md:p-12">
          <p className="mb-3 font-semibold text-cyan-300">Contact</p>
          <h2 className="text-3xl font-bold md:text-5xl">Tertarik bekerja sama?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
            Kirim pesan untuk diskusi project, pembuatan website portfolio,
            landing page jualan, atau pengembangan aplikasi web.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
               href="https://wa.me/6281947714606"
               target="_blank"
               rel="noreferrer"
               className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
               Hubungi via WhatsApp
            </a>
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=mrashadyusuf2@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Email Saya
            </a>
            <a
              href="https://github.com/mrashadyusuf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/muhammad-rashad-yusuf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
