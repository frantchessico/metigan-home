// import * as React from "react"

// // import { siteConfig } from "@/config/site"
// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
// // import { ModeToggle } from "@/components/mode-toggle"

// export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
//   return (
//     <footer className={cn(className)}>
//       <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
//         <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
//           <Icons.logo className="h-6 w-6" />
//           <p className="text-center text-sm leading-loose md:text-left">
//             Built by{" "}
//             <a
//               href="https://twitter.com/kathanmehtaa"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               kathan
//             </a>
//             . Hosted on{" "}
//             <a
//               href="https://vercel.com"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               Vercel
//             </a>
//             . Component Credits to {" "}
//             <a
//               href="https://twitter.com/shadcn"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               shadcn
//             </a>
//             {/* . The source code is available on{" "}
//             <a
//               href="/#"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               GitHub
//             </a> */}
//             .
//           </p>
//         </div>
//         {/* <ModeToggle /> */}
//         <a
//               href="https://twitter.com/kathanmehtaa"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium text-2xl dark:md:hover:bg-gray-800 border border-spacing-4 border-opacity-80 rounded px-2"
//             >
//               𝕏
//             </a>
//       </div>
//     </footer>
//   )
// }




"\"use client"

import { Mail, Phone, MapPin, LinkIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black/90 backdrop-blur-md text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Metigan</h4>
          <p className="text-sm text-purple-100/70">
            Your go-to platform for mass email delivery. Simplifying email marketing for everyone.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 123 Main Street, Anytown
            </p>
            <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <Phone className="h-4 w-4" /> (123) 456-7890
            </p>
            <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <Mail className="h-4 w-4" /> support@metigan.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/features"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Features
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Pricing
              </a>
            </li>
            <li>
              <a
                href="/templates"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Templates
              </a>
            </li>
            <li>
              <a
                href="/resources"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/terms"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/security"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <LinkIcon className="h-3 w-3" /> Security
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-purple-100/70">
            Subscribe to our newsletter for the latest updates and special offers.
          </p>
          <div className="mt-4">
            {/* Placeholder for subscription form - implement as needed */}
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/50 border border-purple-500/30 text-white placeholder:text-purple-100/60 rounded-md px-4 py-2 w-full"
            />
            <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-md px-4 py-2 mt-2 hover:from-purple-500 hover:to-purple-300 w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-12 text-center">
        <p className="text-sm text-purple-100/70">&copy; {new Date().getFullYear()} Metigan. All rights reserved.</p>
      </div>
    </footer>
  )
}

