import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Mbour Up ! — Forum jeunesse, entrepreneuriat & avenir durable — 6 sept. 2025, Saly",
  description:
    "Une journée pour entreprendre ici : conférences, panels, ateliers, stands, scène culturelle et networking à Saly. Inscription gratuite.",
  generator: "v0.dev",
  keywords: "Mbour, entrepreneuriat, jeunesse, forum, Saly, Sénégal, développement durable",
  // Adding comprehensive Open Graph and Twitter metadata
  openGraph: {
    title: "Mbour Up ! — Forum jeunesse, entrepreneuriat & avenir durable",
    description:
      "Une journée pour entreprendre ici : conférences, panels, ateliers, stands, scène culturelle et networking à Saly. Inscription gratuite.",
    locale: "fr_FR",
    type: "website",
    url: "https://mbourup.com",
    siteName: "Mbour Up !",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Mbour Up ! - Forum jeunesse, entrepreneuriat & avenir durable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mbour Up ! — Forum jeunesse, entrepreneuriat & avenir durable",
    description:
      "Une journée pour entreprendre ici : conférences, panels, ateliers, stands, scène culturelle et networking à Saly. Inscription gratuite.",
    images: ["/placeholder.svg?height=630&width=1200"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} antialiased`}>
      {/* Adding favicon and manifest */}
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1565C0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
