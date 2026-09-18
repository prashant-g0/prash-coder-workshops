"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={`${archivo.variable} ${mono.variable} border-b border-[#DEDFDA] bg-[#F6F6F3]`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="prash.coder Workshop home"
        >
          {/* Logo placeholder */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#D5D6D1] bg-white">
            <Image
              src="/icons/logo.png"
              alt="Workshop logo"
              fill
              className="object-contain p-1"
            />
          </div>

          <div>
            <p className="font-[family-name:var(--font-sans)] text-[16px] font-bold leading-none text-[#16191C]">
              prash.coder
            </p>

            <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#565B60]">
              Workshop
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-x-5 font-[family-name:var(--font-mono)] text-[12px] sm:gap-x-7 sm:text-[13px]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition ${
                  isActive
                    ? "font-medium text-[#16191C]"
                    : "text-[#565B60] hover:text-[#16191C]"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-[#1F6F5C]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}