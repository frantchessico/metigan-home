import { ArrowRight } from "lucide-react"
import { BorderBeam } from "@/components/magicui/border-beam"
import ShineBorder from "@/components/magicui/shine-border"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function SecuritySection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-transparent">
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
              className="text-center capitalize bg-muted px-6 py-2.5 text-lg font-medium rounded-full"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              duration={2.5}
            >
              <span className="inline-flex items-center gap-2">
                <span>Enterprise Security</span>
                <span className="text-xl">✨</span>
              </span>
            </ShineBorder>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Secure your business communications</h2>
          <p className="text-muted-foreground text-lg">
            In addition to protecting millions of individuals, our platform secures more than 10,000 businesses,
            including some of the world's largest public and private organizations.
          </p>
          <p className="text-muted-foreground text-lg">
            Learn how we can improve the security of your business and comply with data protection and privacy laws.
          </p>
          <div className="pt-4">
            <Link
              href="/business"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mr-4 transition-all duration-300 hover:bg-primary/90 hover:shadow-md",
              )}
            >
              Business Solutions
            </Link>
            <Link
              href="/security"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary",
              )}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

