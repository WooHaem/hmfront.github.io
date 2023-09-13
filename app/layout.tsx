import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Footer from "@/components/Footer";

const noto = Noto_Sans({ subsets: ['latin'], weight: "600" })

export const metadata: Metadata = {
  title: 'hmfront.com',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
