import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Rashad Yusuf | Fullstack Developer",
  description:
    "Portfolio website Muhammad Rashad Yusuf, Fullstack Developer untuk web app, landing page, dashboard, dan API integration.",
};

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#portfolio-web", label: "Portfolio Web" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070A13]/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/#home" className="text-lg font-bold tracking-tight text-white">
              Rashad<span className="text-cyan-300">.</span>
            </Link>

            <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* <Link
              href="/#contact"
              className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Hire Me
            </Link> */}
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
