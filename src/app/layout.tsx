import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import { ScrollToTop } from "@/components/blocks/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Besago Ventures — Real Estate, Automobile, Travel & Import/Export",
    template: "%s | Besago Ventures",
  },
  description:
    "Besago Ventures is a leading multi-sector company specializing in Real Estate, Automobile Sales, Travel & Tours, and Import/Export of products.",
  keywords: [
    "Besago Ventures",
    "real estate",
    "automobile",
    "travel and tours",
    "import export",
    "Ghana",
  ],
  openGraph: {
    title: "Besago Ventures",
    description:
      "Your trusted partner in Real Estate, Automobile, Travel & Tours, and Import/Export.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
