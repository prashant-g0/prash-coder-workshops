import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GitBranch,
  Sparkles,
  Users,
  Wrench,
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
    title: "Git & GitHub",
    description:
      "Understand version control and learn how developers collaborate on real projects.",
    icon: GitBranch,
    href: "https://forms.gle/k4rPe4g6AeVd4WDW8",
  },
];

const approach = [
  {
    icon: Wrench,
    title: "Hands-on",
    description:
      "Less theory, more doing. Every workshop gives you something practical to work with.",
  },
  {
    icon: Users,
    title: "Learn together",
    description:
      "Ask questions, make mistakes, solve problems, and learn alongside others.",
  },
  {
    icon: Sparkles,
    title: "Stay curious",
    description:
      "The goal isn't to know everything. It's to leave knowing how to keep learning.",
  },
];

export default function Home() {
  return (
    <div
      className={`${archivo.variable} ${mono.variable} min-h-screen bg-[#F6F6F3] font-[family-name:var(--font-sans)]`}
    >
      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#DEDFDA]">
        <div className="mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-15">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DEDFDA] bg-white px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[#565B60]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
                prash.coder / workshops
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#16191C] sm:text-6xl lg:text-[76px]">
                Learn something.
                <br />
                <span className="text-[#1F6F5C]">Build something.</span>
                <br />
                Share what you know.
              </h1>

              <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[#565B60] sm:text-lg">
                Practical technical workshops for curious people who want to
                stop just watching tutorials and start actually building.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1F6F5C] px-5 py-3 font-[family-name:var(--font-mono)] text-[12px] font-medium text-white transition hover:bg-[#195A4A]"
                >
                  Explore workshops
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#D5D6D1] bg-white px-5 py-3 font-[family-name:var(--font-mono)] text-[12px] font-medium text-[#33373B] transition hover:border-[#1F6F5C] hover:text-[#1F6F5C]"
                >
                  My story
                </Link>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto max-w-[430px]">
                {/* Decorative background */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#C9DCD4]" />
                <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-[#DEDFDA]" />

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-2xl border border-[#DEDFDA] bg-white shadow-sm">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-[#DEDFDA] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D5D6D1]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D5D6D1]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D5D6D1]" />
                    </div>

                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7A7F83]">
                      workshop.sh
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="px-6 py-7">
                    <div className="font-[family-name:var(--font-mono)] text-[12px] leading-7">
                      <p className="text-[#7A7F83]">$ git status</p>

                      <p className="mt-1 text-[#565B60]">
                        On branch <span className="text-[#1F6F5C]">main</span>
                      </p>

                      <p className="mt-5 text-[#7A7F83]">$ git add .</p>

                      <p className="mt-5 text-[#7A7F83]">
                        $ git commit -m{" "}
                        <span className="text-[#1F6F5C]">
                          &quot;build something&quot;
                        </span>
                      </p>

                      <div className="my-6 h-px bg-[#DEDFDA]" />

                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F5C]">
                          <GitBranch className="h-4 w-4" />
                        </span>

                        <div>
                          <p className="font-[family-name:var(--font-sans)] text-sm font-medium text-[#16191C]">
                            Learn by doing
                          </p>
                          <p className="mt-0.5 text-[10px] text-[#7A7F83]">
                            commit · collaborate · create
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Workshop Card */}
                <div className="absolute -bottom-7 -right-6 w-48 rounded-xl border border-[#DEDFDA] bg-[#F6F6F3] p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-[#7A7F83]">
                      Current focus
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#16191C]">
                    Git & GitHub
                  </p>

                  <div className="mt-3 flex gap-1">
                    <span className="h-1.5 flex-1 rounded-full bg-[#1F6F5C]" />
                    <span className="h-1.5 flex-1 rounded-full bg-[#1F6F5C]" />
                    <span className="h-1.5 flex-1 rounded-full bg-[#C9DCD4]" />
                    <span className="h-1.5 flex-1 rounded-full bg-[#DEDFDA]" />
                  </div>

                  <p className="mt-2 font-[family-name:var(--font-mono)] text-[9px] text-[#7A7F83]">
                    learn → practice → ship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Meta */}
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 border-t border-[#DEDFDA] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                Format
              </p>
              <p className="mt-2 text-sm font-medium text-[#16191C]">
                Hands-on
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium text-[#16191C]">
                Practical skills
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#7A7F83]">
                Philosophy
              </p>
              <p className="mt-2 text-sm font-medium text-[#16191C]">
                Learn by doing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                Explore
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#16191C] sm:text-4xl">
                Workshops built around doing.
              </h2>

              <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#565B60]">
                Learn useful technical skills through practical projects,
                experiments, and real workflows.
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
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;

              return (
                <article
                  key={workshop.title}
                  className="group rounded-2xl border border-[#DEDFDA] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C9DCD4] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4EFEA] text-[#1F6F5C]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7A7F83]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-semibold text-[#16191C]">
                    {workshop.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#565B60]">
                    {workshop.description}
                  </p>

                  <Link
                    href={workshop.href}
                    target="_blank"
                    className="mt-7 inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[11px] font-medium text-[#1F6F5C]"
                  >
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-[#DEDFDA] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                The approach
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#16191C] sm:text-4xl">
                Less watching.
                <br />
                <span className="text-[#1F6F5C]">More doing.</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {approach.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#DEDFDA] bg-[#F6F6F3] p-6"
                  >
                    <Icon className="h-5 w-5 text-[#1F6F5C]" />

                    <h3 className="mt-6 text-lg font-semibold text-[#16191C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#565B60]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-[#C9DCD4] bg-[#E4EFEA]">
            <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#16191C] sm:text-3xl">
                  Your next skill could start here.
                </h2>

                <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#565B60]">
                  Pick a workshop, bring your curiosity, and let&apos;s build
                  something together.
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
