import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-white">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/#home" className="text-lg font-bold text-blue-400">
              Rashad
            </Link>

            <div className="flex gap-4 text-sm font-medium text-slate-300 md:gap-6 md:text-base">
              <Link href="/#home" className="hover:text-blue-400">
                Home
              </Link>
              <Link href="/#about" className="hover:text-blue-400">
                About
              </Link>
              <Link href="/#projects" className="hover:text-blue-400">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-blue-400">
                Contact
              </Link>
              <Link href="/#pacar" className="hover:text-pink-400">
                Pacar
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
