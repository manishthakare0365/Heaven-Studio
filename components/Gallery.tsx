"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const maternityImages = [
  { src: "/images/160.jpg", alt: "Maternity 160" },
  { src: "/images/30.jpg", alt: "Maternity 30" },
  { src: "/images/180.jpg", alt: "Maternity 180" },
  { src: "/images/20.jpg", alt: "Maternity 20" },
  { src: "/images/50.jpg", alt: "Maternity 50" },
  { src: "/images/100.jpg", alt: "Maternity 100" },
  { src: "/images/140.jpg", alt: "Maternity 140" },
  { src: "/images/80.jpg", alt: "Maternity 80" },
  { src: "/images/170.jpg", alt: "Maternity 170" },
  { src: "/images/40.jpg", alt: "Maternity 40" },
  { src: "/images/190.jpg", alt: "Maternity 190" },
  { src: "/images/60.jpg", alt: "Maternity 60" },
];

const kidsImages = [
  { src: "/images/drive1/3.png", alt: "Kids 3" },
  { src: "/images/drive1/9.png", alt: "Kids 9" },
  { src: "/images/drive1/11.png", alt: "Kids 11" },
  { src: "/images/drive1/8.png", alt: "Kids 8" },
  { src: "/images/drive1/17.png", alt: "Kids 17" },
  { src: "/images/drive1/6.png", alt: "Kids 6" },
  { src: "/images/drive1/15.png", alt: "Kids 15" },
  { src: "/images/drive1/18.png", alt: "Kids 18" },
  { src: "/images/drive1/22.png", alt: "Kids 22" },
  { src: "/images/drive1/5.png", alt: "Kids 5" },
  { src: "/images/drive1/24.png", alt: "Kids 24" },
  { src: "/images/drive1/20.png", alt: "Kids 20" },
];

const tabs = [
  { id: "all", label: "All Work" },
  { id: "maternity", label: "Maternity" },
  { id: "kids", label: "Kids & Newborn" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const images =
    active === "all"
      ? [...maternityImages, ...kidsImages]
      : active === "maternity"
      ? maternityImages
      : kidsImages;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              Portfolio
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#111010] mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Stories We&apos;ve Told.
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-colors duration-200 ${
                  active === tab.id
                    ? "bg-[#B89A5C] text-white"
                    : "border border-[#E5DDD2] text-[#7A756F] hover:border-[#B89A5C] hover:text-[#B89A5C]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="relative overflow-hidden rounded-md group"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
