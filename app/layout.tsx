import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <header className="bg-slate-900 text-white p-4">
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pacar">Girlfriend</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}