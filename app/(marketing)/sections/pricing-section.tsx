import { Check } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section id="pricing" className="container py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-transparent">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">PRICING</h3>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the perfect plan for your email marketing needs. Scale as you grow with our flexible pricing options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              plan.featured ? "border-primary shadow-md bg-primary/5 dark:bg-primary/10" : "hover:border-primary/30",
            )}
          >
            <CardHeader>
              {plan.featured && (
                <div className="flex justify-center">
                  <ShineBorder
                    className="text-center capitalize bg-muted px-6 py-2 text-sm font-medium mb-4 rounded-full"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    duration={2.5}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span>Most Popular</span>
                      <span className="text-base">⭐</span>
                    </span>
                  </ShineBorder>
                </div>
              )}
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">${plan.price}</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={cn(
                  "w-full transition-all duration-300",
                  plan.featured
                    ? "hover:bg-primary/90 hover:shadow-md"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary",
                )}
              >
                {plan.name === "Business" ? "Contact Sales" : "Get Started"}
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

