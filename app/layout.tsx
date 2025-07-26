// import type React from "react"
// import "./globals.css"
// import { Inter } from "next/font/google" // Import Inter from next/font/google
// import { cn } from "@/lib/utils"
// import type { Metadata } from "next" // Import Metadata type

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans", // Define CSS variable for Inter font
// })

// export const metadata: Metadata = {
//   title: {
//     default: "ABG PRO PACK - Innovative Packaging Solutions",
//     template: "%s | ABG PRO PACK",
//   },
//   description:
//     "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
//   keywords: [
//     "packaging solutions",
//     "flexible tubes",
//     "printed labels",
//     "custom packaging",
//     "cosmetics packaging",
//     "pharma packaging",
//     "food packaging",
//     "chemical packaging",
//     "sustainable packaging",
//     "Bharat packaging",
//   ],
//   authors: [{ name: "ABG PRO PACK Team" }],
//   creator: "ABG PRO PACK",
//   publisher: "ABG PRO PACK",
//   openGraph: {
//     title: "ABG PRO PACK - Innovative Packaging Solutions",
//     description:
//       "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
//     url: "https://www.abgpropack.com", // Replace with your actual domain
//     siteName: "ABG PRO PACK",
//     images: [
//       {
//         url: "/placeholder.svg?height=630&width=1200", // Placeholder for your OG image
//         width: 1200,
//         height: 630,
//         alt: "ABG PRO PACK - Innovative Packaging Solutions",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "ABG PRO PACK - Innovative Packaging Solutions",
//     description:
//       "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
//     images: ["/placeholder.svg?height=675&width=1200"], // Placeholder for your Twitter image
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },,
//   // You can also add a canonical URL if needed
//   // alternates: {
//   //   canonical: 'https://www.abgpropack.com',
//   // },
//     generator: 'v0.dev'
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
//     </html>
//   )
// }

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "ABG PRO PACK - Innovative Packaging Solutions",
    template: "%s | ABG PRO PACK",
  },
  description:
    "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
  keywords: [
    "packaging solutions",
    "flexible tubes",
    "printed labels",
    "custom packaging",
    "cosmetics packaging",
    "pharma packaging",
    "food packaging",
    "chemical packaging",
    "sustainable packaging",
    "Bharat packaging",
  ],
  authors: [{ name: "ABG PRO PACK Team" }],
  creator: "ABG PRO PACK",
  publisher: "ABG PRO PACK",
  openGraph: {
    title: "ABG PRO PACK - Innovative Packaging Solutions",
    description:
      "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
    url: "https://www.abgpropack.com",
    siteName: "ABG PRO PACK",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "ABG PRO PACK - Innovative Packaging Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABG PRO PACK - Innovative Packaging Solutions",
    description:
      "ABG PRO PACK offers innovative and sustainable packaging solutions including flexible laminated tubes, printed labels, and custom packaging for cosmetics, pharma, food, and chemical industries in Bharat.",
    images: ["/placeholder.svg?height=675&width=1200"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  )
}