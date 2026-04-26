"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "200+",
    label: "Families",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    value: "7",
    label: "Specialisations",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: "5★",
    label: "Rated",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    value: "No.1",
    label: "Noida's Finest",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-lg overflow-hidden"
          style={{ height: "600px" }}
        >
          <Image
            src="/images/160.jpg"
            alt="Heaven Studio — our philosophy"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              Our Philosophy
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#111010] mb-6 leading-snug">
            Every photo is a feeling,{" "}
            <em className="italic text-[#B89A5C]">preserved.</em>
          </h2>

          <p className="text-[#7A756F] leading-relaxed mb-4">
            At Heaven Studio, we believe photography is more than capturing a
            moment — it&apos;s about honouring the emotion within it. Our team
            of passionate photographers brings years of experience, an eye for
            detail, and a genuine love for storytelling.
          </p>
          <p className="text-[#7A756F] leading-relaxed mb-10">
            From the quiet joy of a newborn&apos;s first days to the grandeur
            of a wedding celebration, we are there to ensure every precious
            chapter of your life is remembered beautifully.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-lg border border-[#B89A5C]/25 bg-[#F9F8F5] hover:border-[#B89A5C]/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <span className="text-[#B89A5C] mt-0.5">{s.icon}</span>
                <div>
                  <div className="font-display text-2xl font-medium text-[#111010]">
                    {s.value}
                  </div>
                  <div className="text-[#7A756F] text-sm">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
