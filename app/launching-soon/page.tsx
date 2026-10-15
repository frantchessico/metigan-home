import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Metigan - Launching soon",
  description: "Metigan is launching soon.",
}

export default function LaunchingSoonPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black px-4 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div />

      <div className="relative flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1741872069/l0vobcpkkk2koni3rq8g.svg"
            alt="Metigan Logo"
            className="h-10 w-auto"
            width={100}
            height={100}
            priority
          />
          <span className="text-2xl font-bold">metigan</span>
        </div>
        <h1 className="bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Launching soon
        </h1>
      </div>

      <footer className="relative py-8 text-sm text-white/50">
        © {new Date().getFullYear()} Metigan. All rights reserved.
      </footer>
    </div>
  )
}
