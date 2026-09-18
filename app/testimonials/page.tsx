import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight, Quote, Star, Users } from "lucide-react";

import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

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

export default function TestimonialsPage() {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <div
      className={`${archivo.variable} ${mono.variable} min-h-screen bg-[#F6F6F3] font-[family-name:var(--font-sans)]`}
    >
      <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-12">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#16191C] sm:text-5xl lg:text-[56px]">
                What students
                <span className="ml-2 text-[#1F6F5C]">think.</span>
              </h1>

              <p className="mt-4 max-w-[600px] text-[16px] leading-7 text-[#565B60]">
                Notes from students after attending the workshop, shared in
                their own words.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-[#DEDFDA] bg-white px-4 py-3">
                <Users className="h-5 w-5 text-[#1F6F5C]" />

                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#7A7F83]">
                    STUDENTS
                  </p>
                  <p className="text-lg font-semibold text-[#16191C]">
                    {testimonials.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#DEDFDA] bg-white px-4 py-3">
                <Star className="h-5 w-5 fill-current text-[#1F6F5C]" />

                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#7A7F83]">
                    AVG RATING
                  </p>
                  <p className="text-lg font-semibold text-[#16191C]">
                    {avgRating}/5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-12 max-w-7xl sm:mt-14">
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative rounded-2xl border border-[#D5D6D1] bg-white p-2 transition duration-200 hover:border-[#C9DCD4]"
              >
                {/* Quote Icon */}
                <div className="absolute -left-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#C9DCD4] bg-[#E4EFEA] text-[#1F6F5C] transition-transform duration-200 group-hover:-rotate-6">
                  <Quote className="h-3.5 w-3.5" />
                </div>

                {/* Testimonial */}
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 max-w-7xl sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-[#C9DCD4] bg-[#E4EFEA] px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-12">
            <div>
              <div className="mb-3 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#1F6F5C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
                Next workshop
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-[#16191C] sm:text-3xl">
                Your turn to commit to it.
              </h2>

              <p className="mt-3 max-w-[600px] text-[15px] leading-7 text-[#33373B]">
                Join the next Git &amp; GitHub workshop and learn through the
                same hands-on format, with live guidance from start to finish.
              </p>
            </div>

            <Link
              href="/workshops"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#1F6F5C] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#195A4A] lg:mt-0"
            >
              Explore workshops
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
