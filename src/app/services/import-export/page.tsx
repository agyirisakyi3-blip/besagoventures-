import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Import & Export",
  description:
    "Besago Ventures — Seamless import and export solutions. Sourcing, logistics, customs clearance, and product delivery across borders.",
};

const services = [
  {
    title: "Product Sourcing",
    description:
      "Need a product that's not available locally? We leverage our global network of verified manufacturers and suppliers to find exactly what you need — at the best possible price. From electronics to machinery, fashion to food products, we source from China, India, Europe, the USA, and the UAE. Every supplier is vetted for quality, reliability, and ethical standards.",
    highlights: [
      "Global supplier network across 15+ countries",
      "Sample verification before bulk orders",
      "Price negotiation on your behalf",
      "Quality inspection at source",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Product sourcing and procurement",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Logistics & Shipping",
    description:
      "We handle the entire supply chain from factory floor to your doorstep. Our logistics team coordinates packaging, freight booking (sea, air, or land), warehousing, and last-mile delivery. We partner with trusted shipping lines and cargo companies to ensure your goods arrive safely, on time, and within budget.",
    highlights: [
      "Sea freight, air freight, and road transport",
      "Warehouse and consolidation services",
      "Real-time shipment tracking",
      "Insurance coverage for all shipments",
    ],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
    imageAlt: "Cargo ship with shipping containers",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
      </svg>
    ),
  },
  {
    title: "Customs Clearance",
    description:
      "Customs delays can cost you time and money. Our experienced clearing agents handle all documentation, tariff classifications, duty payments, and regulatory compliance to ensure your goods clear customs quickly and without hassle. We stay updated on all Ghana Revenue Authority and Customs Division requirements.",
    highlights: [
      "Licensed customs clearing agents",
      "HS code classification and duty optimization",
      "Pre-clearance documentation review",
      "Fast-track clearance for time-sensitive cargo",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    imageAlt: "Customs clearance and documentation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Export Services",
    description:
      "Take your Ghanaian products to the global market. We help local manufacturers, farmers, and artisans export their goods to buyers worldwide. From cocoa and shea butter to textiles and processed foods — we handle documentation, international certifications, buyer connections, and logistics. Expand your business reach with a trusted export partner.",
    highlights: [
      "Export documentation and certifications",
      "International buyer connections",
      "Phytosanitary and quality certifications",
      "Market research for new export destinations",
    ],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
    imageAlt: "Export goods being loaded for shipping",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const productCategories = [
  { name: "Electronics & Gadgets", desc: "Phones, laptops, TVs, home appliances, accessories", icon: "📱" },
  { name: "Building Materials", desc: "Cement, steel, tiles, sanitary ware, fittings", icon: "🏗️" },
  { name: "Food & Beverages", desc: "Packaged goods, canned foods, drinks, spices", icon: "📦" },
  { name: "Machinery & Equipment", desc: "Industrial machines, generators, agricultural tools", icon: "⚙️" },
  { name: "Fashion & Textiles", desc: "Fabrics, ready-made clothing, footwear, accessories", icon: "👔" },
  { name: "Automotive Parts", desc: "Spare parts, tires, batteries, lubricants", icon: "🔧" },
  { name: "Health & Beauty", desc: "Pharmaceuticals, cosmetics, personal care products", icon: "💊" },
  { name: "Agricultural Products", desc: "Fertilizers, seeds, farming equipment, irrigation", icon: "🌾" },
];

const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Share the product details, quantity, and your budget. For exports, tell us what you produce and your target market.",
  },
  {
    step: "02",
    title: "We Source & Quote",
    description:
      "We find the best suppliers, negotiate prices, and present you with a transparent quote including all costs.",
  },
  {
    step: "03",
    title: "We Handle Logistics",
    description:
      "Once approved, we manage shipping, customs clearance, documentation, and delivery — door to door.",
  },
  {
    step: "04",
    title: "Receive Your Goods",
    description:
      "Your products arrive on time and in perfect condition. Full tracking and support throughout the process.",
  },
];

const stats = [
  { value: "15+", label: "Source Countries" },
  { value: "200+", label: "Products Shipped" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "50+", label: "Active Clients" },
];

export default function ImportExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
            alt="Shipping containers at port"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block animate-fade-in-up text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 animate-fade-in-up [animation-delay:100ms]">
              Import & Export
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Connecting Ghana to the world. Whether you need to source products from
              international markets or export Ghanaian goods to global buyers — we
              handle everything from sourcing and logistics to customs clearance and
              last-mile delivery. Trade with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up [animation-delay:300ms]">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Trading</Link>
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

      {/* Stats */}
      <section className="py-12 bg-white -mt-8 relative z-10 mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl border border-border p-8 animate-fade-in-up">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
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
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Trade Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              End-to-end import and export solutions designed to make international
              trade simple, profitable, and stress-free.
            </p>
          </div>
          <div className="space-y-12">
            {services.map((s, i) => (
              <Card key={s.title} className="overflow-hidden card-hover group">
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
                  <div className={`relative min-h-[300px] overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-cover img-zoom group-hover:scale-110 transition-transform duration-500"
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
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Importing or exporting has never been easier. Here&apos;s our streamlined process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center card-hover bg-white rounded-2xl p-8">
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

      {/* Product Categories + Form */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
              Global Trade
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Product Categories We Handle
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our extensive global network allows us to facilitate trade across a
              wide range of industries. Whether you need bulk electronics from
              China, machinery from Europe, or agricultural products from India
              — we have the connections and expertise to deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {productCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className="card-hover bg-white rounded-lg px-4 py-3 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{cat.icon}</span>
                      <div>
                        <div className="font-medium text-foreground text-sm">{cat.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{cat.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-semibold mb-1">
                  Don&apos;t see your product?
                </p>
                <p className="text-sm text-muted-foreground">
                  We handle virtually any product category. Contact us with your
                  specific requirements and we&apos;ll find a solution.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border sticky top-24 card-hover">
              <h3 className="text-xl font-bold text-foreground mb-2">Get a Trade Quote</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us what you need and we&apos;ll provide a transparent quote
                within 24 hours.
              </p>
              <ContactForm service="import-export" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
