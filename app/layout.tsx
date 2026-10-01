import type { Metadata, Viewport } from "next";
import { Coiny, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const coiny = Coiny({
  weight: "400",
  variable: "--font-coiny",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moonbyte.studio"),
  title: "Moonbyte — Ideas Start Here | Next-Gen Digital Studio",
  description:
    "We turn raw observations into living websites, immersive spatial experiences, and durable digital artifacts engineered for the next era.",
  keywords: [
    "Moonbyte",
    "Digital Studio",
    "Next.js",
    "Creative Development",
    "UI/UX Design",
    "Web Engineering",
    "Spatial Web",
  ],
  authors: [{ name: "Moonbyte Studio" }],
  openGraph: {
    title: "Moonbyte — Ideas Start Here",
    description:
      "We turn raw observations into living websites, immersive spatial experiences, and durable digital worlds engineered for the next era.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/moonbyte - hero image.png",
        width: 1200,
        height: 630,
        alt: "Moonbyte Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonbyte — Ideas Start Here",
    description:
      "Digital craft, immersive web design, and high-performance engineering.",
    images: ["/images/moonbyte - hero image.png"],
  },
  icons: {
    icon: [
      { url: "/images/moonbyte-logo.png" },
      { url: "/images/moonbyte-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/moonbyte-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/moonbyte-logo.png",
    apple: "/images/moonbyte-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${coiny.variable} ${fredoka.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#060714] text-slate-100 font-secondary antialiased selection:bg-purple-600 selection:text-white flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
