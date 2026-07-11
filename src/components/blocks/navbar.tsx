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
      { href: "/services/real-estate", label: "Real Estate" },
      { href: "/services/automobile", label: "Automobile" },
      { href: "/services/travel-tours", label: "Travel & Tours" },
      { href: "/services/import-export", label: "Import & Export" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setOpenDropdown(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = navLinks.some(
    (l) => l.children?.some((c) => pathname === c.href)
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          : "bg-white/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Besago Ventures Home">
            <Image
              src="/images/logo.jpeg"
              alt="Besago Ventures logo"
              width={40}
              height={40}
              className="rounded-lg group-hover:scale-105 transition-transform duration-200"
              priority
            />
            <span className="text-lg font-bold text-primary">
              Besago<span className="text-secondary">Ventures</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isServicesActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
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
                    <div className="absolute left-0 mt-1 w-56 rounded-xl bg-white/95 backdrop-blur-xl shadow-xl shadow-black/10 border border-border/50 py-1 animate-fade-in-up" role="menu">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.href)
                              ? "bg-primary/5 text-primary font-semibold"
                              : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                          }`}
                          role="menuitem"
                          onClick={() => setOpenDropdown(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            )}
            <Button size="sm" className="ml-4" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className={`absolute w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
            <span className={`absolute w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-4" : "max-h-0"}`}>
          <div className="space-y-1 pt-2">
            {navLinks.map((link, index) =>
              link.children ? (
                <div key={link.label}>
                  <span className="block px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-6 py-2.5 text-sm transition-colors ${
                        isActive(child.href)
                          ? "text-primary font-semibold bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-3 pt-2">
              <Button size="sm" className="w-full" asChild>
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
