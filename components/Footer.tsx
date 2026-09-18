import Link from "next/link";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { ArrowUpRight, Sparkles } from "lucide-react";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const links = [
  { href: "/", label: "Home" },
  { href: "/workshops", label: "Workshops" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer
      className={`${archivo.variable} ${mono.variable} border-t border-[#DEDFDA] bg-[#F6F6F3]`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-10 lg:px-10">
        {/* Brand + Navigation */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Brand + Vision */}
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[#1F6F5C]">
              prash.coder / workshop
            </p>

            <h2 className="mt-5 mb-7 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-[#16191C] sm:text-4xl">
              Learn things.
              <br />
              <span className="text-[#1F6F5C]">Build things.</span>
              <br />
              Share things.
            </h2>
          </div>

          {/* Navigation */}
          <div className="lg:justify-self-end">
            <p className="mb-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#7A7F83]">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-1 font-[family-name:var(--font-mono)] text-[13px] text-[#565B60] transition hover:text-[#1F6F5C]"
                >
                  {link.label}

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[#DEDFDA] pt-6 font-[family-name:var(--font-mono)] text-[11px] text-[#7A7F83] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} prash.coder</p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
            <span>Learn. Build. Collaborate.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}