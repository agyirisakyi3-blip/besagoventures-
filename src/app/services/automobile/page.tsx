import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Automobile",
  description:
    "Besago Ventures — Quality vehicles for sale. Cars, SUVs, trucks, and more at competitive prices with full documentation and warranty.",
};

const services = [
  {
    title: "Brand New Vehicles",
    description:
      "Drive home a factory-fresh vehicle from the world's most trusted manufacturers. Every new car comes with a full manufacturer warranty, genuine parts guarantee, and our dedicated after-sales support. We help you choose the right model for your needs and budget — and handle all registration and documentation.",
    highlights: [
      "Full manufacturer warranty included",
      "All models: sedans, SUVs, pickups, vans",
      "Assistance with DVLA registration",
      "Trade-in options available",
    ],
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
    imageAlt: "Brand new luxury car in showroom",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Certified Pre-Owned",
    description:
      "Get exceptional value with our thoroughly inspected and certified pre-owned vehicles. Every car undergoes a rigorous 150-point inspection covering engine health, transmission, brakes, electronics, and body condition. You get a detailed vehicle history report and a limited warranty — so you buy with total confidence.",
    highlights: [
      "150-point mechanical inspection",
      "Full vehicle history report provided",
      "Limited warranty on all pre-owned cars",
      "Test drives arranged at your convenience",
    ],
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    imageAlt: "Quality pre-owned vehicle",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Fleet & Commercial",
    description:
      "Equip your business with reliable commercial vehicles built for performance and durability. From delivery trucks and pickups to executive sedans for corporate use — we offer bulk pricing, fleet maintenance packages, and financing options tailored to your business operations.",
    highlights: [
      "Bulk and corporate fleet discounts",
      "Delivery trucks, pickups, and minibuses",
      "Corporate financing arrangements",
      "Fleet maintenance and servicing plans",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    imageAlt: "Commercial fleet of vehicles",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
      </svg>
    ),
  },
  {
    title: "Vehicle Import",
    description:
      "Want a specific model not available locally? Our import service handles everything end-to-end. We source your desired vehicle from international markets, manage shipping and logistics, clear customs, and deliver the car to your doorstep — fully registered and ready to drive. No stress, no surprises.",
    highlights: [
      "Source from USA, UK, Japan, Germany, and UAE",
      "Door-to-door delivery included",
      "Full customs clearance and DVLA registration",
      "Real-time shipping tracking",
    ],
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    imageAlt: "Vehicle being shipped internationally",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const brands = [
  { name: "Toyota", note: "Most Popular" },
  { name: "Honda", note: "" },
  { name: "Mercedes-Benz", note: "Luxury" },
  { name: "BMW", note: "Luxury" },
  { name: "Hyundai", note: "Best Value" },
  { name: "Nissan", note: "" },
  { name: "Ford", note: "" },
  { name: "Kia", note: "Best Value" },
  { name: "Volkswagen", note: "" },
  { name: "Mitsubishi", note: "" },
  { name: "Lexus", note: "Premium" },
  { name: "Range Rover", note: "Premium" },
];

const processSteps = [
  {
    step: "01",
    title: "Tell Us Your Dream Car",
    description:
      "Share your preferred make, model, year, and budget. Whether it's a brand new Toyota Corolla or a certified BMW X5, we'll find it for you.",
  },
  {
    step: "02",
    title: "We Source & Verify",
    description:
      "Our team locates the best deals locally or internationally. Every vehicle undergoes thorough inspection and documentation checks.",
  },
  {
    step: "03",
    title: "Test Drive & Approve",
    description:
      "See the car in person, take it for a test drive, and review the full inspection report. No pressure — only transparency.",
  },
  {
    step: "04",
    title: "Drive Away Happy",
    description:
      "We handle paperwork, insurance guidance, and registration. You get the keys, the warranty, and complete peace of mind.",
  },
];

export default function AutomobilePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Luxury car on the road"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="animate-fade-in-up [animation-delay:150ms] text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Automobile
            </h1>
            <p className="animate-fade-in-up [animation-delay:300ms] text-lg text-white/80 leading-relaxed">
              Quality vehicles at unbeatable prices. Whether you need a reliable family
              car, a powerful commercial fleet, or a luxury ride — we source, inspect,
              and deliver with full documentation and complete peace of mind. Your
              satisfaction is our guarantee.
            </p>
            <div className="animate-fade-in-up [animation-delay:450ms] flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Browse Available Vehicles</Link>
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
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="gradient-text text-3xl sm:text-4xl font-bold">
              Our Automobile Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From brand new vehicles to certified pre-owned and full import services —
              we cover every aspect of getting you behind the wheel.
            </p>
          </div>
          <div className="space-y-12">
            {services.map((s, i) => (
              <Card key={s.title} className="card-hover overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
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
                  <div className={`img-zoom relative min-h-[300px] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
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
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Getting your dream vehicle is easier than you think. Here&apos;s our simple process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="card-hover text-center bg-white rounded-2xl p-8 shadow-sm border border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {s.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands + Form */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Our Partners
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Brands We Work With
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We partner with the world&apos;s most trusted automobile manufacturers to
                bring you a wide selection of vehicles. Whether you&apos;re looking for the
                reliability of Toyota, the luxury of Mercedes-Benz, or the value of Kia
                — we have you covered.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="card-hover bg-white rounded-lg px-4 py-3 border border-border text-center relative hover:border-primary/30 transition-colors"
                  >
                    <div className="font-medium text-foreground text-sm">{brand.name}</div>
                    {brand.note && (
                      <div className="text-[10px] text-secondary-dark font-semibold uppercase">
                        {brand.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-semibold mb-1">
                  Can&apos;t find what you&apos;re looking for?
                </p>
                <p className="text-sm text-muted-foreground">
                  We import vehicles from the USA, UK, Japan, Germany, and UAE.
                  Tell us what you want and we&apos;ll make it happen.
                </p>
              </div>
            </div>
            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-border sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-2">Find Your Vehicle</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us what you&apos;re looking for and we&apos;ll find the best deal for you.
              </p>
              <ContactForm service="automobile" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
