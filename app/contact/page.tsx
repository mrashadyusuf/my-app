export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3">Contact</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hubungi Saya
        </h1>

        <div className="space-y-4 text-lg text-slate-300">
          <p>
            Email:{" "}
            <a
              href="mailto:emailkamu@example.com"
              className="text-blue-400 hover:underline"
            >
              emailkamu@example.com
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/username
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/username"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/username
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}