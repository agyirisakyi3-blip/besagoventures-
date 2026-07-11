"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactFormProps {
  service?: string;
}

export function ContactForm({ service }: ContactFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ve received your inquiry and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input id="name" name="name" required placeholder="John Doe" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" autoComplete="email" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number
          </label>
          <Input id="phone" name="phone" type="tel" placeholder="+233 594 472 033" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
            Service Interest <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={service || ""}
            className="flex h-11 w-full rounded-md border border-border bg-white px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="" disabled>Select a service</option>
            <option value="real-estate">Real Estate</option>
            <option value="automobile">Automobile</option>
            <option value="travel-tours">Travel & Tours</option>
            <option value="import-export">Import & Export</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your requirements..."
          className="flex w-full rounded-md border border-border bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Inquiry
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Button>
    </form>
  );
}
