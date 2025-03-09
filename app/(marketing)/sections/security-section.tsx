"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BorderBeam } from "@/components/magicui/border-beam"
import ShineBorder from "@/components/magicui/shine-border"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function SecuritySection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-lg px-6 py-16 sm:px-12 sm:py-24 md:py-32">
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

        <div className="relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden order-2 lg:order-1 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Secure business communications on laptop"
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
              <BorderBeam size={200} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="flex justify-center">
                <ShineBorder
                  className="text-center capitalize bg-white/10 backdrop-blur-sm px-6 py-2.5 text-lg font-medium rounded-full"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  duration={2.5}
                >
                  <span className="inline-flex items-center gap-2">
                    <span>Enterprise Security</span>
                    <span className="text-xl">✨</span>
                  </span>
                </ShineBorder>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white">
                Secure your business communications
              </h2>
              <p className="text-white/80 text-lg">
                In addition to protecting millions of individuals, our platform secures more than 10,000 businesses,
                including some of the world's largest public and private organizations.
              </p>
              <p className="text-white/80 text-lg">
                Learn how we can improve the security of your business and comply with data protection and privacy laws.
              </p>
              <div className="pt-4">
                <Link
                  href="/business"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mr-4 transition-all duration-300 bg-white text-primary hover:bg-white/90 hover:shadow-md",
                  )}
                >
                  Business Solutions
                </Link>
                <Link
                  href="/security"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "group transition-all duration-300 border-white text-white hover:bg-white/20",
                  )}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

