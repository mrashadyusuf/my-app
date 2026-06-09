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
    title: "Rasa Lokal",
    category: "UMKM Food Website",
    description:
      "Landing page untuk bisnis camilan lokal dengan tampilan hangat, modern, dan fokus pada produk, harga, benefit, serta tombol order.",
    image: "/images/camilan-web.png",
    url: "https://cemilan-umkm.vercel.app/",
  },
  {
    title: "Laundry Bersih Cepat",
    category: "Laundry Service Website",
    description:
      "Website promosi jasa laundry dengan desain bersih dan profesional, menampilkan layanan, benefit, harga, cara order, dan kontak pelanggan.",
    image: "/images/laundry-web.png",
    url: "https://laundry-bersih-ceria.vercel.app/",
  },
  {
    title: "Warung Makmur",
    category: "Grocery Store Website",
    description:
      "Website toko kelontong untuk menampilkan produk kebutuhan harian, promo, benefit belanja, testimoni, dan ajakan order secara online.",
    image: "/images/warung-makmur-web.png",
    url: "https://warung-makmur-kelontong.vercel.app/",
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

const pricingPackages = [
  {
    name: "Paket Starter",
    price: "Rp200.000",
    description:
      "Landing page 1 halaman untuk kebutuhan promosi sederhana.",
    features: [
      "Responsive di HP dan laptop",
      "Deploy ke Vercel",
      "1x revisi kecil",
      "Revisi tambahan dikenakan biaya",
    ],
  },
  {
    name: "Paket Business",
    price: "Rp300.000",
    description:
      "Landing page lengkap seperti contoh website laundry, cocok untuk UMKM dan jasa.",
    features: [
      "Responsive di HP dan laptop",
      "Deploy ke Vercel",
      "3x revisi kecil",
      "Revisi tambahan dikenakan biaya",
    ],
  },
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
                  <div className="overflow-hidden rounded-2xl bg-slate-950">
                  <img
                     src={item.image}
                     alt={item.title}
                     className="h-52 w-full object-contain transition duration-500 hover:scale-105"
                  />
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold text-cyan-300">
                    0{index + 1} • {item.category}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-slate-300">{item.description}</p>
                  <a
                     href={item.url}
                     target="_blank"
                     rel="noreferrer"
                     className="mt-5 inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
                  >
                     Lihat Website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-24">
         <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
               <div>
               <p className="mb-3 font-semibold text-cyan-300">Services</p>
               <h2 className="text-3xl font-bold md:text-5xl">
                  Apa yang bisa saya bantu?
               </h2>
               <p className="mt-5 leading-relaxed text-slate-300">
                  Saya bisa membantu membuat website yang langsung bisa dipakai untuk
                  promosi, portfolio, company profile, atau kebutuhan bisnis kecil.
               </p>
               </div>

               <div className="grid gap-4 sm:grid-cols-2">
               {services.map((service) => (
                  <div
                     key={service}
                     className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/60"
                  >
                     <p className="text-lg font-semibold">{service}</p>
                  </div>
               ))}
               </div>
            </div>

            <div className="mt-16">
               <div className="mb-8 text-center">
               <p className="mb-3 font-semibold text-cyan-300">Paket Harga</p>
               <h3 className="text-3xl font-bold md:text-4xl">
                  Pilih paket sesuai kebutuhan website kamu
               </h3>
               <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Harga sudah termasuk pembuatan landing page, tampilan responsive,
                  tombol WhatsApp, dan deploy ke Vercel.
               </p>
               </div>

               <div className="grid gap-6 md:grid-cols-2">
               {pricingPackages.map((pkg, index) => (
                  <div
                     key={pkg.name}
                     className={`relative overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-1 ${
                     index === 1
                        ? "border-cyan-300/60 bg-cyan-300/10"
                        : "border-white/10 bg-white/[0.04]"
                     }`}
                  >
                     {index === 1 && (
                     <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                        Best Value
                     </div>
                     )}

                     <p className="text-lg font-semibold text-cyan-300">{pkg.name}</p>

                     <div className="mt-3 flex items-end gap-2">
                     <h4 className="text-4xl font-bold text-white">{pkg.price}</h4>
                     <span className="mb-1 text-sm text-slate-400">/ project</span>
                     </div>

                     <p className="mt-4 leading-relaxed text-slate-300">
                     {pkg.description}
                     </p>

                     <ul className="mt-6 space-y-3">
                     {pkg.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-slate-300">
                           <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/20 text-xs text-cyan-300">
                           ✓
                           </span>
                           <span>{feature}</span>
                        </li>
                     ))}
                     </ul>

                     <a
                     href={`https://wa.me/6281947714606?text=${encodeURIComponent(
                        `Halo Rashad, saya tertarik dengan ${pkg.name} untuk pembuatan website.`
                     )}`}
                     target="_blank"
                     rel="noreferrer"
                     className="mt-7 inline-flex w-full justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                     >
                     Pilih Paket
                     </a>
                  </div>
               ))}
               </div>
            </div>
         </div>
      </section>
      <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-12">
         <div className="text-center">
            <p className="mb-3 font-semibold text-cyan-300">Contact</p>
            <h2 className="text-3xl font-bold md:text-5xl">
            Tertarik bekerja sama?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
            Kirim pesan untuk diskusi project, pembuatan website portfolio,
            landing page jualan, atau pengembangan aplikasi web.
            </p>
         </div>

         <div className="mt-10 grid gap-4 md:grid-cols-2">
            <a
            href="https://wa.me/6281947714606"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
            <p className="mb-1 text-sm font-semibold text-cyan-300">WhatsApp</p>
            <p className="text-lg font-bold text-white">+62 819-4771-4606</p>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
               Klik untuk chat langsung
            </p>
            </a>

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mrashadyusuf2@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
            <p className="mb-1 text-sm font-semibold text-cyan-300">Email</p>
            <p className="break-all text-lg font-bold text-white">
               mrashadyusuf2@gmail.com
            </p>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
               Klik untuk kirim email
            </p>
            </a>

            <a
            href="https://github.com/mrashadyusuf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
            <p className="mb-1 text-sm font-semibold text-cyan-300">GitHub</p>
            <p className="text-lg font-bold text-white">@mrashadyusuf</p>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
               Klik untuk melihat repository
            </p>
            </a>

            <a
            href="https://linkedin.com/in/muhammad-rashad-yusuf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
            <p className="mb-1 text-sm font-semibold text-cyan-300">LinkedIn</p>
            <p className="break-all text-lg font-bold text-white">
               linkedin.com/in/muhammad-rashad-yusuf
            </p>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
               Klik untuk melihat profil profesional
            </p>
            </a>
         </div>
      </div>
      </section>
    </main>
  );
}
