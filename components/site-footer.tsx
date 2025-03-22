"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import {
  Mail,
  Code,
  LayoutTemplate,
  Layers,
  Calendar,
  Workflow,
  Webhook,
  BarChart3,
  MessageSquare,
  Send,
  Server,
  Globe,
  Loader2,
} from "lucide-react"
import { sendDevelopersNewsletterEmail } from "@/app/email/metigan"

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      await sendDevelopersNewsletterEmail(email)
      toast.success("You're subscribed to our developer newsletter!")
      setEmail("")
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.")
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black/90 backdrop-blur-md text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-0.89 mb-4">
            <img
              src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1741872069/l0vobcpkkk2koni3rq8g.svg"
              alt="Metigan Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-white">metigan</span>
          </div>
          <p className="text-sm text-purple-100/70">
            Powerful email infrastructure for developers and marketers. Send transactional and marketing emails with
            confidence.
          </p>
          <div className="mt-4 space-y-2">
            {/* <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400" /> 123 Tech Plaza, Innovation District
            </p>
            <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <Phone className="h-4 w-4 text-purple-400" /> (800) 123-4567
            </p> */}
            <p className="text-sm text-purple-100/70 flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-400" /> developers@metigan.com
            </p>
          </div>
        </div>

        {/* Email Features */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-200">Email Features</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Send className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Transactional Emails</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <LayoutTemplate className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Drag & Drop Template Builder</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Layers className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Smart Form Builder</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <MessageSquare className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Broadcast Campaigns</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Calendar className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Intelligent Scheduling</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Workflow className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Automated Workflows</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Developer Tools */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-200">Developer Tools</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Code className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>RESTful API</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Server className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>SMTP Integration</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Webhook className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Event Webhooks</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <BarChart3 className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Advanced Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-purple-100/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Globe className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Global Delivery Network</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Developer Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-200">Developer Newsletter</h4>
          <p className="text-sm text-purple-100/70">
            Stay updated with the latest API features, best practices, and developer resources.
          </p>
          <form onSubmit={handleSubscribe} className="mt-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-black/50 border border-purple-500/30 text-white placeholder:text-purple-100/60 rounded-md px-4 py-2 w-full focus:outline-none focus:border-purple-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-md px-4 py-2 mt-2 hover:from-purple-500 hover:to-purple-300 w-full flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Code className="h-4 w-4 mr-2" />
                  <span>Subscribe for Developers</span>
                </>
              )}
            </button>
          </form>
          <p className="text-xs text-purple-100/50 mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-12 pt-6 border-t border-purple-500/20 text-center">
        <p className="text-sm text-purple-100/70">
          &copy; {new Date().getFullYear()} Metigan. All rights reserved. Powering email delivery.
        </p>
      </div>
    </footer>
  )
}

