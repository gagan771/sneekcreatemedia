import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Harshaan Singh - Videographer & Creative Storyteller</title>
        <meta
          name="description"
          content="Professional videographer specializing in real estate, events, and creative storytelling."
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
