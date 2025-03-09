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

