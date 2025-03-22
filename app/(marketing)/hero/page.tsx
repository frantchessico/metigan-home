"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/magicui/border-beam"
import ShineBorder from "@/components/magicui/shine-border"
import { Companies } from "@/components/social-proof"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

function HeroPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Background with gradient and animated elements */}
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 to-[#894EEE]/70 -z-10" />

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

        {/* Original Hero Content */}
        <section className="relative space-y-4 sm:space-y-6 pb-6 pt-4 md:pb-12 md:pt-10 lg:py-20 z-10">
          <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center sm:mb-8 lg:mb-20 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-14 flex items-center justify-center"
            >
              <ShineBorder
                className="text-center capitalize bg-muted px-3 sm:px-4 py-1 sm:py-1.5 text-sm sm:text-lg font-medium absolute"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                Introducing QuotesAI ✨
              </ShineBorder>
            </motion.div>

            <motion.h1
              className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 sm:mt-16 md:mt-20 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Smarter Email Delivery,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                More Control for You
              </span>
            </motion.h1>

            <motion.p
              className="max-w-[42rem] leading-normal text-sm sm:text-base md:text-xl text-purple-100 sm:leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Makes email sending simple—schedule, track, and customize with ease.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 w-full sm:w-auto",
                )}
              >
                Get Started
              </Link>
              <a
                href="/#features"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-purple-400/30 text-purple-100 hover:bg-purple-500/10 w-full sm:w-auto",
                )}
              >
                Let&apos;s Explore 👇🏻
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative rounded-xl mx-auto justify-center flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1000px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="w-full overflow-hidden rounded-xl border border-purple-500/20 shadow-lg">
              <Image
                src="/darkoutput.png"
                alt="Hero Image"
                width={1100}
                height={1100}
                className="hidden dark:block w-full h-auto object-contain"
              />
              <Image
                src="/lightoutput.png"
                alt="Hero Image"
                width={1100}
                height={1100}
                className="block dark:hidden w-full h-auto object-contain"
              />
            </div>
            <BorderBeam size={200} className="hidden sm:block" />
          </motion.div>
        </section>

        <Companies />

        <section id="open-source" className="container py-8 md:py-12 lg:py-24 relative z-10 px-4 sm:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 sm:gap-4 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white">
              Metigan: Email. Fast & Reliable
            </h2>
            <p className="max-w-[95%] sm:max-w-[85%] leading-normal text-sm sm:text-base md:text-lg text-purple-100 sm:leading-7">
              Let&apos;s Try Now -{" "}
              <a href="/login" className="underline underline-offset-4 text-purple-300 hover:text-purple-200">
                Get Started
              </a>
              .{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default HeroPage

