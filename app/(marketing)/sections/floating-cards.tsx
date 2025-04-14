import { Plane } from "lucide-react"

export function FloatingCards() {
  return (
    <div className="relative w-full max-w-2xl aspect-[16/9]">
      {/* Top Card */}
      <div className="absolute top-0 right-0 bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg border border-white/10 animate-float-slow">
        <Plane className="h-5 w-5 text-white" />
        <span className="text-white text-sm">Create the cheapest flights finder</span>
      </div>

      {/* Middle Card */}
      <div className="absolute top-1/4 right-1/4 bg-purple-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-500/20 w-full max-w-md animate-float">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-6 rounded bg-purple-500/30 flex items-center justify-center">
            <span className="text-purple-200 text-lg">⚡</span>
          </div>
          <span className="text-purple-100">Creating your web app...</span>
        </div>
        <div className="space-y-3">
          <div className="h-2 bg-purple-800/50 rounded-full w-3/4"></div>
          <div className="h-2 bg-purple-800/50 rounded-full w-1/2"></div>
        </div>
      </div>

      {/* Publish Button */}
      <div className="absolute bottom-0 left-1/4 animate-float-fast">
        <div className="relative">
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors duration-200">
            Publish
          </button>
          <div className="absolute -right-6 -bottom-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white transform rotate-12">
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

