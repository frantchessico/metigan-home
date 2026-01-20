"use client"
import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const [plans, setPlans] = useState(pricingPlans)

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_APP_URL || "https://app.metigan.com"
    fetch(`${apiBase}/api/plans`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.plans) && data.plans.length > 0) {
          setPlans(
            data.plans.map((plan: any) => ({
              ...plan,
              price: plan.priceMonthly ?? plan.price ?? 0,
              featured: plan.featured ?? plan.popular ?? false,
              features: plan.features || [],
            })),
          )
        }
      })
      .catch(() => undefined)
  }, [])

  const handleClick = () => {
    return (window.location.href = "https://app.metigan.com")
  }

  return (
    <section
      id="pricing"
      className="container py-8 sm:py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-transparent"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center">
        <h3 className="text-center text-xs sm:text-sm font-semibold text-gray-500 pb-1 sm:pb-2">PRICING</h3>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
          Simple, Transparent Pricing
        </h2>
        <p className="max-w-[95%] sm:max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg sm:leading-7">
          Choose the perfect plan for your email marketing needs. Scale as you grow with our flexible pricing options.
        </p>
      </div>

      {/* Updated grid to handle 4 cards properly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
              plan.featured
                ? "border-primary shadow-md bg-primary/5 dark:bg-primary/10 order-first sm:order-none"
                : "hover:border-primary/30",
            )}
          >
            <CardHeader className="p-4 sm:p-6">
              {plan.featured && (
                <div className="flex justify-center">
                  <ShineBorder
                    className="text-center capitalize bg-muted px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-3 sm:mb-4 rounded-full"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    duration={2.5}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span>Most Popular</span>
                      <span className="text-sm sm:text-base">⭐</span>
                    </span>
                  </ShineBorder>
                </div>
              )}
              <CardTitle className="text-lg sm:text-xl">{plan.name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4 sm:p-6 pt-0 sm:pt-0">
              <div className="mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">${plan.price}</span>
                <span className="text-muted-foreground text-xs sm:text-sm ml-1">/month</span>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start sm:items-center">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={cn(
                  "w-full transition-all duration-300 text-xs sm:text-sm h-9 sm:h-10",
                  plan.featured
                    ? "hover:bg-primary/90 hover:shadow-md"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary",
                )}
                onClick={handleClick}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const pricingPlans = [
  {
    tier: "free",
    name: "Free",
    price: 0,
    description: "For personal projects and small businesses",
    features: [
      "3,000 emails per month",
      "5,000 contacts",
      "1 Domain",
      "No daily limit",
      "Basic templates",
      "Email support",
    ],
    limits: {
      emails: 3000,
      contacts: 5000,
      apiCalls: 1000,
    },
    featured: false,
  },
  {
    tier: "pro",
    name: "Pro",
    price: 16,
    description: "For growing businesses with advanced needs",
    features: [
      "65,000 emails per month",
      "85,000 contacts",
      "15 Domains",
      "35 Senders",
      "API access",
      "No daily limit",
      "Detailed analytics",
      "Email & chat support",
    ],
    limits: {
      emails: 65000,
      contacts: 85000,
      apiCalls: 20000,
    },
    featured: true,
  },
  {
    tier: "growth",
    name: "Growth",
    price: 49,
    description: "For scaling businesses with higher volume",
    features: [
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
    ],
    limits: {
      emails: 225000,
      contacts: 300000,
      apiCalls: 60000,
    },
    featured: false,
  },
  {
    tier: "business",
    name: "Business",
    price: 150,
    description: "For large businesses with high volume needs",
    features: [
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
    ],
    limits: {
      emails: 700000,
      contacts: Number.POSITIVE_INFINITY,
      apiCalls: 100000,
    },
    featured: false,
  },
]
