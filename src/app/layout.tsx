import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Quicksand, Tourney } from "next/font/google"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})
const tourney = Tourney({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tourney",
})

export const metadata: Metadata = {
  title: "alanen.dev",
  description:
    "Tuomas Alanen is a software developer who loves to make an impact on users' life by solving identified problems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${tourney.variable}`}>
      <body className="font-sans bg-slate-100 text-black dark:bg-zinc-900 dark:text-white">
        <div className="py-2 px-5">
          <Link href="/">
            <h1 className="font-serif text-green-500 uppercase text-3xl">
              alanen.dev
            </h1>
          </Link>
        </div>
        <div className="container mx-auto py-10">{children}</div>
      </body>
    </html>
  )
}
