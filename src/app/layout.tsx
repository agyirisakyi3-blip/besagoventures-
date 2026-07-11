import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import { ScrollToTop } from "@/components/blocks/scroll-to-top";
import { InstallPrompt } from "@/components/blocks/install-prompt";

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
    siteName: "Besago Ventures",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Besago Ventures",
    description:
      "Your trusted partner in Real Estate, Automobile, Travel & Tours, and Import/Export.",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Besago Ventures",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#065f46",
  },
};

export const viewport: Viewport = {
  themeColor: "#065f46",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon-192x192.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Besago Ventures" />
        <link rel="apple-touch-startup-image" href="/icons/icon-512x512.png" />
      </head>
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
        <InstallPrompt />
      </body>
    </html>
  );
}
