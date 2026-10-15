import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Metigan - Launching soon",
  description: "Email infrastructure for modern businesses. Launching soon.",
}

// Brand palette (public/logo): night #030A24, deep #061A4D, signal #0B5BD3, mist #C9D1E6.
export default function LaunchingSoonPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#030A24] px-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0B5BD3_0%,#061A4D_35%,transparent_70%)] opacity-70" />

      <div />

      <div className="relative flex flex-col items-center gap-10 text-center">
        <Image
          src="/logo/web/logo-horizontal-white.svg"
          alt="Metigan"
          width={1200}
          height={300}
          priority
          className="h-auto w-[260px] sm:w-[340px]"
        />
        <h1 className="bg-gradient-to-r from-white to-[#C9D1E6] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Launching soon
        </h1>
      </div>

      <footer className="relative py-8 text-sm text-[#C9D1E6]/70">
        © {new Date().getFullYear()} Metigan. All rights reserved.
      </footer>
    </div>
  )
}
