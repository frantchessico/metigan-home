import { NavigationTabs } from "./navigation-tabs"
import { FloatingCards } from "./floating-cards"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import ShineBorder from "@/components/magicui/shine-border"

export function MoreSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

      {/* Content */}
      <div className="container relative pt-8 pb-20">
        <NavigationTabs activeTab="Create a website" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex">
              <ShineBorder
                className="flex items-center justify-center capitalize bg-purple-900/50 px-6 py-2.5 text-lg font-medium rounded-full"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                duration={2.5}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-purple-100">HOSTINGER HORIZONS</span>
                </span>
              </ShineBorder>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Turn your idea into reality
            </h1>
            <p className="text-xl text-purple-100 max-w-lg">
              Build and launch web apps, tools, and software in minutes – without writing any code.
            </p>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "lg" }), "bg-purple-600 hover:bg-purple-500 text-white px-8 group")}
            >
              Start now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <FloatingCards />
          </div>
        </div>
      </div>
    </div>
  )
}

