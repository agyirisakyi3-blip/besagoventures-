import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { href: "/services/real-estate", label: "Real Estate", desc: "Properties & land" },
    { href: "/services/automobile", label: "Automobile", desc: "Vehicle sales & imports" },
    { href: "/services/travel-tours", label: "Travel & Tours", desc: "Flights & vacation packages" },
    { href: "/services/import-export", label: "Import & Export", desc: "Global trade solutions" },
  ],
  company: [
    { href: "/about", label: "About Us", desc: "Our story & mission" },
    { href: "/team", label: "Our Team", desc: "Meet the people" },
    { href: "/contact", label: "Contact", desc: "Get in touch" },
  ],
};

const socials = [
  { label: "Facebook", href: "https://facebook.com/besagoventures", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter", href: "https://x.com/besagoventures", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram", href: "https://instagram.com/besagoventures", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
  { label: "LinkedIn", href: "https://linkedin.com/company/besagoventures", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
  { label: "GitHub", href: "https://github.com/agyirisakyi3-blip/besagoventures-.git", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
  { label: "WhatsApp", href: "https://wa.me/233243709721", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
  { label: "Venmo", href: "https://venmo.com/besagoventures", path: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM6.2 7h3.3c2.6 0 4.1 1.3 4.1 3.6 0 1.5-.8 2.6-2 3.1 1.6.4 2.4 1.6 2.4 3.3 0 2.6-2 4.1-5.1 4.1H6.2V7zm3.5 5.4c1.2 0 1.8-.6 1.8-1.6 0-1.1-.7-1.5-1.9-1.5H9.6v3.1h.1zm.3 5.6c1.4 0 2.1-.7 2.1-1.8 0-1.2-.8-1.7-2.3-1.7H9.6v3.5h.3z" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      {/* Top gradient accent */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row: brand + newsletter CTA */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
          {/* Brand column */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Besago Ventures Home">
              <Image
                src="/images/logo.jpeg"
                alt="Besago Ventures logo"
                width={42}
                height={42}
                className="rounded-xl group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-xl font-bold text-white">
                Besago<span className="text-secondary">Ventures</span>
              </span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-7">
              Your trusted partner in Real Estate, Automobile, Travel &amp; Tours, and Import/Export — building futures and delivering excellence since 2014.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group/icon relative w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/50 hover:bg-secondary hover:text-primary-dark transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/20"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    viewBox="0 0 24 24"
                    fill={social.label === "WhatsApp" || social.label === "GitHub" || social.label === "Venmo" ? "currentColor" : "none"}
                    stroke={social.label === "WhatsApp" || social.label === "GitHub" || social.label === "Venmo" ? "none" : "currentColor"}
                    strokeWidth={social.label === "WhatsApp" || social.label === "GitHub" || social.label === "Venmo" ? 0 : 1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.path} />
                  </svg>
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-gray-900 text-[11px] font-medium text-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="lg:max-w-md w-full">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Stay Updated
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Get the latest news on properties, vehicles, and travel deals.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all duration-200"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-secondary text-primary-dark text-sm font-semibold hover:bg-secondary-light active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.07] mb-10" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link block"
                  >
                    <span className="text-sm text-white/60 group-hover/link:text-white transition-colors duration-200 flex items-center gap-1.5">
                      <svg className="w-3 h-3 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </span>
                    <span className="text-[11px] text-white/30 mt-0.5 block group-hover/link:text-white/50 transition-colors duration-200">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link block"
                  >
                    <span className="text-sm text-white/60 group-hover/link:text-white transition-colors duration-200 flex items-center gap-1.5">
                      <svg className="w-3 h-3 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </span>
                    <span className="text-[11px] text-white/30 mt-0.5 block group-hover/link:text-white/50 transition-colors duration-200">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary/10 transition-colors duration-200">
                  <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="pt-1.5">Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary/10 transition-colors duration-200">
                  <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@besagoventures.com" className="hover:text-white transition-colors pt-1.5">
                  info@besagoventures.com
                </a>
              </li>
              <li className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary/10 transition-colors duration-200">
                  <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+233243709721" className="hover:text-white transition-colors pt-1.5">
                  +233 243 709 721
                </a>
              </li>
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Trust &amp; Safety
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span>Verified Business</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span>Secure Transactions</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Since 2014</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span>100+ Happy Clients</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-white/[0.07] mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Besago Ventures Ltd. All rights reserved. Registered in Ghana.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <Link href="/about" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link href="/about" className="hover:text-white/60 transition-colors duration-200">Terms of Service</Link>
            <span className="text-white/10">|</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group/btt flex items-center gap-1.5 hover:text-secondary transition-colors duration-200"
              aria-label="Back to top"
            >
              Back to top
              <svg className="w-3.5 h-3.5 -rotate-90 group-hover/btt:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
