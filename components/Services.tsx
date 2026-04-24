"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    name: "Maternity",
    desc: "Celebrating the radiant journey of motherhood with timeless, artistic portraits.",
    image: "/images/50.jpg",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    name: "Newborn",
    desc: "Delicate, heartwarming portraits of your newest family member in their first days.",
    image: "/images/drive1/11.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    name: "Kids",
    desc: "Playful, vibrant photography that captures your child's personality and spirit.",
    image: "/images/drive1/8.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "Wedding",
    desc: "Elegant storytelling that immortalises every precious moment of your special day.",
    image: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="3" />
        <circle cx="15" cy="9" r="3" />
        <path d="M12 12v10M8 22h8" />
      </svg>
    ),
  },
  {
    name: "Pre-Wedding",
    desc: "Romantic, creative sessions that tell the story of your love before the big day.",
    image: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    name: "Corporate",
    desc: "Professional headshots and brand photography that elevate your business identity.",
    image: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "Product & Lifestyle",
    desc: "Stunning product and lifestyle imagery that drives conversions and brand desire.",
    image: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

export default function Services() {
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
              What We Do
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#111010]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Crafted for Every Chapter.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-lg overflow-hidden border border-[#E5DDD2] bg-white cursor-pointer hover:-translate-y-1.5 transition-transform duration-300 ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                {/* Image / Placeholder */}
                <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                  {service.image ? (
                    <>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#B89A5C]/0 group-hover:bg-[#B89A5C]/10 transition-colors duration-300" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1A1612] to-[#2C2420] flex items-end p-6">
                      <span
                        className="italic text-[#B89A5C] text-xl font-light"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {service.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#B89A5C]">{service.icon}</span>
                    <h3
                      className="text-lg font-medium text-[#111010]"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-[#7A756F] text-sm leading-relaxed mb-3">
                    {service.desc}
                  </p>
                  <span className="text-[#B89A5C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Explore →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
