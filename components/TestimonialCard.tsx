import { IBM_Plex_Mono } from "next/font/google";
import { Testimonial } from "@/data/testimonials";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function RatingSquares({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "h-2.5 w-2.5 rounded-[2px] bg-[#1F6F5C]"
              : "h-2.5 w-2.5 rounded-[2px] border border-[#DEDFDA]"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const { name, role, rating, feedback, liked, improvements } = testimonial;

  return (
    <article className={`${mono.variable} border-b border-[#DEDFDA] py-8 first:pt-0 last:border-b-0`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-[family-name:var(--font-mono)] text-[13px] text-[#16191C]">
          {name} <span className="text-[#565B60]">— {role}</span>
        </p>
        <RatingSquares rating={rating} />
      </div>

      <p className="mt-4 border-l-2 border-[#DEDFDA] pl-4 text-[15px] leading-7 text-[#33373B]">
        {feedback}
      </p>

      {(liked || improvements) && (
        <div className="mt-4 space-y-1.5 font-[family-name:var(--font-mono)] text-[12px]">
          {liked && (
            <p className="text-[#1F6F5C]">
              <span className="mr-2">+</span>
              {liked}
            </p>
          )}
          {improvements && (
            <p className="text-[#9C6B14]">
              <span className="mr-2">~</span>
              {improvements}
            </p>
          )}
        </div>
      )}
    </article>
  );
}