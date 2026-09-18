import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GitBranch,
} from "lucide-react";
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

const workshops = [
  {
    number: "01",
    title: "Git & GitHub Workshop",
    description:
      "Learn Git fundamentals and practice a complete GitHub workflow through a hands-on collaborative project.",
    topics: [
      "Git fundamentals",
      "Branches & commits",
      "GitHub & Pull Requests",
      "Collaboration workflow",
    ],
    icon: GitBranch,
    status: "Available",
    href: "https://forms.gle/k4rPe4g6AeVd4WDW8"
  },
];

export default function WorkshopsPage() {
  return (
    <div
      className={`${archivo.variable} ${mono.variable} min-h-screen bg-[#F6F6F3] font-[family-name:var(--font-sans)]`}
    >
      <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-5xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#16191C] sm:text-5xl lg:text-[56px]">
              Workshops that turn
              <span className="text-[#1F6F5C]"> learning into doing.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#565B60]">
              Practical technical workshops where you learn concepts, work on
              real projects, and actually get your hands dirty.
            </p>
          </div>

          {/* Workshop Grid */}
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {workshops.map((workshop) => {
              const Icon = workshop.icon;
              const isAvailable = workshop.status === "Available";

              return (
                <article
                  key={workshop.number}
                  className={`group relative overflow-hidden rounded-2xl border border-[#DEDFDA] bg-white p-6 transition duration-200 sm:p-8 ${
                    isAvailable
                      ? "hover:-translate-y-1 hover:border-[#C9DCD4]"
                      : ""
                  }`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4EFEA] text-[#1F6F5C]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] ${
                          isAvailable
                            ? "bg-[#E4EFEA] text-[#1F6F5C]"
                            : "bg-[#F6F6F3] text-[#7A7F83]"
                        }`}
                      >
                        {workshop.status}
                      </span>

                      <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#7A7F83]">
                        {workshop.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-[#16191C] sm:text-3xl">
                      {workshop.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#565B60]">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="mt-7">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                      You&apos;ll work with
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-[#F6F6F3] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] text-[#565B60]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-8 border-t border-[#DEDFDA] pt-6">
                    {isAvailable ? (
                      <Link
                        href={workshop.href}
                        target="_blank"
                        className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] font-medium text-[#1F6F5C] transition hover:text-[#195A4A]"
                      >
                        Explore workshop
                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <span className="font-[family-name:var(--font-mono)] text-[12px] text-[#9A9D9F]">
                        Details coming soon
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Philosophy */}
          <div className="mt-20 border-t border-[#DEDFDA] pt-14 sm:mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                  The idea
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#16191C] sm:text-4xl">
                  Less watching.
                  <br />
                  More doing.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-[15px] leading-7 text-[#565B60]">
                  Workshops are designed around the idea that technical skills
                  become easier to understand when you actually use them.
                  Instead of spending the entire session listening to theory,
                  you&apos;ll work through examples, make mistakes, fix them,
                  and build something along the way.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-[#565B60]">
                  The goal isn&apos;t to leave knowing every command or
                  concept. It&apos;s to leave knowing enough to continue
                  learning and building on your own.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-[#C9DCD4] bg-[#E4EFEA] sm:mt-24">
            <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#16191C] sm:text-3xl">
                  Ready to learn by doing?
                </h2>

                <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#565B60]">
                  Join the next workshop, build something real, and learn
                  alongside other curious people.
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