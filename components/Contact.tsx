"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 87777 59923",
    href: "tel:+918777759923",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@heavenstudio.in",
    href: "mailto:info@heavenstudio.in",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 87777 59923",
    href: "https://wa.me/918777759923",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "D-99, Sector 122, Noida",
    href: "https://maps.google.com/?q=D-99+Sector+122+Noida",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: "Google Reviews",
    value: "4.9 ★ — Leave a Review",
    href: "https://share.google/nPTGyOWUOKUqjgxjK",
  },
];

const serviceOptions = [
  "Maternity Photography",
  "Newborn Photography",
  "Kids Photography",
  "Wedding Photography",
  "Pre-Wedding Photography",
  "Corporate Photography",
  "Product & Lifestyle",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Heaven Studio! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918777759923?text=${text}`, "_blank");
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B89A5C]" />
            <span className="text-[#B89A5C] text-xs tracking-[0.25em] uppercase font-medium">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-[#B89A5C]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#111010]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Book Your Session Today.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 mb-8">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#E5DDD2] hover:border-[#B89A5C] transition-colors group"
                >
                  <span className="text-[#B89A5C] shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-xs text-[#7A756F] tracking-wide uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#111010] text-sm group-hover:text-[#B89A5C] transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-[#E5DDD2]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.391!3d28.622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzE5LjIiTiA3N8KwMjMnMjcuNiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heaven Studio, Noida"
              />
            </div>
          </motion.div>

          {/* Right: booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg border border-[#E5DDD2] p-8 flex flex-col gap-5"
            >
              <h3
                className="text-2xl font-light text-[#111010] mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Send Us a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-[#7A756F] tracking-wide uppercase block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#E5DDD2] rounded text-sm text-[#1A1714] bg-[#F9F8F5] focus:outline-none focus:border-[#B89A5C] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#7A756F] tracking-wide uppercase block mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#E5DDD2] rounded text-sm text-[#1A1714] bg-[#F9F8F5] focus:outline-none focus:border-[#B89A5C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#7A756F] tracking-wide uppercase block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5DDD2] rounded text-sm text-[#1A1714] bg-[#F9F8F5] focus:outline-none focus:border-[#B89A5C] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-[#7A756F] tracking-wide uppercase block mb-1.5">
                  Service *
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5DDD2] rounded text-sm text-[#1A1714] bg-[#F9F8F5] focus:outline-none focus:border-[#B89A5C] transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-[#7A756F] tracking-wide uppercase block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5DDD2] rounded text-sm text-[#1A1714] bg-[#F9F8F5] focus:outline-none focus:border-[#B89A5C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#B89A5C] text-white text-sm tracking-wide rounded hover:bg-[#9e8449] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Send via WhatsApp
              </button>

              <p className="text-xs text-[#7A756F] text-center">
                Also reachable at{" "}
                <a href="tel:+919354543956" className="text-[#B89A5C] hover:underline">
                  +91 93545 43956
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
