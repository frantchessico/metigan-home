"use client"

import { motion } from "framer-motion"

import { CheckCircle, Zap, Clock, Shield, Globe, Users } from "lucide-react"
import { InvertedBackgroundSection } from "./inverted-background-section"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Send thousands of emails in minutes with our high-performance system.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Optimize delivery times with AI-powered timing suggestions.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Guaranteed Delivery",
      description: "Our infrastructure ensures your emails reach the inbox, not spam.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption and compliance features.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Deliver to recipients anywhere in the world with local optimizations.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based permissions and sharing.",
    },
  ]

  return (
    <InvertedBackgroundSection className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-400" />
            <span className="text-sm font-medium text-purple-200">Powerful Features</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Everything you need for <br />
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              professional email campaigns
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our platform provides all the tools you need to create, send, and analyze your email campaigns with ease.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </InvertedBackgroundSection>
  )
}

