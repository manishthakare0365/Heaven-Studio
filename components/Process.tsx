"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    step: "01",
    title: "Reach Out",
    desc: "Get in touch via WhatsApp, phone or our booking form. We reply within 2 hours.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    step: "02",
    title: "Plan Together",
    desc: "We discuss your vision, style, wardrobe ideas, and choose the perfect date.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    step: "03",
    title: "The Session",
    desc: "A relaxed, guided shoot in our Noida studio — all you need to do is enjoy it.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    step: "04",
    title: "Receive & Cherish",
    desc: "Your edited gallery is delivered online within 7–10 days, ready to treasure forever.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              How It Works
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#111010]">
            Simple. Seamless. Stunning.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1.5px]">
            <div
              className="h-full"
              style={{
                background: "linear-gradient(to right, #B89A5C, #D4B47A, #B89A5C)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[#B89A5C] bg-[#F9F8F5] flex items-center justify-center text-[#B89A5C] mb-4 shadow-sm">
                  {step.icon}
                </div>

                {/* Step number */}
                <span className="text-[0.65rem] tracking-[0.2em] text-[#B89A5C] mb-2 font-medium uppercase">
                  STEP {step.step}
                </span>

                <h3 className="text-lg font-semibold text-[#111010] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#7A756F] text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
