import type { Metadata } from "next";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Besago Ventures. Request a quote, ask a question, or schedule a consultation — we're here to help.",
};

const contactInfo = [
  {
    label: "Visit Us",
    value: "Accra, Ghana",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "info@besagoventures.com",
    href: "mailto:info@besagoventures.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+233 594 472 033",
    href: "tel:+233594472033",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in-up opacity-0">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 animate-fade-in-up delay-100 opacity-0">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-fade-in-up delay-200 opacity-0">
              Have a question or ready to get started? Fill out the form below and our
              team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className={`card-hover bg-white rounded-xl p-5 border border-border flex items-start gap-4 animate-fade-in-up delay-${(index + 1) * 100} opacity-0`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/10 text-primary flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors mt-0.5 block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-foreground mt-0.5">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in-up opacity-0">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 rounded-full px-4 py-1.5">
              Reach Out
            </span>
          </div>
          <div className="card-hover bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2 animate-fade-in-up delay-100 opacity-0">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-sm mb-8 animate-fade-in-up delay-200 opacity-0">
              Fields marked with <span className="text-red-500">*</span> are required.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
