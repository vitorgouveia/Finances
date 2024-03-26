import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/lib/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Should You Buy Bitcoin Today? | Cryptocurrency Analyzer Tool",
  description:
    "Should you buy bitcoin today? 25/03/2024. Only 3 of 7 indicators are positive for bitcoin and you shouldn't buy it. Bitcoin analysis tool.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
