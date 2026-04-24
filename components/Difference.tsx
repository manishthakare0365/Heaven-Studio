"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: "Artistic Vision",
    desc: "Every session is guided by a director's eye — we compose light, emotion, and environment into images that feel cinematic and intimate at once.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Warm Experience",
    desc: "We create a relaxed, joyful atmosphere so you feel completely at ease — because genuine emotion makes the best photographs.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 10.5 16.5 15 12" />
      </svg>
    ),
    title: "Effortless Delivery",
    desc: "From booking to final gallery, our streamlined process means you receive beautifully edited images on time, with zero stress.",
  },
];

export default function Difference() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              The Heaven Difference
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#111010]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Why Families Choose Us.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group p-8 rounded-lg border border-[#E5DDD2] bg-white hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="text-[#B89A5C] mb-5">{card.icon}</div>
              <h3
                className="text-xl font-medium text-[#111010] mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {card.title}
              </h3>
              <p className="text-[#7A756F] leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
