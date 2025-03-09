import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/toggle"
import MobileNav from "@/components/mobile-nav"
import { Mail } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Metigan - Mass Email Service",
  description: "Professional email marketing and mass email sending service",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full">
              {/* Gradient border effect */}
              <div className="h-[1px] w-full bg-gradient-to-r from-purple-400/0 via-purple-400/80 to-purple-400/0"></div>

              {/* Navbar with glass effect - removed shadows */}
              <div className="backdrop-blur-md bg-black/30 supports-[backdrop-filter]:bg-black/20">
                <div className="container flex h-16 items-center justify-between py-4">
                  {/* Logo */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">Metigan</span>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-6">
                    <MainNav />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <MobileNav />
                    <ModeToggle />
                    <Link
                      href="/login"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 px-4",
                        // Removed shadow-lg shadow-purple-700/20
                      )}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-b from-purple-500/20 to-transparent"></div>
            </header>

            <main className="flex-1">{children}</main>
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

