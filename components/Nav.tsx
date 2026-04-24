"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Maternity Photography",
  "Newborn Photography",
  "Kids Photography",
  "Wedding Photography",
  "Pre-Wedding Photography",
  "Corporate Photography",
  "Product & Lifestyle",
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E5DDD2]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-[#B89A5C]"
          >
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 8 L14 4 L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col leading-none">
            <span
              className="text-[#111010] font-medium tracking-[0.18em] text-sm"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}
            >
              HEAVEN
            </span>
            <span className="text-[#7A756F] tracking-[0.3em] text-[0.55rem] uppercase">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-wide transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#B89A5C]"
                  : "text-[#1A1714] hover:text-[#B89A5C]"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#B89A5C]"
                />
              )}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`relative text-sm tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                isActive("/services")
                  ? "text-[#B89A5C]"
                  : "text-[#1A1714] hover:text-[#B89A5C]"
              }`}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isActive("/services") && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#B89A5C]"
                />
              )}
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-[#E5DDD2] rounded-md shadow-lg py-2"
                >
                  {services.map((s) => (
                    <Link
                      key={s}
                      href="/services"
                      className="block px-4 py-2 text-sm text-[#1A1714] hover:text-[#B89A5C] hover:bg-[#F9F8F5] transition-colors"
                    >
                      {s}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-wide transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#B89A5C]"
                  : "text-[#1A1714] hover:text-[#B89A5C]"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#B89A5C]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2 border border-[#B89A5C] text-[#B89A5C] text-sm tracking-wide rounded hover:bg-[#B89A5C] hover:text-white transition-colors duration-200"
          >
            Book a Session
          </Link>

          <button
            className="lg:hidden p-2 text-[#1A1714]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#B89A5C]">
                  <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 8 L14 4 L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#111010] font-medium tracking-[0.18em]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.1rem" }}>
                  HEAVEN STUDIO
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#1A1714" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Portfolio", href: "/portfolio" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-light text-[#1A1714] hover:text-[#B89A5C] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-6 py-3 border border-[#B89A5C] text-[#B89A5C] text-sm tracking-wide rounded hover:bg-[#B89A5C] hover:text-white transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
