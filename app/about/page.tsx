export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3">About Me</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tentang Saya
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          Saya memiliki pengalaman di Next.js, NestJS, Spring Boot, dan FastAPI.
          Saya tertarik dalam pengembangan aplikasi web modern, backend service,
          API integration, dan deployment aplikasi.
        </p>
      </div>
    </section>
  );
}