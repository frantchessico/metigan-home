'use client'
import { Check } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function PricingSection() {
  const handleCick = () => {
    return window.location.href = 'https://app.metigan.com'
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              plan.featured
                ? "border-primary shadow-md bg-primary/5 dark:bg-primary/10 order-first sm:order-none"
                : "hover:border-primary/30",
              plan.featured && index === 1 ? "sm:col-span-2 lg:col-span-1 sm:col-start-1 lg:col-start-2" : "",
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
                onClick={handleCick}
              >
                {plan.name === "Business" ? "Get Started" : "Get Started"}
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
    name: "Free",
    description: "For personal projects and small businesses",
    price: 0,
    featured: false,
    features: [
      "3,000 emails per month",
      "5,000 contacts",
      "1 Domain",
      "No daily limit",
      "Basic templates",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For growing businesses with advanced needs",
    price: 16,
    featured: true,
    features: [
      "65,000 emails per month",
      "85,000 contacts",
      "15 Domains",
      "35 Senders",
      "API access",
      "No daily limit",
      "Detailed analytics",
      "24/7 phone support",
    ],
  },
  {
    name: "Business",
    description: "For large businesses with high volume needs",
    price: 150,
    featured: false,
    features: [
      "Unlimited emails",
      "Unlimited contacts",
      "1500 Domains",
      "2500 Senders",
      "Detailed analytics",
      "API access",
      "No daily limit",
      "Priority email support",
    ],
  },
]

