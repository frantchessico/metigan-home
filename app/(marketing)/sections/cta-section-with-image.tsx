import { BorderBeam } from "@/components/magicui/border-beam"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function CtaSectionWithImage() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary-foreground/90 px-6 py-16 sm:px-12 md:py-24 text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 mx-auto max-w-xl text-left">
            <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to transform your email experience?
            </h2>
            <p className="mt-4 text-lg text-white md:text-xl">
              Join thousands of satisfied users who have revolutionized their email workflow. Start your free trial
              today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-primary hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:scale-105",
                )}
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white text-white hover:bg-white/20 transition-all duration-300 hover:scale-105",
                )}
              >
                Request Demo
              </Link>
            </div>
          </div>
          <div className="relative z-10 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hidden md:block">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team celebrating success"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        <BorderBeam size={400} className="opacity-40 hover:opacity-60 transition-opacity duration-700" />
      </div>
    </section>
  )
}

