"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8 },
  }),
};

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-screen w-full overflow-hidden">
      {/* Left column — copy */}
      <div className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-32 bg-[#F9F8F5] z-10">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-12 bg-[#B89A5C]" />
          <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
            Premium Photography · Noida
          </span>
          <span className="h-px w-12 bg-[#B89A5C]" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6 text-[#111010]"
        >
          Moments That{" "}
          <em className="italic text-[#B89A5C]">
            Last Forever.
          </em>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#7A756F] text-lg leading-relaxed mb-8 max-w-md"
        >
          Noida&apos;s most trusted photography studio — capturing the beauty of
          life&apos;s most precious chapters with artistry and heart.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-[#B89A5C] text-white text-sm tracking-wide rounded hover:bg-[#A8874A] hover:shadow-md transition-all duration-200"
          >
            Book a Session
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-7 py-3.5 border border-[#111010] text-[#111010] text-sm tracking-wide rounded hover:bg-[#111010] hover:text-white transition-colors duration-200"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Star badge */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#B89A5C">
                <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4 4.3 12.3l.7-4.1-3-2.9 4.2-.7z" />
              </svg>
            ))}
          </div>
          <span className="text-[#7A756F] text-sm">
            <strong className="text-[#1A1714]">★ 4.9</strong> · 200+ Families Served
          </span>
        </motion.div>
      </div>

      {/* Right column — two image panels (desktop only) */}
      <div className="relative hidden lg:grid grid-cols-[3fr_2fr]">
        {/* Left panel */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative overflow-hidden"
        >
          <Image
            src="/images/180.jpg"
            alt="Heaven Studio photography"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 1280px) 30vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
        </motion.div>

        {/* Right panel */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative overflow-hidden"
        >
          <Image
            src="/images/70.jpg"
            alt="Heaven Studio portrait"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 1280px) 20vw, 17vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
        </motion.div>
      </div>

      {/* Mobile: single image below text */}
      <div className="relative lg:hidden h-80 col-span-full">
        <Image
          src="/images/180.jpg"
          alt="Heaven Studio photography"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
