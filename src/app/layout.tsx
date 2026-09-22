import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#0A0A0A" />
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