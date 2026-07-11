"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function useInView(threshold = 0.1) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Real Estate",
    description: "Premium residential and commercial properties. From land acquisition to dream homes.",
    href: "/services/real-estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
      </svg>
    ),
    title: "Automobile",
    description: "Quality vehicles for every need. Cars, trucks, and SUVs at competitive prices.",
    href: "/services/automobile",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Travel & Tours",
    description: "Unforgettable travel experiences. Flights, hotels, guided tours, and vacation packages.",
    href: "/services/travel-tours",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Import & Export",
    description: "Seamless global trade solutions. Procurement, logistics, and cross-border delivery.",
    href: "/services/import-export",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Properties Sold" },
  { value: "4", label: "Industry Sectors" },
];

const whyUs = [
  {
    title: "Proven Track Record",
    desc: "Over a decade of successful operations across multiple sectors with a growing, loyal client base.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Customer-First Approach",
    desc: "Every decision we make is centered around delivering maximum value and satisfaction to our clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    desc: "Our professionals bring deep industry knowledge and a passion for excellence to every project.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    desc: "We believe in honest communication and full transparency at every stage of engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Real Estate Client",
    quote: "Besago Ventures helped us find the perfect family home. Their professionalism and attention to detail exceeded our expectations.",
  },
  {
    name: "Ama Darko",
    role: "Automobile Client",
    quote: "I got an excellent deal on my car. The entire process was smooth, transparent, and delivered on time.",
  },
  {
    name: "John Mensah",
    role: "Travel Client",
    quote: "Our honeymoon trip to Zanzibar was flawlessly organized. Every detail was taken care of. We will definitely use Besago again.",
  },
];

const industrySolutions = [
  {
    tab: "Real Estate",
    title: "Smart Property Solutions",
    description: "From residential homes to commercial developments, we provide end-to-end real estate services across Ghana.",
    points: ["Residential property sales", "Commercial property leasing", "Land acquisition & development", "Property management"],
    href: "/services/real-estate",
  },
  {
    tab: "Automobile",
    title: "Quality Vehicle Solutions",
    description: "We source, supply, and deliver quality vehicles tailored to your needs and budget.",
    points: ["New & pre-owned vehicles", "Corporate fleet acquisition", "Import & delivery", "After-sales support"],
    href: "/services/automobile",
  },
  {
    tab: "Travel & Tours",
    title: "Curated Travel Experiences",
    description: "Unforgettable journeys crafted with attention to every detail, from flights to accommodations.",
    points: ["Flight bookings & packages", "Hotel reservations", "Guided tours & excursions", "Corporate travel management"],
    href: "/services/travel-tours",
  },
  {
    tab: "Import & Export",
    title: "Global Trade Facilitation",
    description: "Seamless cross-border trade solutions with reliable logistics and competitive pricing.",
    points: ["Product sourcing & procurement", "Customs clearance", "Shipping & logistics", "Quality assurance"],
    href: "/services/import-export",
  },
];

const successStories = [
  {
    category: "Real Estate",
    title: "Premium Office Space in Airport City",
    description: "Successfully acquired and fitted out a 5,000 sq ft office space for a multinational corporation entering the Ghanaian market.",
  },
  {
    category: "Automobile",
    title: "Corporate Fleet Acquisition",
    description: "Delivered a fleet of 25 vehicles for a logistics company, handling import, registration, and delivery within 6 weeks.",
  },
  {
    category: "Travel",
    title: "Luxury Vacation Package to Dubai",
    description: "Organized an all-inclusive luxury trip for 15 travelers, including flights, 5-star accommodations, and curated experiences.",
  },
];

const trustedCompanies = [
  "MTN Ghana", "Vodafone Ghana", "GOIL", "Ghana Water", "Ecobank",
  "Stanbic Bank", "Telefonica", "Virtue Group", "FanMilk", "Ghana Gas",
];

function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 300);
  };

  const goPrev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const goNext = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote decorative mark */}
      <div className="absolute -top-6 -left-4 text-[120px] leading-none font-serif text-primary/[0.06] select-none pointer-events-none">&ldquo;</div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/[0.04] border border-border/50">
        <div className={`transition-all duration-300 ease-out ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
          <div className="p-8 sm:p-12">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-secondary-dark font-medium">{t.role}</div>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-10" : "bg-primary/20 hover:bg-primary/40 w-2"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <p className="text-center text-xs text-muted-foreground mt-3">
        {current + 1} / {testimonials.length}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [email, setEmail] = React.useState("");

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border border-white/5 animate-float" />
        <div className="absolute bottom-32 right-[10%] w-40 h-40 rounded-2xl border border-secondary/10 rotate-45 animate-float [animation-delay:1s]" />
        <div className="absolute top-[40%] right-[25%] w-20 h-20 rounded-full bg-secondary/5 animate-float [animation-delay:2s]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 text-secondary text-sm font-medium border border-white/10 animate-fade-in-up backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Your Trusted Partner Since 2014
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up delay-100">
                Building Futures,{" "}
                <span className="gradient-text">Delivering Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                A multi-sector company specializing in Real Estate, Automobile, Travel & Tours, and Import/Export — committed to quality and customer satisfaction across Ghana and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button size="xl" variant="secondary" className="animate-pulse-glow text-base shadow-xl shadow-secondary/20" asChild>
                  <Link href="/contact">
                    Get a Free Consultation
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up delay-400">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="group">
                  <div className="enterprise-card p-6 text-center hover:border-secondary/20 backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{service.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Section 2: Trusted By */}
      <section className="bg-[#0f1729] py-8 border-y border-white/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-6 font-medium">Trusted by leading organizations</p>
          </AnimatedSection>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {trustedCompanies.map((company, i) => (
              <AnimatedSection key={company} delay={i * 50}>
                <span className="text-white/20 text-sm font-semibold tracking-wide hover:text-white/40 transition-colors cursor-default">{company}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="bg-[#0f1729] py-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className={`text-center ${i < stats.length - 1 ? "md:border-r md:border-white/5" : ""}`}>
                  <div className="stat-number gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services — Enhanced Cards */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">What We Do</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Our Core Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                We operate across four key sectors, delivering tailored solutions that drive value for our clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 120}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full border-border/50 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-13 h-13 rounded-xl bg-white/95 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-xl">
                          {service.icon}
                        </div>
                      </div>
                      {/* Category tag */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                          {service.title}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2 pt-5 px-6">
                      <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 px-6 pb-6">
                      <CardDescription className="text-sm leading-relaxed mb-4 text-muted-foreground">
                        {service.description}
                      </CardDescription>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-28 sm:py-36 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-secondary" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why Choose Us</span>
                  <div className="w-8 h-px bg-secondary" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Trusted by Hundreds Across Ghana
                </h2>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                  With over a decade of experience and a commitment to excellence, Besago Ventures has earned the trust of clients across all four sectors we serve.
                </p>
                <div className="space-y-6">
                  {whyUs.map((item, i) => (
                    <AnimatedSection key={item.title} delay={i * 100}>
                      <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-primary-dark rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-primary-dark/30">
                    <div className="text-3xl sm:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 6: Founder */}
      <section className="py-28 sm:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                  <Image src="/images/CEO.jpeg" alt="Apostle Dr. Benedict Owusu — CEO & Founder of Besago Ventures" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary text-primary-dark rounded-2xl p-5 shadow-xl">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs font-medium">Years of Leadership</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-secondary" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Meet Our Founder</span>
                  <div className="w-8 h-px bg-secondary" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Apostle Dr. Benedict Owusu
                </h2>
                <p className="text-secondary-dark font-semibold text-lg mb-6">CEO & Founder, Besago Ventures</p>
                <div className="mb-8">
                  <span className="text-6xl text-primary/10 font-serif leading-none">&ldquo;</span>
                  <p className="text-muted-foreground text-lg italic leading-relaxed -mt-4 pl-2">
                    Our vision has always been to build a company that Ghanaians can trust — one that delivers quality, integrity, and lasting value across every sector we operate in.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  With over a decade of leadership, Apostle Dr. Owusu has grown Besago Ventures from a single-sector operation into a thriving multi-sector enterprise serving hundreds of clients across Ghana and beyond.
                </p>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">
                    Read Our Full Story
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials — Enhanced Carousel */}
      <section className="py-28 sm:py-36 bg-muted/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Testimonials</span>
                <div className="w-8 h-px bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
                Hear from the people who have experienced the Besago difference.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Section 8: Industry Solutions */}
      <section className="py-28 sm:py-36 dark-section relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-secondary/40" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Solutions</span>
                <div className="w-8 h-px bg-secondary/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Built for Real-World Needs
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
                See how our services power success across every sector we operate in.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {industrySolutions.map((solution, i) => (
                <button
                  key={solution.tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-secondary text-primary-dark shadow-lg shadow-secondary/20 scale-105"
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                  }`}
                >
                  {solution.tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="enterprise-card p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{industrySolutions[activeTab].title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">{industrySolutions[activeTab].description}</p>
                  <ul className="space-y-3 mb-8">
                    {industrySolutions[activeTab].points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-white/70">
                        <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href={industrySolutions[activeTab].href}>
                      Learn More
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </Button>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-64 h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                    <div className="text-secondary/30">
                      {industrySolutions[activeTab].tab === "Real Estate" && (
                        <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      )}
                      {industrySolutions[activeTab].tab === "Automobile" && (
                        <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" /></svg>
                      )}
                      {industrySolutions[activeTab].tab === "Travel & Tours" && (
                        <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                      {industrySolutions[activeTab].tab === "Import & Export" && (
                        <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 9: Success Stories */}
      <section className="py-28 sm:py-36 dark-section relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-secondary/40" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Success Stories</span>
                <div className="w-8 h-px bg-secondary/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Confident Decisions, Real Results
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
                See how we have helped organizations achieve their goals.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 120}>
                <div className="enterprise-card p-8 group hover:border-secondary/20 h-full hover:-translate-y-1 transition-all duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4">
                    {story.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  <span className="text-sm font-semibold text-secondary flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    Read more
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Newsletter */}
      <section className="py-28 sm:py-36 bg-[#0a1628] relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/50 mb-8 text-lg">Get the latest news, insights, and updates from Besago Ventures.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all duration-300"
              />
              <Button size="lg" variant="secondary" className="shrink-0 shadow-lg shadow-secondary/20">Subscribe</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 11: CTA */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#064e3b] to-[#0a1628]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-secondary text-sm font-semibold border border-white/10 mb-6">
              Let&apos;s Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking for a new home, a reliable vehicle, an unforgettable trip, or a trusted trade partner — Besago Ventures is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="text-base shadow-xl shadow-secondary/20" asChild>
                <Link href="/contact">
                  Contact Us Today
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base" asChild>
                <a href="tel:+233594472033">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +233 243 709 721
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
