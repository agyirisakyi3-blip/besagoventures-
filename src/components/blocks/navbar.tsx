"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  {
    label: "Services",
    children: [
      { href: "/services/real-estate", label: "Real Estate", desc: "Properties & Land" },
      { href: "/services/automobile", label: "Automobile", desc: "Cars & Vehicles" },
      { href: "/services/travel-tours", label: "Travel & Tours", desc: "Flights & Holidays" },
      { href: "/services/import-export", label: "Import & Export", desc: "Global Trade" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState<number | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(false);
    setMobileSubmenu(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = navLinks.some(
    (l) => l.children?.some((c) => pathname === c.href)
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Besago Ventures Home">
            <div className="relative">
              <Image
                src="/images/logo.jpeg"
                alt="Besago Ventures logo"
                width={42}
                height={42}
                className="rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-sm"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
                Besago
              </span>
              <span className={`text-lg font-bold leading-tight transition-colors duration-300 ${scrolled ? "text-secondary" : "text-secondary-light"}`}>
                Ventures
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isServicesActive
                        ? "text-primary"
                        : scrolled
                          ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={openDropdown}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown && (
                    <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl shadow-black/10 border border-border/50 py-2 animate-fade-in-up" role="menu">
                      <div className="px-4 py-2 border-b border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Our Services</p>
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-start gap-3 px-4 py-3 transition-all duration-200 ${
                            isActive(child.href)
                              ? "bg-primary/5 text-primary"
                              : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                          }`}
                          role="menuitem"
                          onClick={() => setOpenDropdown(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">{child.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{child.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-primary bg-primary/5"
                        : "text-white bg-white/10"
                      : scrolled
                        ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              )
            )}
            <Button size="sm" className="ml-4 shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors relative w-11 h-11 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
            <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-4 border-t border-white/10 mt-2">
            {navLinks.map((link, index) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                      isServicesActive
                        ? "text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block pl-8 pr-4 py-2.5 text-sm transition-colors ${
                          isActive(child.href)
                            ? "text-primary font-semibold bg-primary/5"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-4 pt-4">
              <Button size="lg" className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
