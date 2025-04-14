import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">TESTIMONIALS</h3>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What Our Customers Say</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of satisfied users who have transformed their email workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Quote className="h-6 w-6 text-primary" />
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-foreground font-medium">{testimonial.content}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-primary/80">{testimonial.title}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    content:
      "This email platform has completely transformed how our team communicates. The scheduling feature alone has saved us countless hours.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "SJ",
  },
  {
    content:
      "The tracking capabilities are incredible. We now have insights into our email campaigns that we never had before.",
    name: "Michael Chen",
    title: "Sales Manager",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "MC",
  },
  {
    content:
      "I love how customizable everything is. It feels like the platform was built specifically for our workflow needs.",
    name: "Aisha Patel",
    title: "Product Owner",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "AP",
  },
]

