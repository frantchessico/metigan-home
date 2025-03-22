"use client"

import { useState } from "react"
import { Check, Calendar, BarChart3, Palette, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from 'next/image';

export function FeaturesWithImages() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-background/60">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-primary/5 text-primary">
            KEY FEATURES
          </Badge>

          <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Everything You Need for <span className="text-primary">Email Success</span>
          </h2>

          <p className="max-w-[85%] text-lg leading-relaxed text-muted-foreground">
            Powerful tools designed to make your email workflow efficient and effective
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative border border-border/50 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors duration-300" />
                <Image
                  src={feature.image }
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"

                  width={500} 
                  height={500}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </span>
                </div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0.8,
                        x: hoveredCard === index ? 0 : -5,
                      }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <span className="flex-shrink-0 rounded-full p-1 bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-foreground/90">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="relative z-10 pt-0">
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  <span className="text-primary text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full px-8">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Smart Scheduling",
    description: "Send emails at the perfect time",
    icon: Calendar,
    image:
      "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742631874/nzwxgm6tp3vkypfvqdfa.jpg",
    benefits: [
      "Schedule emails for optimal delivery times",
      "Time zone intelligent sending",
      "Recurring email campaigns",
      "Calendar integration",
    ],
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights from your email campaigns",
    icon: BarChart3,
    image:
      "https://res.cloudinary.com/dwsk5thfo/image/upload/v1742631908/f36q4nmk2fx3fyaacsnb.jpg",
    benefits: [
      "Real-time open and click tracking",
      "Engagement heat maps",
      "Conversion analytics",
      "A/B testing capabilities",
    ],
  },
  {
    title: "Customizable Templates",
    description: "Create beautiful emails with ease",
    icon: Palette,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      "Drag-and-drop editor",
      "Responsive design templates",
      "Brand customization options",
      "Save and reuse templates",
    ],
  },
]


