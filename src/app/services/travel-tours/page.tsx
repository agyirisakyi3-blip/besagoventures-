import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Travel & Tours",
  description:
    "Besago Ventures — Unforgettable travel experiences. Flights, hotels, guided tours, vacation packages, and corporate travel management.",
};

const services = [
  {
    title: "Vacation Packages",
    description:
      "Escape the ordinary with our expertly curated vacation packages. Whether it's a romantic getaway to Zanzibar, a family adventure to Dubai, or a cultural tour of Europe — we design every trip around your preferences, budget, and travel style. All-inclusive options available with zero hidden costs.",
    highlights: [
      "Customized itineraries tailored to you",
      "All-inclusive packages with no hidden fees",
      "Honeymoon, family, and group specials",
      "24/7 travel support during your trip",
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    imageAlt: "Tropical beach vacation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Flight Booking",
    description:
      "Get the best airfare deals on domestic and international flights. Our relationships with major airlines mean we secure competitive prices you won't find online. We handle bookings, seat selection, special meal requests, layover arrangements, and any schedule changes — so you just focus on packing.",
    highlights: [
      "Competitive rates on all major airlines",
      "Domestic and international routes",
      "Group and corporate flight discounts",
      "Free itinerary management and changes",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
    imageAlt: "Airplane taking off at sunset",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Hotel Reservations",
    description:
      "From budget-friendly stays to five-star luxury resorts, we've partnered with hotels worldwide to offer you the best rates and guaranteed availability. Whether you need a single night or a month-long stay, we handle the booking, upgrades, and special requests — ensuring comfort at every step.",
    highlights: [
      "Best-rate guarantee on all bookings",
      "5-star resorts to boutique hotels",
      "Early check-in and late checkout arranged",
      "Room upgrades when available",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    imageAlt: "Luxury hotel resort with pool",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Corporate Travel",
    description:
      "Streamline your company's travel operations with our dedicated corporate travel service. We manage everything from executive business trips and conference logistics to team retreats and international delegations. Enjoy consolidated billing, travel policy compliance, and a dedicated account manager.",
    highlights: [
      "Dedicated corporate travel account manager",
      "Group bookings and conference logistics",
      "Consolidated invoicing and expense reports",
      "Travel policy compliance and reporting",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    imageAlt: "Corporate business travel",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Visa Assistance",
    description:
      "Navigating visa requirements can be stressful. Our visa assistance service guides you through the entire process — from document preparation and application submission to interview coaching and tracking. We have a high success rate for tourist, business, and transit visas to destinations worldwide.",
    highlights: [
      "Tourist, business, and transit visa support",
      "Document preparation and review",
      "Application submission and tracking",
      "High approval success rate",
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    imageAlt: "Passport and visa documents",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Car Rental & Transfers",
    description:
      "Arrive in style with our car rental and airport transfer services. We offer self-drive and chauffeur-driven options for business travelers, tourists, and special events. Our fleet includes executive sedans, SUVs, and luxury vehicles — all well-maintained and fully insured.",
    highlights: [
      "Airport pickups and drop-offs",
      "Self-drive and chauffeur options",
      "Executive and luxury vehicle fleet",
      "Flexible daily, weekly, and monthly rates",
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
    imageAlt: "Luxury car rental service",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
      </svg>
    ),
  },
];

const destinations = [
  { name: "Zanzibar", country: "Tanzania", type: "Beach", desc: "White sand beaches and turquoise waters" },
  { name: "Dubai", country: "UAE", type: "Luxury", desc: "World-class shopping and architecture" },
  { name: "London", country: "UK", type: "Culture", desc: "History, theatre, and royal heritage" },
  { name: "Paris", country: "France", type: "Romance", desc: "The city of love and fine cuisine" },
  { name: "Cape Town", country: "South Africa", type: "Adventure", desc: "Mountains, wine, and wildlife" },
  { name: "Accra", country: "Ghana", type: "City", desc: "Vibrant culture and nightlife" },
  { name: "Marrakech", country: "Morocco", type: "Culture", desc: "Exotic markets and desert tours" },
  { name: "Bali", country: "Indonesia", type: "Wellness", desc: "Temples, rice terraces, and spas" },
  { name: "New York", country: "USA", type: "City", desc: "The city that never sleeps" },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Travel Dream",
    description:
      "Tell us where you want to go, when, and your budget. Whether it's a quick weekend escape or a month-long adventure — we'll design the perfect trip.",
  },
  {
    step: "02",
    title: "Receive a Custom Itinerary",
    description:
      "Within 24 hours, you'll receive a detailed travel plan with flight options, hotel picks, activities, and transparent pricing.",
  },
  {
    step: "03",
    title: "Confirm & Book",
    description:
      "Love the plan? Confirm and we handle all bookings, payments, visa support, and travel insurance. One payment, everything covered.",
  },
  {
    step: "04",
    title: "Travel with Confidence",
    description:
      "Enjoy your trip with 24/7 on-trip support. Need changes? We're just a call away. Welcome home with memories that last a lifetime.",
  },
];

export default function TravelToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel destination landscape"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up [animation-delay:0ms] text-secondary font-semibold text-sm uppercase tracking-wider inline-block">
              Our Services
            </span>
            <h1 className="animate-fade-in-up [animation-delay:150ms] text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Travel & Tours
            </h1>
            <p className="animate-fade-in-up [animation-delay:300ms] text-lg text-white/80 leading-relaxed">
              Discover the world with Besago Ventures. We craft unforgettable travel
              experiences — from exotic beach holidays and luxury city breaks to seamless
              corporate trips. Every detail is handled, so you can focus on making memories.
            </p>
            <div className="animate-fade-in-up [animation-delay:450ms] flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Plan Your Trip</Link>
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
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Travel Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Everything you need for a seamless travel experience — from the first
              inquiry to your return home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="card-hover group flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-sm leading-relaxed flex-1">
                    {s.description}
                  </CardDescription>
                  <ul className="mt-4 space-y-1.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Planning your dream trip is just 4 simple steps away.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="card-hover text-center rounded-xl bg-white p-6">
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

      {/* Destinations + Form */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
              Where To
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Explore the World
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From the beaches of Zanzibar to the streets of Paris, we offer packages
              to the world&apos;s most incredible destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {destinations.map((d) => (
                  <div
                    key={d.name}
                    className="card-hover bg-white rounded-lg px-4 py-3 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground text-sm">{d.name}</div>
                        <div className="text-xs text-muted-foreground">{d.country}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary-dark text-[10px] font-semibold">
                        {d.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{d.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-semibold mb-1">
                  Looking for a custom destination?
                </p>
                <p className="text-sm text-muted-foreground">
                  We travel to 50+ destinations worldwide. Tell us your dream
                  location and we&apos;ll create a tailor-made package for you.
                </p>
              </div>
            </div>
            <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-border sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-2">Book Your Trip</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us your travel dates and preferences. We&apos;ll send you a
                customized itinerary within 24 hours.
              </p>
              <ContactForm service="travel-tours" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
