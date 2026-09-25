import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Space_Grotesk } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { BackToTop } from "@/components/shared/BackToTop"
import { CookieBanner } from "@/components/shared/CookieBanner"
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
  metadataBase: new URL("https://primex-sistemas.vercel.app"),
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
  verification: {
    google: "ta9MWMA6OfyrcWI3zaewPviM6O8SgfJRr9ylI4REg8I",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://primexsistemas.com.br",
    siteName: "Primex Sistemas Ltda",
    title: "Primex Sistemas — Soluções Inteligentes",
    description:
      "Desenvolvimento de softwares e soluções inteligentes para transformar seu negócio.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Primex Sistemas — Soluções Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primex Sistemas — Soluções Inteligentes",
    description:
      "Desenvolvimento de softwares e soluções inteligentes para transformar seu negócio.",
    images: ["/opengraph-image"],
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
        <meta name="theme-color" content="#0A0A0A" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });
      document.addEventListener('selectstart', function(e) {
        // Permite seleção em inputs e textareas
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
        }
      });
      document.addEventListener('keydown', function(e) {
        // Bloqueia Ctrl+C, Ctrl+U, F12
        if (
          (e.ctrlKey && (e.key === 'c' || e.key === 'u')) ||
          e.key === 'F12'
        ) {
          e.preventDefault();
        }
      });
    `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-primex-black text-primex-white antialiased">
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Primex Sistemas",
              legalName: "PRIMEX SISTEMAS LTDA",
              url: "https://primex-sistemas.vercel.app",
              logo: "https://primex-sistemas.vercel.app/brand/logo-horizontal-verde-preto.svg",
              description:
                "Empresa de desenvolvimento de software e soluções inteligentes com sede em Teresina (PI), atendendo todo o Brasil.",
              email: "pedrofsneto33@gmail.com",
              telephone: "+55-86-98811-7925",
              taxID: "55.536.885/0001-30",
              foundingDate: "2018",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Teresina",
                addressRegion: "PI",
                addressCountry: "BR",
              },
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              sameAs: [
                "https://instagram.com/primexsistemas",
                "https://github.com/pedrofsneto33/primex-sistemas",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-86-98811-7925",
                contactType: "customer service",
                areaServed: "BR",
                availableLanguage: ["Portuguese"],
              },
            }),
          }}
        />
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://primex-sistemas.vercel.app/#localbusiness",
              name: "Primex Sistemas",
              image:
                "https://primex-sistemas.vercel.app/brand/logo-horizontal-verde-preto.svg",
              url: "https://primex-sistemas.vercel.app",
              telephone: "+55-86-98811-7925",
              email: "pedrofsneto33@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Teresina",
                addressRegion: "PI",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -5.08921,
                longitude: -42.8016,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://instagram.com/primexsistemas"],
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Primex Sistemas",
              url: "https://primex-sistemas.vercel.app",
              publisher: {
                "@type": "Organization",
                name: "Primex Sistemas",
              },
            }),
          }}
        />
        <TooltipProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieBanner />
        </TooltipProvider>
      </body>
    </html>
  )
}