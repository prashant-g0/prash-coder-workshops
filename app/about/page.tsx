import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const latestProjects = [
  {
    number: "01",
    title: "urllio - URL Shortener",
    description:
      "Shorten, manage, and track your links with urll.io, a fast and simple URL shortener with analytics and QR codes.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    href: "https://urllio.vercel.app/",
  },
  {
    number: "02",
    title: "Blush - Secret Messages",
    description:
      "Blush is a secure space for unsaid words. Send a private message that vanishes after one read, or post an anonymous secret to the public wall",
    tags: ["Streamlit", "Python", "PostgreSQL"],
    href: "https://blushnow.streamlit.app/",
  },
  {
    number: "03",
    title: "Your Crush Predictor",
    description:
      "An ML based crush likelihood predictor built with Streamlit..",
    tags: ["Python", "ML", "Streamlit"],
    href: "https://crushpredictor.streamlit.app/prediction",
  },
];

const workshops = [
  {
    number: "01",
    title: "Git & GitHub Workshop",
    description:
      "Learn Git and GitHub through a real collaborative workflow - from your first commit to your first pull request.",
    tags: ["Git", "GitHub", "Collaboration"],
    href: "https://forms.gle/k4rPe4g6AeVd4WDW8",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/prashant-g0",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prashant-g0",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/prash.coder",
    icon: FaInstagram,
  },
];

export default function AboutPage() {
  return (
    <div
      className={`${archivo.variable} ${mono.variable} min-h-screen bg-[#F6F6F3] font-[family-name:var(--font-sans)]`}
    >
      <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-15">
        <div className="mx-auto max-w-7xl">
          {/* Page Intro */}
          <div className="max-w-5xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#16191C] sm:text-5xl lg:text-[56px]">
              The person behind{" "}
              <span className="text-[#1F6F5C]"> prash.coder.</span>
            </h1>
          </div>

          {/* Story */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            {/* Profile */}
            <div className="rounded-2xl border border-[#DEDFDA] bg-white p-6 sm:p-8">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#E4EFEA]">
                {/* Replace with your actual image */}
                <Image
                  src="/images/spects-avatar.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                  Hi, I&apos;m
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#16191C]">
                  Prashant G.
                </h2>

                <p className="mt-1 font-[family-name:var(--font-mono)] text-[12px] text-[#7A7F83]">
                  Developer · Educator · Builder
                </p>
              </div>

              {/* Socials */}
              <div className="mt-6 flex gap-2 border-t border-[#DEDFDA] pt-6">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <div key={social.label} className="group relative">
                      <Link
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEDFDA] bg-[#F6F6F3] text-[#565B60] transition hover:border-[#1F6F5C] hover:bg-[#E4EFEA] hover:text-[#1F6F5C]"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>

                      {/* Tooltip */}
                      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 opacity-0 whitespace-nowrap rounded-md bg-[#16191C] px-2 py-1 font-[family-name:var(--font-mono)] text-[9px] text-white transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                        {social.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Personal line */}
              <div className="mt-6 rounded-xl bg-[#F6F6F3] p-5">
                <Code2 className="h-4 w-4 text-[#1F6F5C]" />
                <p className="mt-3 text-[14px] font-medium leading-6 text-[#33373B]">
                  &quot;You can&apos;t keep doing the same things and expect
                  extraordinary results.&quot;
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-start">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#7A7F83]">
                My story
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16191C] sm:text-4xl">
                Learning became more meaningful when I started sharing it.
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#565B60]">
                <p>
                  I&apos;m a developer who enjoys understanding how things work,
                  building projects, and experimenting with new technologies.
                  Over time, I realised that learning becomes much more valuable
                  when you can explain it, practice it, and build something with
                  it.
                </p>

                <p>
                  That idea is what led to{" "}
                  <span className="font-medium text-[#16191C]">
                    prash.coder Workshop
                  </span>
                  . It&apos;s a space for practical technical learning where
                  workshops focus less on simply watching and more on actually
                  doing.
                </p>

                <p>
                  Whether it&apos;s Git and GitHub, web development, AI, or
                  something completely new, the goal stays the same: break
                  complex ideas into understandable pieces, work through them
                  together, and leave with something you can say you built.
                </p>
              </div>

              {/* Approach */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#DEDFDA] bg-white p-5">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                    Approach
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#16191C]">
                    Learn by doing
                  </p>
                </div>

                <div className="rounded-xl border border-[#DEDFDA] bg-white p-5">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#16191C]">
                    Practical skills
                  </p>
                </div>

                <div className="rounded-xl border border-[#DEDFDA] bg-white p-5">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                    Philosophy
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#16191C]">
                    Build together
                  </p>
                </div>
              </div>

              {/* Latest Projects */}
              {latestProjects.length > 0 && (
                <div className="mt-10 border-t border-[#DEDFDA] pt-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#1F6F5C]">
                        Recent work
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#16191C]">
                        Latest projects
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {latestProjects.map((project) => (
                      <Link
                        key={project.number}
                        href={project.href}
                        target="_blank"
                        className="group flex min-h-[175px] flex-col rounded-xl border border-[#DEDFDA] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#C9DCD4]"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7A7F83]">
                            {project.number}
                          </span>

                          <ArrowUpRight className="h-3.5 w-3.5 text-[#7A7F83] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F6F5C]" />
                        </div>

                        {/* Project Info */}
                        <div className="mt-5">
                          <h4 className="text-sm font-semibold leading-5 text-[#16191C]">
                            {project.title}
                          </h4>

                          <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-[#7A7F83]">
                            {project.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#F6F6F3] px-2 py-1 font-[family-name:var(--font-mono)] text-[9px] text-[#565B60]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Workshops */}
          <div className="mt-24 border-t border-[#DEDFDA] pt-14 sm:mt-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                  Explore
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#16191C] sm:text-4xl">
                  Workshops built around doing.
                </h2>

                <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#565B60]">
                  Pick a topic, get your hands dirty, and learn through
                  practical projects and real workflows.
                </p>
              </div>

              <Link
                href="/workshops"
                className="inline-flex w-fit items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] font-medium text-[#1F6F5C] transition hover:text-[#195A4A]"
              >
                View all workshops
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {workshops.map((workshop) => (
                <Link
                  href={workshop.href}
                  key={workshop.number}
                  target="_blank"
                  className="group rounded-2xl border border-[#DEDFDA] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C9DCD4]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#7A7F83]">
                      {workshop.number}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#7A7F83] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F6F5C]" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#16191C]">
                    {workshop.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#565B60]">
                    {workshop.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {workshop.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F6F6F3] px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] text-[#565B60]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-[#C9DCD4] bg-[#E4EFEA] sm:mt-24">
            <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#16191C] sm:text-3xl">
                  Your next skill could start here.
                </h2>

                <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#565B60]">
                  Join a workshop, meet other learners, and turn what you learn
                  into something real.
                </p>
              </div>

              <Link
                href="/workshops"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#1F6F5C] px-5 py-3 font-[family-name:var(--font-mono)] text-[12px] font-medium text-white transition hover:bg-[#195A4A]"
              >
                Join the next workshop
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
