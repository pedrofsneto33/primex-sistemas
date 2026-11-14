import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { site } from "@/data/site"
import "./globals.css"

// Fontes do Google via next/font (hospedadas no Vercel, zero FOIT)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Primex Sistemas — Soluções Inteligentes",
  description:
    "Desenvolvimento de softwares e soluções inteligentes para transformar seu negócio. Soluções em web, mobile, sistemas sob medida e IA.",
  keywords: [
    "desenvolvimento de software",
    "soluções inteligentes",
    "web",
    "mobile",
    "sistemas sob medida",
    "IA",
    "automação",
  ],
  authors: [{ name: "Primex Sistemas" }],
  creator: "Primex Sistemas",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "Primex Sistemas",
    title: "Primex Sistemas — Soluções Inteligentes",
    description:
      "Desenvolvimento de softwares e soluções inteligentes para transformar seu negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primex Sistemas — Soluções Inteligentes",
    description:
      "Desenvolvimento de softwares e soluções inteligentes para transformar seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
  sameAs: [site.github],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-primex-black text-primex-white antialiased">
        <TooltipProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
      </body>
    </html>
  )
}