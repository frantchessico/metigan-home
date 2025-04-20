import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"
import { MainNav } from "@/components/main-nav"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "sonner"
import "./globals.css"
import Image from "next/image"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { Suspense } from "react"

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
    // Adicionando a classe "dark" diretamente no elemento html
    <html lang="en" className="dark" suppressHydrationWarning>
       <head>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={inter.className}>
        {/* Mantendo o ThemeProvider, mas com forcedTheme que será aplicado pelo provider */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full">
              {/* Gradient border effect */}
              <div className="h-[1px] w-full bg-gradient-to-r from-purple-400/0 via-purple-400/80 to-purple-400/0"></div>

              {/* Navbar with enhanced glass effect */}
              <div className="backdrop-blur-md bg-black/40 supports-[backdrop-filter]:bg-black/30 transition-all duration-300">
                <div className="container flex h-16 items-center justify-between py-4">
                  {/* Logo with hover effect */}
                  <Link
                    href="/"
                    className="group flex items-center gap-1 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <Image
                      src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1741872069/l0vobcpkkk2koni3rq8g.svg"
                      alt="Metigan Logo"
                      className="h-8 w-auto"
                      width={100}
                      height={100}
                    />
                    <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                      metigan
                    </span>
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8">
                    <MainNav />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <MobileNav />
                    <Link
                      href="https://app.metigan.com"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 px-5 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
                      )}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-b from-purple-500/30 to-transparent"></div>
            </header>

            <main className="flex-1">{children}</main>
          </div>
          <Toaster richColors={true} />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

