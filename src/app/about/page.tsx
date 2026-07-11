import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Besago Ventures — our story, mission, values, and the team behind Ghana's trusted multi-sector company.",
};

const values = [
  {
    title: "Integrity",
    description: "We conduct business with honesty and transparency, building trust with every client and partner.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from customer service to project delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and approaches to deliver better solutions in a rapidly evolving market.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    description: "We treat every client relationship as a long-term partnership built on mutual respect and shared success.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "2014", event: "Besago Ventures founded with a focus on real estate in Accra." },
  { year: "2016", event: "Expanded into automobile sales and import services." },
  { year: "2018", event: "Launched Travel & Tours division to serve growing demand." },
  { year: "2020", event: "Established import/export partnerships across West Africa." },
  { year: "2023", event: "Reached 500+ clients milestone across all four sectors." },
  { year: "2025", event: "Continuing to grow and innovate across all service lines." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1
              className="animate-fade-in-up text-4xl sm:text-5xl font-bold mt-2 mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Our Story
            </h1>
            <p
              className="animate-fade-in-up text-lg text-white/80 leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Besago Ventures was born from a vision to bridge gaps in Ghana&apos;s
              key economic sectors. What started as a small real estate consultancy
              has grown into a multi-sector powerhouse.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story & Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Besago Ventures is a Ghana-based multi-sector company that has been
                delivering quality services since 2014. We specialize in four core
                areas: Real Estate, Automobile, Travel & Tours, and Import & Export.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of experienced professionals is passionate about connecting
                people with opportunities. Whether it&apos;s helping a family find their
                dream home, sourcing the perfect vehicle, organizing a memorable trip,
                or facilitating seamless international trade — we do it with excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that great business is built on trust, transparency, and a
                genuine commitment to our clients&apos; success. That&apos;s why hundreds of
                individuals and businesses across Ghana and beyond choose Besago
                Ventures as their trusted partner.
              </p>
            </div>
            <div className="relative">
              <div className="card-hover relative rounded-2xl overflow-hidden shadow-xl aspect-square bg-gradient-to-br from-primary to-primary-dark">
                <Image
                  src="/images/CEO.jpeg"
                  alt="CEO of Besago Ventures"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-border">
                <div className="text-sm font-bold text-primary">CEO & Founder</div>
                <div className="text-xs text-muted-foreground">Leading with vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, reliable, and customer-focused solutions
                  across real estate, automobile, travel, and trade — empowering
                  individuals and businesses to achieve their goals with confidence.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-t-4 border-t-secondary">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary-dark flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be West Africa&apos;s most trusted multi-sector enterprise,
                  recognized for our unwavering commitment to quality, integrity,
                  and the transformative impact we create for our clients and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="card-hover text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-light border-[3px] border-white shadow-md -translate-x-2 mt-1.5" />
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                    <div className="text-sm font-bold text-secondary">{item.year}</div>
                    <p className="text-sm text-muted-foreground mt-1">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p
            className="animate-fade-in-up text-lg text-white/80 mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            Partner with Besago Ventures and experience the difference that
            dedication and expertise can make.
          </p>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
