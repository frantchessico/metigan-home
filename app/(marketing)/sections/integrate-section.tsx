"use client"

import { useState, useEffect } from "react"
import { Mail, Github, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const technologies = [
  { name: "Node.js", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Serverless", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Ruby", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Python", icon: "/placeholder.svg?height=24&width=24" },
  { name: "PHP", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Go", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Rust", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Java", icon: "/placeholder.svg?height=24&width=24" },
  { name: "Elixir", icon: "/placeholder.svg?height=24&width=24" },
  { name: ".NET", icon: "/placeholder.svg?height=24&width=24" },
  { name: "REST", icon: "/placeholder.svg?height=24&width=24" },
  { name: "SMTP", icon: "/placeholder.svg?height=24&width=24" },
]

const frameworks = [
  { name: "Node.js", active: true },
  { name: "Next.js", active: false },
  { name: "Remix", active: false },
  { name: "Nuxt", active: false },
  { name: "Express", active: false },
  { name: "Hono", active: false },
  { name: "Redwood", active: false },
  { name: "Bun", active: false },
  { name: "Astro", active: false },
]

// Código com formatação para parecer com o VSCode
const codeLines = [
  {
    number: 1,
    content: (
      <>
        <span className="text-[#C586C0]">import</span> <span className="text-[#9CDCFE]">{"{ Resend }"}</span>{" "}
        <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">'resend'</span>;
      </>
    ),
  },
  { number: 2, content: <></> },
  {
    number: 3,
    content: (
      <>
        <span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">resend</span>{" "}
        <span className="text-white">=</span> <span className="text-[#569CD6]">new</span>{" "}
        <span className="text-[#4EC9B0]">Resend</span>
        <span className="text-[#CCCCCC]">(</span>
        <span className="text-[#CE9178]">'re_123456789'</span>
        <span className="text-[#CCCCCC]">);</span>
      </>
    ),
  },
  { number: 4, content: <></> },
  {
    number: 5,
    content: (
      <>
        <span className="text-[#CCCCCC]">(</span>
        <span className="text-[#C586C0]">async</span> <span className="text-[#569CD6]">function</span>
        <span className="text-[#DCDCAA]">()</span> <span className="text-[#CCCCCC]">{"{"}</span>
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        <span className="text-[#569CD6]"> const</span> <span className="text-[#9CDCFE]">{"{ data, error }"}</span>{" "}
        <span className="text-white">=</span> <span className="text-[#C586C0]">await</span>{" "}
        <span className="text-[#4FC1FF]">resend</span>
        <span className="text-[#CCCCCC]">.</span>
        <span className="text-[#4FC1FF]">emails</span>
        <span className="text-[#CCCCCC]">.</span>
        <span className="text-[#DCDCAA]">send</span>
        <span className="text-[#CCCCCC]">({"{"}</span>
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        <span className="text-[#9CDCFE]"> from</span>
        <span className="text-[#CCCCCC]">:</span> <span className="text-[#CE9178]">'onboarding@resend.dev'</span>
        <span className="text-[#CCCCCC]">,</span>
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        <span className="text-[#9CDCFE]"> to</span>
        <span className="text-[#CCCCCC]">:</span> <span className="text-[#CE9178]">'delivered@resend.dev'</span>
        <span className="text-[#CCCCCC]">,</span>
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        <span className="text-[#9CDCFE]"> subject</span>
        <span className="text-[#CCCCCC]">:</span> <span className="text-[#CE9178]">'Hello World'</span>
        <span className="text-[#CCCCCC]">,</span>
      </>
    ),
  },
  {
    number: 10,
    content: (
      <>
        <span className="text-[#9CDCFE]"> html</span>
        <span className="text-[#CCCCCC]">:</span>{" "}
        <span className="text-[#CE9178]">'&lt;strong&gt;It works!&lt;/strong&gt;'</span>
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        <span className="text-[#CCCCCC]"> );</span>
      </>
    ),
  },
  { number: 12, content: <></> },
  {
    number: 13,
    content: (
      <>
        <span className="text-[#C586C0]"> if</span> <span className="text-[#CCCCCC]">(</span>
        <span className="text-[#9CDCFE]">error</span>
        <span className="text-[#CCCCCC]">) {"{"}</span>
      </>
    ),
  },
  {
    number: 14,
    content: (
      <>
        <span className="text-[#C586C0]"> return</span> <span className="text-[#4FC1FF]">console</span>
        <span className="text-[#CCCCCC]">.</span>
        <span className="text-[#DCDCAA]">log</span>
        <span className="text-[#CCCCCC]">(</span>
        <span className="text-[#9CDCFE]">error</span>
        <span className="text-[#CCCCCC]">);</span>
      </>
    ),
  },
  {
    number: 15,
    content: (
      <>
        <span className="text-[#CCCCCC]"> </span>
      </>
    ),
  },
  { number: 16, content: <></> },
  {
    number: 17,
    content: (
      <>
        <span className="text-[#4FC1FF]"> console</span>
        <span className="text-[#CCCCCC]">.</span>
        <span className="text-[#DCDCAA]">log</span>
        <span className="text-[#CCCCCC]">(</span>
        <span className="text-[#9CDCFE]">data</span>
        <span className="text-[#CCCCCC]">);</span>
      </>
    ),
  },
  {
    number: 18,
    content: (
      <>
        <span className="text-[#CCCCCC]">)();</span>
      </>
    ),
  },
]

export  function IntegrateSection() {
  const [showCursor, setShowCursor] = useState(true)

  // Cursor piscando
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-black text-white py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-emerald-500 rounded-2xl opacity-50 blur-xl" />
          <div className="relative bg-black rounded-2xl p-6">
            <Mail className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Integrate <span className="text-purple-500">this</span> <span className="text-blue-400">weekend</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs
          for your favorite programming languages.
        </p>

        {/* Technology Icons */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 mb-12 max-w-3xl mx-auto">
          {technologies.map((tech) => (
            <motion.div key={tech.name} className="flex flex-col items-center gap-2" whileHover={{ scale: 1.1 }}>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-500">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* VSCode Editor */}
        <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-[#252526] shadow-xl max-w-3xl mx-auto">
          {/* VSCode Title Bar */}
          <div className="flex items-center justify-between bg-[#323233] px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div className="text-xs text-gray-400">index.js - Resend</div>
            <div className="w-12"></div>
          </div>

          {/* VSCode Main Area */}
          <div className="flex">
            {/* VSCode Sidebar */}
            <div className="w-10 bg-[#252526] flex flex-col items-center py-2 gap-4">
              <div className="w-6 h-6 flex items-center justify-center text-[#858585] hover:text-white">
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
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center text-white bg-[#00000030]">
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
                  className="w-5 h-5"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center text-[#858585] hover:text-white">
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
                  className="w-5 h-5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center text-[#858585] hover:text-white">
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
                  className="w-5 h-5"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
            </div>

            {/* VSCode Editor Area */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex items-center border-b border-[#252526] overflow-x-auto">
                {frameworks.map((framework) => (
                  <div
                    key={framework.name}
                    className={cn(
                      "px-3 py-2 text-xs whitespace-nowrap flex items-center gap-1",
                      framework.active
                        ? "bg-[#1E1E1E] text-white border-t-2 border-t-blue-500"
                        : "bg-[#2D2D2D] text-gray-400 hover:text-gray-300",
                    )}
                  >
                    <div className="w-3 h-3 rounded-sm bg-blue-500 opacity-70"></div>
                    {framework.name}
                  </div>
                ))}
              </div>

              {/* Code Editor */}
              <div className="relative font-mono text-sm overflow-x-auto">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="py-3 px-2 text-right select-none bg-[#1E1E1E] text-[#6e7681] w-12 flex-shrink-0">
                    {codeLines.map((line) => (
                      <div key={line.number} className="leading-6 text-xs">
                        {line.number}
                      </div>
                    ))}
                  </div>

                  {/* Code Content */}
                  <div className="py-3 px-2 text-[#d4d4d4] flex-1 relative">
                    {codeLines.map((line) => (
                      <div key={line.number} className="leading-6 text-xs whitespace-pre">
                        {line.content}
                        {line.number === 17 && showCursor && (
                          <span className="inline-block w-[2px] h-[14px] bg-white ml-0.5 align-middle animate-pulse"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VSCode Status Bar */}
          <div className="flex items-center justify-between bg-[#007ACC] px-3 py-0.5 text-white text-xs">
            <div className="flex items-center gap-3">
              <span>main*</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                main
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>JavaScript</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span>Spaces: 2</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 p-4 border-t border-[#252526] bg-[#1E1E1E]">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-300 border-[#3E3E3E] hover:text-white hover:bg-[#3E3E3E] flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-300 border-[#3E3E3E] hover:text-white hover:bg-[#3E3E3E] flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download ZIP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

