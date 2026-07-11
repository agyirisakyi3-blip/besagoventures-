import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Real Estate",
  description:
    "Besago Ventures — Premium residential and commercial real estate services in Ghana. Land acquisition, property sales, and investment opportunities.",
};

const services = [
  {
    title: "Residential Sales",
    description:
      "Whether you're a first-time buyer or looking to upgrade, our residential portfolio features handpicked properties across Ghana's most desirable neighborhoods. From modern apartments in East Legon to family homes in Tema Community 25, we match you with a property that fits your lifestyle and budget.",
    highlights: [
      "Verified titles and clean documentation",
      "Properties in top-rated school districts",
      "Flexible mortgage and payment plan guidance",
      "Free property inspection tours",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    imageAlt: "Modern residential house with pool",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Properties",
    description:
      "Prime commercial spaces designed to elevate your brand. We offer retail shops, office complexes, and warehouse facilities in high-traffic areas across Accra, Tema, and Kumasi. Every listing is vetted for accessibility, zoning compliance, and growth potential.",
    highlights: [
      "High-footfall retail locations",
      "Serviced offices with modern amenities",
      "Warehouses near ports and highways",
      "Long-term lease and purchase options",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    imageAlt: "Modern commercial office building",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Land Acquisition",
    description:
      "Invest in Ghana's booming land market with confidence. We specialize in acquiring verified, documentation-complete land parcels in satellite towns, industrial zones, and upcoming residential areas. Our legal team handles every detail — from title searches to land registration at the Lands Commission.",
    highlights: [
      "Free site visits and area development briefs",
      "Full legal due diligence before purchase",
      "Assistance with Land Commission registration",
      "Exclusive plots in gated communities",
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    imageAlt: "Large plot of land for development",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Property Management",
    description:
      "Don't let managing your property become a burden. Our dedicated management team handles everything — tenant screening, rent collection, routine maintenance, emergency repairs, and full legal compliance. We treat your property as if it were our own, maximizing returns while minimizing vacancies.",
    highlights: [
      "Monthly income statements and reports",
      "24/7 maintenance response team",
      "Background-checked tenant screening",
      "Rent optimization based on market data",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    imageAlt: "Property management and keys",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Fill out our simple inquiry form or call us directly. Share your budget, preferred location, and property type — we'll take it from there.",
  },
  {
    step: "02",
    title: "We Find Options for You",
    description:
      "Our team curates a shortlist of properties that match your criteria. Every listing is pre-verified for legal clarity and value.",
  },
  {
    step: "03",
    title: "Inspect & Decide",
    description:
      "We arrange free guided tours of your shortlisted properties. Our advisors walk you through every detail so you can make an informed choice.",
  },
  {
    step: "04",
    title: "Close & Move In",
    description:
      "We handle all paperwork, legal checks, and title transfers. You get the keys to your new property with complete peace of mind.",
  },
];

const stats = [
  { value: "50+", label: "Properties Sold" },
  { value: "200+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

export default function RealEstatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Modern house keys on a table"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 text-secondary text-sm font-semibold border border-white/20 animate-fade-in-up">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
              Real Estate
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              From premium residential properties to strategic commercial investments,
              Besago Ventures is your trusted partner in navigating Ghana&apos;s real estate
              landscape. We make property acquisition simple, secure, and rewarding —
              whether you&apos;re buying your first home or expanding an investment portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Enquire Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="tel:+233594472033">Call +233 594 472 033</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-12 bg-white -mt-8 relative z-10 mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl border border-border p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-pulse-glow">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="gradient-text">What We Offer</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your goals. Every service
              is backed by legal expertise, market knowledge, and a commitment to your satisfaction.
            </p>
          </div>
          <div className="space-y-12">
            {services.map((s, i) => (
              <Card key={s.title} className="overflow-hidden card-hover">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {s.description}
                    </p>
                    <ul className="space-y-2">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-muted-foreground">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative min-h-[300px] img-zoom group ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Getting started with Besago Ventures is simple. Here&apos;s how we help you
              find and secure the perfect property.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <div key={s.step} className="text-center relative card-hover rounded-2xl p-6">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+1.75rem)] right-0 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest + Form */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Invest with Besago?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ghana&apos;s real estate market is one of the fastest-growing in West Africa,
                and Besago Ventures gives you a front-row seat. Whether you&apos;re looking
                for a family home, a rental income property, or land for future development,
                our team ensures every transaction is transparent, legally sound, and
                tailored to your financial goals.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Free initial consultation with no obligation",
                  "Access to off-market and exclusive listings",
                  "Transparent pricing with no hidden fees",
                  "Legal team handles all documentation",
                  "Post-sale support and property management",
                  "Investment advisory for maximum ROI",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-semibold mb-1">
                  Ready to invest in your future?
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us today for a free, no-obligation consultation. Our real estate
                  experts are standing by to help you find the perfect property.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border sticky top-24 card-hover">
              <h3 className="text-xl font-bold text-foreground mb-2">Request a Free Consultation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm service="real-estate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
