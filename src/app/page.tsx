import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Real Estate",
    shortDesc: "Properties & Land",
    description:
      "Premium residential and commercial properties. From land acquisition to dream homes, we make real estate effortless.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    imageAlt: "Modern residential property",
    href: "/services/real-estate",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
      </svg>
    ),
    title: "Automobile",
    shortDesc: "Cars & Vehicles",
    description:
      "Quality vehicles for every need. We source, supply, and deliver cars, trucks, and SUVs at competitive prices.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    imageAlt: "Quality automobile",
    href: "/services/automobile",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Travel & Tours",
    shortDesc: "Flights & Holidays",
    description:
      "Unforgettable travel experiences curated just for you. Flights, hotels, guided tours, and complete vacation packages.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    imageAlt: "Travel destination",
    href: "/services/travel-tours",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Import & Export",
    shortDesc: "Global Trade",
    description:
      "Seamless global trade solutions. We handle procurement, logistics, and delivery of products across borders.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    imageAlt: "Import and export logistics",
    href: "/services/import-export",
  },
];

const stats = [
  { value: "500+", label: "Clients Served", icon: "👥" },
  { value: "10+", label: "Years Experience", icon: "🏆" },
  { value: "50+", label: "Properties Sold", icon: "🏠" },
  { value: "4", label: "Industry Sectors", icon: "🌐" },
];

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Real Estate Client",
    rating: 5,
    quote:
      "Besago Ventures helped us find the perfect family home. Their professionalism and attention to detail exceeded our expectations. Highly recommended!",
  },
  {
    name: "Ama Darko",
    role: "Automobile Client",
    rating: 5,
    quote:
      "I got an excellent deal on my car. The entire process was smooth, transparent, and delivered on time. I wouldn't go anywhere else!",
  },
  {
    name: "John Mensah",
    role: "Travel Client",
    rating: 5,
    quote:
      "Our honeymoon trip to Zanzibar was flawlessly organized. Every detail was taken care of. We'll definitely use Besago again for our next adventure.",
  },
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 hero-pattern" />
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 text-secondary text-sm font-semibold border border-white/20 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Your Trusted Partner Since 2014
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up delay-100">
              Building Futures,{" "}
              <span className="gradient-text">Delivering Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              Besago Ventures is a multi-sector company specializing in Real Estate,
              Automobile, Travel & Tours, and Import/Export — committed to quality
              and customer satisfaction across Ghana and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button size="xl" variant="secondary" className="animate-pulse-glow" asChild>
                <Link href="/contact">
                  Get a Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-white -mt-16 relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-2xl border border-border/50 p-6 sm:p-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center py-2 ${i < stats.length - 1 ? "md:border-r md:border-border/50" : ""}`}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We operate across four key sectors, delivering tailored solutions
              that drive value for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <Card className="h-full overflow-hidden card-hover border-border/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                        {service.shortDesc}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="group-hover:text-primary transition-colors text-lg">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Trusted by Hundreds Across Ghana
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                With over a decade of experience and a commitment to excellence,
                Besago Ventures has earned the trust of clients across all four
                sectors we serve.
              </p>
              <div className="space-y-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Besago Ventures modern office building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-left-8 glass-dark text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm font-medium text-white/80">Years of Excellence</div>
              </div>
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-secondary text-primary-dark rounded-2xl p-5 shadow-xl animate-float">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/CEO.jpeg"
                  alt="Apostle Dr. Benedict Owusu — CEO & Founder of Besago Ventures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-secondary text-primary-dark rounded-2xl p-4 shadow-xl">
                <div className="text-sm font-bold">Founder & CEO</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Meet Our Founder
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Apostle Dr. Benedict Owusu
              </h2>
              <p className="text-secondary-dark font-semibold text-lg mb-6">
                CEO & Founder, Besago Ventures
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 mb-8">
                <p className="text-muted-foreground text-lg italic leading-relaxed">
                  &ldquo;Our vision has always been to build a company that Ghanaians can trust — one
                  that delivers quality, integrity, and lasting value across every sector we operate in.
                  Besago Ventures is more than a business; it&apos;s a commitment to the people we serve.&rdquo;
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over a decade of leadership, Apostle Dr. Owusu has grown Besago Ventures
                from a single-sector operation into a thriving multi-sector enterprise serving
                hundreds of clients across Ghana and beyond. His passion for excellence and
                community impact drives everything we do.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Read Our Full Story
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Don&apos;t just take our word for it — hear from the people who&apos;ve
              experienced the Besago difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="card-hover border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_star, i) => (
                      <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-10 h-10 text-primary/10 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-sm font-bold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-secondary-dark font-medium">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/85 to-primary-light/80" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary text-sm font-semibold border border-white/20 mb-6">
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking for a new home, a reliable vehicle, an unforgettable trip,
            or a trusted trade partner — Besago Ventures is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" className="text-base" asChild>
              <Link href="/contact">
                Contact Us Today
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary text-base"
              asChild
            >
              <a href="tel:+233594472033">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +233 594 472 033
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
