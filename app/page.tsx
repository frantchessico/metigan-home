import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <a href="https://metigan.com/" className="text-xl font-bold text-gray-900">
          Metigan
        </a>
        <a href="https://metigan.com/">
          <Button variant="ghost" className="flex items-center gap-1">
            Log in <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 text-center">
        {/* GitHub Star Button */}
        <div className="mb-12 flex justify-center">
          <a href="https://github.com/frantchessico/metigan-lib">
            <Button variant="outline" className="rounded-full bg-white px-4 py-2 text-sm">
              <span className="mr-2">Give us a star</span>
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-purple-600">GitHub</span>
              <ArrowRight className="ml-1 h-4 w-4 text-purple-600" />
            </Button>
          </a>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          Smarter Email Delivery,
          <br />
          More Control for You
        </h1>

        {/* Description */}
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-lg text-gray-700">
            Metigan makes email sending simple—schedule, track, and customize with ease.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://metigan.com/">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </a>
          <a href="https://github.com/frantchessico/metigan-lib">
            <Button variant="link" className="text-gray-700">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </main>
    </div>
  )
}

