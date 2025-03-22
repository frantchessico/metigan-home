"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="relative overflow-hidden rounded-lg px-6 py-16 sm:px-12 sm:py-24 md:py-32">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#1a0b4b] to-[#4c0c8f] -z-10" />

        {/* Animated particles */}
        <div className="absolute inset-0 -z-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Cosmic nebula effect */}
        <div className="absolute inset-0 overflow-hidden -z-5">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-blue-500/20 blur-3xl"
            style={{
              left: mousePosition.x - 400,
              top: mousePosition.y - 400,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Constellation pattern */}
        <div className="absolute inset-0 opacity-10 -z-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="constellation" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" />
                <circle cx="30" cy="40" r="1" fill="white" />
                <circle cx="70" cy="20" r="1" fill="white" />
                <circle cx="90" cy="60" r="1" fill="white" />
                <circle cx="50" cy="80" r="1" fill="white" />
                <line x1="10" y1="10" x2="30" y2="40" stroke="white" strokeWidth="0.2" />
                <line x1="30" y1="40" x2="70" y2="20" stroke="white" strokeWidth="0.2" />
                <line x1="70" y1="20" x2="90" y2="60" stroke="white" strokeWidth="0.2" />
                <line x1="90" y1="60" x2="50" y2="80" stroke="white" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#constellation)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="text-center text-sm font-semibold text-indigo-300 pb-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              FAQ
            </motion.div>
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] leading-normal text-indigo-200 sm:text-lg sm:leading-7">
              Everything you need to know about our email platform
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl mt-12 relative">
            {/* Glowing orb behind accordion */}
            <div className="absolute -z-10 w-full h-full">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="backdrop-blur-sm bg-white/5 border border-indigo-500/20 rounded-lg overflow-hidden mb-4"
                  >
                    <AccordionTrigger className="text-left hover:text-indigo-300 text-white px-6 py-4 transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-indigo-200 px-6 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Floating question marks */}
            <div className="absolute -z-5 inset-0 overflow-hidden pointer-events-none">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-indigo-500/10 text-7xl font-bold"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 5 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 1.5,
                  }}
                >
                  ?
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "How does email scheduling work?",
    answer:
      "Our email scheduling feature allows you to compose emails and set them to be sent at a specific date and time. This is perfect for reaching recipients in different time zones or planning marketing campaigns in advance.",
  },
  {
    question: "Can I track when my emails are opened?",
    answer:
      "Yes! Our platform provides detailed tracking that shows you when your emails are opened, links are clicked, and attachments are downloaded. You'll get real-time notifications and comprehensive analytics.",
  },
  {
    question: "How customizable are the email templates?",
    answer:
      "Our templates are fully customizable. You can modify colors, fonts, layouts, and add your own branding elements. You can also create templates from scratch using our intuitive drag-and-drop editor.",
  },
  {
    question: "Is there a limit to how many emails I can send?",
    answer:
      "Email limits depend on your plan. Basic users can send up to 1,000 emails per month, Standard users up to 10,000, and Premium users have unlimited sending capabilities.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We use end-to-end encryption, two-factor authentication, and regular security audits to ensure your data and communications remain private and protected.",
  },
]

