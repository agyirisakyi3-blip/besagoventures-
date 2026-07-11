import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team behind Besago Ventures — experienced professionals driving excellence across real estate, automobile, travel, and trade.",
};

const teamMembers = [
  {
    name: "Apostle Dr. Benedict Owusu",
    role: "CEO & Founder",
    bio: "A visionary leader with over 25 years of experience in business. Apostle Dr. Benedict Owusu founded Besago Ventures with a mission to deliver excellence across multiple industries and create lasting value for clients and communities.",
    initials: "BO",
    image: "/images/CEO.jpeg",
  },
  {
    name: "Gloria Amekudzi",
    role: "Administrator",
    bio: "The operational backbone of Besago Ventures. Gloria ensures seamless day-to-day operations, coordinates across all departments, and drives organizational efficiency to keep the company running at its best.",
    initials: "GA",
  },
  {
    name: "Rev. Godwin Doe",
    role: "Financial Manager",
    bio: "A meticulous financial expert who oversees all fiscal operations at Besago Ventures. Rev. Godwin Doe ensures sound financial planning, budgeting, and reporting to sustain the company's growth and stability.",
    initials: "GD",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1
              className="animate-fade-in-up text-4xl sm:text-5xl font-bold mt-2 mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Meet the People Behind Besago
            </h1>
            <p
              className="animate-fade-in-up text-lg text-white/80 leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Our strength lies in our people. A passionate team of professionals
              dedicated to delivering excellence across every sector we operate in.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="card-hover text-center group overflow-hidden">
                <CardHeader>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
                    {"image" in member && member.image ? (
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        width={112}
                        height={112}
                        className="relative w-full h-full object-cover z-10"
                      />
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <span className="text-3xl font-bold text-white">{member.initials}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-full" />
                    <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                      <div className="flex gap-2">
                        <a href="#" className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-colors" aria-label="LinkedIn">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="#" className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-colors" aria-label="Twitter">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <span className="inline-block mx-auto px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark text-xs font-semibold">
                    {member.role}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="animate-fade-in-up inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold mb-4">
            Join Us
          </span>
          <h2
            className="animate-fade-in-up text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            Want to Join Our Team?
          </h2>
          <p
            className="animate-fade-in-up text-lg text-white/80 mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            We&apos;re always looking for talented individuals who share our passion
            for excellence. Get in touch to explore opportunities.
          </p>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
