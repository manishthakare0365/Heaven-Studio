import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/heaven_studio_official",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/HeavenStudio/100089895375964",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/HeavenStudio24",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918777759923",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Google Reviews",
    href: "https://share.google/nPTGyOWUOKUqjgxjK",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F5] border-t border-[#E5DDD2]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#B89A5C]">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 8 L14 4 L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[#111010] font-medium tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}
                >
                  HEAVEN
                </span>
                <span className="text-[#7A756F] tracking-[0.3em] text-[0.55rem] uppercase">
                  STUDIO
                </span>
              </div>
            </div>
            <p className="text-[#7A756F] text-sm leading-relaxed max-w-xs">
              Where every frame tells a story. Premium photography studio in
              Noida, capturing life&apos;s most precious moments.
            </p>
            <p className="text-[#7A756F] text-sm mt-3">
              D-99, Sector 122, Noida
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="text-[#111010] font-medium tracking-widest text-xs uppercase mb-5"
            >
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#7A756F] text-sm hover:text-[#B89A5C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-[#111010] font-medium tracking-widest text-xs uppercase mb-5"
            >
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#E5DDD2] flex items-center justify-center text-[#B89A5C] hover:bg-[#B89A5C] hover:text-white hover:border-[#B89A5C] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <a href="tel:+918777759923" className="text-[#7A756F] text-sm hover:text-[#B89A5C] transition-colors">
                +91 87777 59923
              </a>
              <a href="tel:+919354543956" className="text-[#7A756F] text-sm hover:text-[#B89A5C] transition-colors">
                +91 93545 43956
              </a>
              <a href="mailto:info@heavenstudio.in" className="text-[#7A756F] text-sm hover:text-[#B89A5C] transition-colors">
                info@heavenstudio.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5DDD2] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7A756F] text-xs">
            © {new Date().getFullYear()} Heaven Studio, Noida. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#B89A5C">
                  <path d="M6 1l1.2 2.4L10 3.9 8 5.8l.5 2.8L6 7.4 3.5 8.6 4 5.8 2 3.9l2.8-.5z" />
                </svg>
              ))}
            </div>
            <span className="text-[#7A756F] text-xs">4.9 on Google Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
