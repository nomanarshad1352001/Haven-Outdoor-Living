import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site, px, img } from "@/lib/site";
import SmoothScroll from "@/components/site/smooth-scroll";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Haven Outdoor Living | Minneapolis Landscaping, Patios & Outdoor Living Design",
    template: "%s | Haven Outdoor Living",
  },
  description: site.description,
  keywords: [
    "landscaping Minneapolis",
    "outdoor living Minneapolis",
    "patio builders Twin Cities",
    "landscape design Minneapolis MN",
    "outdoor kitchen Minneapolis",
    "pergola builders Minnesota",
    "paver patio Minneapolis",
    "landscape lighting Twin Cities",
    "lawn care Minneapolis",
    "snow removal Minneapolis",
    "hardscape contractor Minnesota",
    "fire pit installation Minneapolis",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Haven Outdoor Living | Minneapolis Outdoor Living Studio",
    description: site.description,
    images: [
      {
        url: px(img.houseDusk, 1600),
        width: 1600,
        height: 1067,
        alt: "Minneapolis home at dusk with a Haven-designed outdoor living space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven Outdoor Living | Minneapolis",
    description: site.description,
    images: [px(img.houseDusk, 1600)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Landscape Design & Outdoor Living",
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="grain bg-forest text-cream font-sans">
        <SmoothScroll>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
