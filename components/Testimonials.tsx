"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Heaven Studio captured our maternity shoot so beautifully. Every photo is a work of art — we couldn't stop smiling when we saw the gallery. Absolutely worth every penny.",
    name: "Priya & Rahul Sharma",
    occasion: "Maternity Session",
  },
  {
    quote:
      "The team was incredibly professional and made our little one feel so comfortable during the newborn shoot. The photos are beyond gorgeous — pure magic.",
    name: "Anjali Verma",
    occasion: "Newborn Photography",
  },
  {
    quote:
      "We hired Heaven Studio for our pre-wedding shoot and the results were breathtaking. They understood our vision perfectly and brought it to life beautifully.",
    name: "Deepika & Arjun Singh",
    occasion: "Pre-Wedding Session",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveSlide(Math.min(index, testimonials.length - 1));
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              Client Love
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#111010]">
            What Our Clients Say.
          </h2>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-lg p-8 border border-[#D4C9BE] flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Quote icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                className="text-[#B89A5C] mb-4 opacity-75"
              >
                <path
                  d="M9.333 20C7.493 20 6 18.507 6 16.667V14c0-3.682 2.985-6.667 6.667-6.667V9.333A5.334 5.334 0 0 0 7.333 14.667V16c0 1.1.9 2 2 2 .368 0 .667.298.667.667v1.333c0 1.1.9 2 2 2h1.333C14.43 22 15 22.57 15 23.333S14.43 24.667 13.333 24.667H12c-1.473 0-2.667-1.194-2.667-2.667z"
                  fill="currentColor"
                />
                <path
                  d="M21.333 20C19.493 20 18 18.507 18 16.667V14c0-3.682 2.985-6.667 6.667-6.667V9.333A5.334 5.334 0 0 0 19.333 14.667V16c0 1.1.9 2 2 2 .368 0 .667.298.667.667v1.333c0 1.1.9 2 2 2h1.333c1.097 0 1.667.57 1.667 1.333S26.43 24.667 25.333 24.667H24c-1.473 0-2.667-1.194-2.667-2.667z"
                  fill="currentColor"
                />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#B89A5C">
                    <path d="M7 1l1.58 3.19L12 4.76l-2.5 2.43.59 3.43L7 9.1 4.91 10.62l.59-3.43L3 4.76l3.42-.57z" />
                  </svg>
                ))}
              </div>

              <p
                className="font-display text-[#1A1714] italic leading-relaxed flex-1 mb-6"
                style={{ fontSize: "1.05rem" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <div className="font-medium text-[#111010] text-sm">{t.name}</div>
                <div className="text-[#B89A5C] text-xs tracking-wide mt-0.5">{t.occasion}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden flex gap-5 overflow-x-auto no-scrollbar pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg p-6 border border-[#D4C9BE] flex flex-col shrink-0 w-[80vw] max-w-sm"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#B89A5C">
                    <path d="M7 1l1.58 3.19L12 4.76l-2.5 2.43.59 3.43L7 9.1 4.91 10.62l.59-3.43L3 4.76l3.42-.57z" />
                  </svg>
                ))}
              </div>
              <p
                className="font-display text-[#1A1714] italic leading-relaxed flex-1 mb-4"
                style={{ fontSize: "1.05rem" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-medium text-[#111010] text-sm">{t.name}</div>
                <div className="text-[#B89A5C] text-xs tracking-wide mt-0.5">{t.occasion}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll dot indicators */}
        <div className="flex md:hidden justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                if (!scrollRef.current) return;
                const cardWidth = scrollRef.current.clientWidth;
                scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                setActiveSlide(i);
              }}
              className={`rounded-full transition-all duration-200 ${
                activeSlide === i
                  ? "w-5 h-2 bg-[#B89A5C]"
                  : "w-2 h-2 bg-[#D4C9BE] hover:bg-[#B89A5C]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
