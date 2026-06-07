export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3">Contact</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Me
        </h1>

        <div className="space-y-4 text-lg text-slate-300">
          <p>
            Email:{" "}
            <a
              href="mailto:mrashadyusuf@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mrashadyusuf@gmail.com
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/muhammad-rashad-yusuf"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              muhammad-rashad-yusuf
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/mrashadyusuf"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/mrashadyusuf
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}