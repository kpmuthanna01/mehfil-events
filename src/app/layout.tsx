import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { MobileNav } from "@/components/mobile-nav";
import { Toaster } from "@/components/ui/sonner";
import { SITE, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mehfil Coorg | Events & Escapes",
    template: "%s | Mehfil Coorg",
  },
  description:
    "All-in-one event management in Coorg, weddings, ceremonies, corporate and more, plus a complete Coorg travel guide. Groceries, cooks, catering and decoration under one roof.",
  keywords: [
    "Coorg events",
    "Coorg wedding planner",
    "Kodagu event management",
    "Coorg catering",
    "Coorg travel guide",
    "surprise gifts Coorg",
    "Madikeri events",
  ],
  openGraph: {
    type: "website",
    siteName: "Mehfil Coorg",
    title: "Mehfil Coorg | Events & Escapes",
    description:
      "All-in-one event management and a complete Coorg travel guide, weddings, catering, decor, surprise gifts and more.",
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehfil Coorg | Events & Escapes",
    description:
      "All-in-one event management and a complete Coorg travel guide.",
  },
};

// Structured data so search engines understand the business.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "All-in-one event management in Coorg (Kodagu): weddings, ceremonies, corporate events, catering, decoration, surprise gifts and a Coorg travel guide.",
  url: SITE_URL,
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: "Coorg (Kodagu), Karnataka, India",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Karnataka",
    addressLocality: "Madikeri, Kodagu",
    addressCountry: "IN",
  },
  slogan: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
          <MobileNav />
          <Toaster richColors position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
