"use client";

import { Quote } from "lucide-react";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

import { testimonials } from "@/data/testimonials";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

function TestimonialCard({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) {
  return (
    <article className="w-[300px] shrink-0 rounded-xl border border-[#DEDFDA] bg-white p-5 sm:w-[340px]">
      <Quote className="h-4 w-4 text-[#1F6F5C]" />

      <p className="mt-4 line-clamp-4 text-[13px] leading-6 text-[#565B60]">
        “{feedback}”
      </p>

      <div className="mt-5 border-t border-[#DEDFDA] pt-4">
        <p className="font-[family-name:var(--font-mono)] text-[11px] font-medium text-[#16191C]">
          {name}
        </p>

        <p className="mt-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-[#7A7F83]">
          Workshop participant
        </p>
      </div>
    </article>
  );
}

export default function TestimonialMarquee() {
  if (testimonials.length === 0) {
    return null;
  }

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section
      className={`${archivo.variable} ${mono.variable} overflow-hidden border-y border-[#DEDFDA] bg-white py-12 sm:py-14`}
    >
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16191C] sm:text-4xl lg:whitespace-nowrap">
            Built with people.{" "}
            <span className="text-[#1F6F5C]">Learned together.</span>
          </h2>

          <p className="max-w-md text-[14px] leading-6 text-[#565B60] lg:text-left">
            A few words from students who joined the workshops.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-10 space-y-4">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Row 1 → */}
        <div className="flex w-max animate-marquee-left gap-4">
          {[...firstRow, ...firstRow].map((testimonial, index) => (
            <TestimonialCard
              key={`row-one-${testimonial.id}-${index}`}
              name={testimonial.name}
              feedback={testimonial.feedback}
            />
          ))}
        </div>

        {/* Row 2 ← */}
        <div className="flex w-max animate-marquee-right gap-4">
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <TestimonialCard
              key={`row-two-${testimonial.id}-${index}`}
              name={testimonial.name}
              feedback={testimonial.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
