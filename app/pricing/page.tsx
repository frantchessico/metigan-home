"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, CheckCircle, Mail, Zap, Clock, BarChart3, Code, Globe, Users, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const router = useRouter()

  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#894EEE]/70 -z-10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#894EEE 1px, transparent 1px), linear-gradient(to right, #894EEE 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div
          className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[30%] w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-200">Choose Your Plan</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Simple, Transparent
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Pricing for Everyone
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Choose the perfect plan for your email marketing needs. Scale as you grow with our flexible pricing
              options.
            </motion.p>
          </div>

          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Free Plan */}
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-black/50 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">Free</h3>
                <p className="mt-2 text-sm text-purple-100/80">For personal projects and small businesses</p>
                <div className="mt-6 mb-8">
                  <span className="text-5xl font-bold text-white">$0.00</span>
                </div>
                <ul className="space-y-5">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button
                  onClick={() => (window.location.href = "https://app.metigan.com")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-6 text-base"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl border-2 border-purple-500 bg-black/60 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-black/70 flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-medium py-1.5 px-6 rounded-full">
                Most Popular
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">Pro</h3>
                <p className="mt-2 text-sm text-purple-100/80">For growing businesses with advanced needs</p>
                <div className="mt-6 mb-8 flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    ${billingCycle === "monthly" ? "16.00" : "12.80"}
                  </span>
                  <span className="ml-2 text-sm text-purple-100/80">
                    /{billingCycle === "monthly" ? "month" : "month, billed yearly"}
                  </span>
                </div>
                <ul className="space-y-5">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button
                  onClick={() => (window.location.href = "https://app.metigan.com")}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 py-6 text-base"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-black/50 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">Growth</h3>
                <p className="mt-2 text-sm text-purple-100/80">For scaling businesses with higher volume</p>
                <div className="mt-6 mb-8 flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    ${billingCycle === "monthly" ? "49.00" : "39.20"}
                  </span>
                  <span className="ml-2 text-sm text-purple-100/80">
                    /{billingCycle === "monthly" ? "month" : "month, billed yearly"}
                  </span>
                </div>
                <ul className="space-y-5">
                  {growthFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button
                  onClick={() => (window.location.href = "https://app.metigan.com")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-6 text-base"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-black/50 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">Business</h3>
                <p className="mt-2 text-sm text-purple-100/80">For large businesses with high volume needs</p>
                <div className="mt-6 mb-8 flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    ${billingCycle === "monthly" ? "150.00" : "120.00"}
                  </span>
                  <span className="ml-2 text-sm text-purple-100/80">
                    /{billingCycle === "monthly" ? "month" : "month, billed yearly"}
                  </span>
                </div>
                <ul className="space-y-5">
                  {businessFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button
                  onClick={() => (window.location.href = "https://app.metigan.com")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-6 text-base"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Features section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Email Features</h2>
              <p className="mt-4 text-purple-100/80">Everything you need to succeed with your email campaigns</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emailFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-black/50"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <feature.icon className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{feature.title}</h3>
                  <p className="text-sm text-purple-100/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-32 text-center"
          >
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h2>
              <p className="mt-4 text-purple-100/80 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our platform for their email marketing needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => (window.location.href = "https://app.metigan.com")}
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 py-6 px-8 text-base"
                >
                  Start For Free
                </Button>

                <Button
                  onClick={() => router.push("/contact-sales")}
                  variant="outline"
                  className="border-purple-500/50 text-purple-100 hover:bg-purple-500/10 py-6 px-8 text-base"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full text-[#894EEE]/10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

// Free plan features
const freeFeatures = [
  "3,000 emails per month",
  "5,000 contacts",
  "1 Domain",
  "No daily limit",
  "Basic templates",
  "Email support",
]

// Pro plan features
const proFeatures = [
  "65,000 emails per month",
  "85,000 contacts",
  "15 Domains",
  "35 Senders",
  "API access",
  "No daily limit",
  "Detailed analytics",
  "Email & chat support",
]

// Growth plan features
const growthFeatures = [
  "225,000 emails per month",
  "300,000 contacts",
  "50 Domains",
  "150 Senders",
  "API access",
  "Smart scheduling & workflows",
  "Advanced analytics",
  "No daily limit",
  "Priority email & chat support",
  "Segmented audiences",
]

// Business plan features
const businessFeatures = [
  "700,000 emails per month",
  "Unlimited contacts",
  "1,500 Domains",
  "2,500 Senders",
  "API access",
  "Dedicated IP add-on",
  "Advanced analytics",
  "No daily limit",
  "Priority email support",
  "Account manager",
]

// Email features
const emailFeatures = [
  {
    title: "Transactional Emails",
    description: "Send automated emails triggered by user actions with high deliverability.",
    icon: Mail,
  },
  {
    title: "Drag & Drop Template Builder",
    description: "Create beautiful email templates without any coding knowledge.",
    icon: CheckCircle,
  },
  {
    title: "Smart Form Builder",
    description: "Build custom forms to collect leads and grow your contact list.",
    icon: Users,
  },
  {
    title: "Broadcast Campaigns",
    description: "Send mass emails to your entire list or specific segments.",
    icon: MessageSquare,
  },
  {
    title: "Intelligent Scheduling",
    description: "Optimize delivery times based on recipient engagement patterns.",
    icon: Clock,
  },
  {
    title: "Automated Workflows",
    description: "Create complex email sequences triggered by user behavior.",
    icon: Zap,
  },
  {
    title: "RESTful API",
    description: "Integrate our email platform with your existing applications.",
    icon: Code,
  },
  {
    title: "SMTP Integration",
    description: "Use our reliable SMTP servers to send emails from your app.",
    icon: Globe,
  },
  {
    title: "Event Webhooks",
    description: "Get real-time notifications for email events like opens and clicks.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "Track performance with detailed reports and visualizations.",
    icon: BarChart3,
  },
  {
    title: "Global Delivery Network",
    description: "Ensure fast delivery worldwide with our distributed infrastructure.",
    icon: Globe,
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it from our expert support team.",
    icon: Phone,
  },
]
