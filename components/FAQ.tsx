"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    q: "How do I book a session at Heaven Studio?",
    a: "Simply reach out via our contact form, WhatsApp, or phone. We'll confirm your preferred date, discuss session details, and secure your booking with a small advance payment.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2–4 weeks in advance for regular sessions, and 4–6 weeks for weddings and pre-wedding shoots, especially during peak seasons (Oct–Feb).",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    q: "How long does it take to receive my photos?",
    a: "Edited galleries for most sessions are delivered within 7–10 business days. Wedding galleries may take up to 3–4 weeks due to the volume of images.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    q: "What should I wear for my session?",
    a: "We'll guide you with a personalised style consultation before your shoot. Generally, solid colours, pastels, and classic outfits photograph beautifully. Avoid busy patterns.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    q: "Do you offer packages or custom pricing?",
    a: "Yes! We have packages for every occasion and budget. We also offer custom quotes for weddings, corporate, and multi-session bookings. Contact us for a personalised proposal.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              FAQ
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#111010]">
            Questions & Answers.
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
                open === i
                  ? "border-[#B89A5C]/50 shadow-sm"
                  : "border-[#E5DDD2]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`group w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                  open === i ? "bg-[#FDFAF6]" : "bg-[#F9F8F5] hover:bg-[#F0EDE6]"
                }`}
              >
                {/* FAQ icon */}
                <span className="text-[#B89A5C] shrink-0">{faq.icon}</span>

                {/* Question — sans-serif, functional */}
                <span className="flex-1 text-[#111010] font-medium text-base">
                  {faq.q}
                </span>

                {/* Chevron in circle */}
                <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  open === i ? "bg-[#B89A5C]/15" : "bg-[#F0EDE6] group-hover:bg-[#B89A5C]/10"
                }`}>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#B89A5C] flex items-center justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-4 border-t border-[#E5DDD2]">
                      <p className="text-[#7A756F] leading-relaxed text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
