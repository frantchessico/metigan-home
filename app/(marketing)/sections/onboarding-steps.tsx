"use client"

import { Check, Mail, BarChart, Users, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import ShineBorder from "@/components/magicui/shine-border"
import { useEffect, useRef } from "react"
import { InvertedBackgroundSection } from "./inverted-background-section"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export function OnboardingSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Header animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    )

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      },
    )

    // Step animations with ScrollTrigger
    stepsRefs.current.forEach((step, index) => {
      if (!step) return

      // Get the image and content elements
      const image = step.querySelector(".step-image")
      const content = step.querySelector(".step-content")
      const features = step.querySelectorAll(".step-feature")

      // Create a timeline for each step
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      // Add animations to the timeline
      tl.fromTo(step, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" })

      // Animate based on even/odd index
      if (index % 2 === 0) {
        tl.fromTo(content, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.3")
        tl.fromTo(image, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.5")
      } else {
        tl.fromTo(content, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.3")
        tl.fromTo(image, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.5")
      }

      // Stagger the feature items
      tl.fromTo(
        features,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.out",
        },
        "-=0.3",
      )
    })

    // Connection line animation
    const connectionLine = document.querySelector(".connection-line")
    if (connectionLine) {
      gsap.fromTo(
        connectionLine,
        { height: 0 },
        {
          height: "100%",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      )
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <InvertedBackgroundSection>
      <section id="onboarding" className="container py-12 md:py-24 lg:py-32" ref={sectionRef}>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <div className="flex justify-center">
            <ShineBorder
              className="text-center capitalize bg-white/10 backdrop-blur-sm px-6 py-2.5 text-lg font-medium rounded-full"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              duration={2.5}
            >
              <span className="inline-flex items-center gap-2">
                <span>Getting Started</span>
                <span className="text-xl">🚀</span>
              </span>
            </ShineBorder>
          </div>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white" ref={headingRef}>
            Start Sending in{" "}
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-purple-100 sm:text-lg sm:leading-7" ref={descriptionRef}>
            Our simple 4-step process gets you from signup to sending your first campaign quickly
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 hidden md:block connection-line"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0" ref={(el: any) => (stepsRefs.current[index] = el)}>
              <div className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 1 ? "md:rtl" : "")}>
                <div
                  className={cn(
                    "space-y-4 text-center md:text-left step-content",
                    index % 2 === 1 ? "md:text-right" : "",
                  )}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-purple-100">{step.description}</p>
                  <ul className="space-y-2 text-left">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 step-feature">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-purple-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={cn(
                    "relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl step-image",
                    index % 2 === 1 ? "md:order-first" : "",
                  )}
                >
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                  />
                  {/* Connection dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-primary shadow-lg hidden md:block"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </InvertedBackgroundSection>
  )
}

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up and set up your Metigan account in less than 2 minutes.",
    icon: Users,
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Simple registration process", "No credit card required for trial", "Instant account activation"],
  },
  {
    title: "Import Your Contacts",
    description: "Easily upload your existing contact lists or create new ones.",
    icon: Settings,
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["CSV/Excel import support", "Automatic duplicate removal", "Contact segmentation tools"],
  },
  {
    title: "Create Your Campaign",
    description: "Design beautiful emails with our drag-and-drop editor or use templates.",
    icon: Mail,
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Responsive email templates", "Personalization options", "A/B testing capabilities"],
  },
  {
    title: "Send & Analyze",
    description: "Schedule your campaign and track performance with detailed analytics.",
    icon: BarChart,
    image:
      "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Real-time delivery tracking", "Open and click-through rates", "Conversion analytics"],
  },
]

