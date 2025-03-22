"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MousePointer,
  FileText,
  Users,
  Clock,
  Zap,
  Code,
  Globe,
  BarChart3,
  Webhook,
  Server,
  PenToolIcon as Tool,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const router = useRouter()

  return (
    <section className="relative w-full overflow-hidden">
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

      {/* Hero Section */}
      <div className="container relative z-10 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-200">Powerful Features</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Everything You Need for
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Email Marketing Success
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Our comprehensive platform provides all the tools you need to create, send, and analyze email campaigns
              that drive engagement and conversions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300" onClick={() => window.location.href = 'https://home.metigan.com'}>
                Start For Free
              </Button>
             
            </motion.div>
          </div>

          {/* Feature Categories Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-16"
          >
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-black/40 backdrop-blur-sm mb-8">
                <TabsTrigger value="all">All Features</TabsTrigger>
                <TabsTrigger value="email">Email Tools</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="developer">Developer Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allFeatures.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="email" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allFeatures
                    .filter((feature) => feature.category === "email")
                    .map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="automation" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allFeatures
                    .filter((feature) => feature.category === "automation")
                    .map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="developer" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allFeatures
                    .filter((feature) => feature.category === "developer")
                    .map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Highlighted Feature Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mb-24"
          >
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30 mb-4">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Drag & Drop Template Builder</h2>
                  <p className="text-purple-100/80 mb-6">
                    Create beautiful, responsive email templates without any coding knowledge. Our intuitive
                    drag-and-drop editor makes it easy to design professional emails that look great on any device.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Responsive design for all devices",
                      "Pre-designed content blocks",
                      "Custom fonts and colors",
                      "Image editing and optimization",
                      "Save and reuse templates",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-purple-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300" onClick={() => window.location.href = 'https://home.metigan.com'}>
                    Try Template Builder <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-purple-500/20">
                  <img
                    src="https://images.pexels.com/photos/5256078/pexels-photo-5256078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Drag & Drop Template Builder"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Compare Features by Plan</h2>
              <p className="mt-4 text-purple-100/80">Choose the plan that best fits your email marketing needs</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="py-4 px-6 text-left text-purple-100">Feature</th>
                    <th className="py-4 px-6 text-center text-purple-100">Free</th>
                    <th className="py-4 px-6 text-center text-purple-100">Pro</th>
                    <th className="py-4 px-6 text-center text-purple-100">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-b border-purple-500/20 ${index % 2 === 0 ? "bg-purple-500/5" : ""}`}
                    >
                      <td className="py-4 px-6 text-left text-white">{feature.name}</td>
                      <td className="py-4 px-6 text-center text-purple-100">
                        {feature.free ? (
                          <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-purple-100/50">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-purple-100">
                        {feature.pro ? (
                          typeof feature.pro === "string" ? (
                            feature.pro
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-purple-100/50">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-purple-100">
                        {feature.business ? (
                          typeof feature.business === "string" ? (
                            feature.business
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-purple-100/50">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300" onClick={() => router.push('/pricing')}>
                View Pricing Details
              </Button>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">What Our Customers Say</h2>
              <p className="mt-4 text-purple-100/80">
                Thousands of businesses trust our platform for their email marketing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.avatar || "/placeholder.svg?height=48&width=48"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-purple-100/80">{testimonial.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-yellow-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div> */}

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="mt-4 text-purple-100/80">Find answers to common questions about our features</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-medium text-white mb-3">{faq.question}</h3>
                  <p className="text-purple-100/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="text-center"
          >
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h2>
              <p className="mt-4 text-purple-100/80 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our platform for their email marketing needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300" onClick={() => window.location.href = 'https://home.metigan.com'}>
                  Start For Free
                </Button>
                <Button onClick={() => router.push('/contact-sales')} variant="outline" className="border-purple-500/50 text-purple-100 hover:bg-purple-500/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
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
    </section>
  )
}

// Feature Card Component
function FeatureCard({ feature }: any) {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
          <feature.icon className="h-6 w-6 text-purple-300" />
        </div>
        <CardTitle className="text-white">{feature.title}</CardTitle>
        <CardDescription className="text-purple-100/80">{feature.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="space-y-1">
          {feature.benefits.map((benefit: any, index: any) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm text-purple-100">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
     
    </Card>
  )
}

// All Features Data
const allFeatures = [
  {
    title: "Transactional Emails",
    description: "Send automated emails triggered by user actions with high deliverability.",
    icon: Mail,
    category: "email",
    benefits: [
      "Automated order confirmations and receipts",
      "Password reset and account notifications",
      "Customizable templates for all transactional needs",
      "Real-time delivery with high priority sending",
    ],
  },
  {
    title: "Drag & Drop Template Builder",
    description: "Create beautiful email templates without any coding knowledge.",
    icon: MousePointer,
    category: "email",
    benefits: [
      "Intuitive visual editor with drag-and-drop functionality",
      "Responsive design for all devices",
      "Pre-designed content blocks and layouts",
      "Save and reuse custom templates",
    ],
  },
  {
    title: "Smart Form Builder",
    description: "Build custom forms to collect leads and grow your contact list.",
    icon: FileText,
    category: "email",
    benefits: [
      "Customizable fields and validation rules",
      "Embed forms on your website or landing pages",
      "Automatic lead capture and list segmentation",
      "GDPR-compliant consent management",
    ],
  },
  {
    title: "Broadcast Campaigns",
    description: "Send mass emails to your entire list or specific segments.",
    icon: Users,
    category: "email",
    benefits: [
      "Target specific audience segments",
      "Schedule campaigns for optimal delivery times",
      "A/B testing to optimize performance",
      "Detailed campaign analytics and reporting",
    ],
  },
  {
    title: "Intelligent Scheduling",
    description: "Optimize delivery times based on recipient engagement patterns.",
    icon: Clock,
    category: "automation",
    benefits: [
      "AI-powered send time optimization",
      "Time zone-aware scheduling",
      "Automatic delivery during peak engagement hours",
      "Calendar view for campaign planning",
    ],
  },
  {
    title: "Automated Workflows",
    description: "Create complex email sequences triggered by user behavior.",
    icon: Zap,
    category: "automation",
    benefits: [
      "Visual workflow builder with drag-and-drop interface",
      "Behavior-based triggers and conditions",
      "Multi-step nurture sequences",
      "Automated tagging and list management",
    ],
  },
  {
    title: "RESTful API",
    description: "Integrate our email platform with your existing applications.",
    icon: Code,
    category: "developer",
    benefits: [
      "Comprehensive API documentation",
      "Secure authentication methods",
      "Webhooks for real-time event notifications",
      "SDKs for popular programming languages",
    ],
  },
  {
    title: "SMTP Integration",
    description: "Use our reliable SMTP servers to send emails from your app.",
    icon: Server,
    category: "developer",
    benefits: [
      "High deliverability SMTP service",
      "Easy integration with any application",
      "Detailed sending logs and analytics",
      "IP warming and reputation management",
    ],
  },
  {
    title: "Event Webhooks",
    description: "Get real-time notifications for email events like opens and clicks.",
    icon: Webhook,
    category: "developer",
    benefits: [
      "Real-time event notifications",
      "Track opens, clicks, bounces, and more",
      "Customizable webhook endpoints",
      "Secure payload verification",
    ],
  },
  {
    title: "Advanced Analytics",
    description: "Track performance with detailed reports and visualizations.",
    icon: BarChart3,
    category: "automation",
    benefits: [
      "Real-time dashboards and reporting",
      "Engagement metrics and conversion tracking",
      "List growth and subscriber activity",
      "Export capabilities for custom analysis",
    ],
  },
  {
    title: "Global Delivery Network",
    description: "Ensure fast delivery worldwide with our distributed infrastructure.",
    icon: Globe,
    category: "developer",
    benefits: [
      "Globally distributed sending infrastructure",
      "Automatic routing optimization",
      "Regional compliance handling",
      "99.9% uptime guarantee",
    ],
  },
  {
    title: "Developer Tools",
    description: "Comprehensive tools and resources for developers.",
    icon: Tool,
    category: "developer",
    benefits: [
      "Detailed API documentation",
      "Testing and sandbox environments",
      "Code examples and SDKs",
      "Developer support and resources",
    ],
  },
]

// Feature Comparison Data
const featureComparison = [
  {
    name: "Monthly Email Limit",
    free: "3,000",
    pro: "65,000",
    business: "Unlimited",
  },
  {
    name: "Contact Limit",
    free: "5,000",
    pro: "85,000",
    business: "Unlimited",
  },
  {
    name: "Transactional Emails",
    free: true,
    pro: true,
    business: true,
  },
  {
    name: "Drag & Drop Builder",
    free: true,
    pro: true,
    business: true,
  },
  {
    name: "Smart Form Builder",
    free: "Basic",
    pro: "Advanced",
    business: "Advanced",
  },
  {
    name: "Broadcast Campaigns",
    free: true,
    pro: true,
    business: true,
  },
  {
    name: "Intelligent Scheduling",
    free: false,
    pro: true,
    business: true,
  },
  {
    name: "Automated Workflows",
    free: "Basic",
    pro: "Advanced",
    business: "Advanced",
  },
  {
    name: "API Access",
    free: false,
    pro: true,
    business: true,
  },
  {
    name: "SMTP Integration",
    free: false,
    pro: true,
    business: true,
  },
  {
    name: "Event Webhooks",
    free: false,
    pro: true,
    business: true,
  },
  {
    name: "Advanced Analytics",
    free: "Basic",
    pro: "Advanced",
    business: "Advanced",
  },
  {
    name: "Global Delivery Network",
    free: true,
    pro: true,
    business: true,
  },
  {
    name: "Priority Support",
    free: false,
    pro: "24/7 Email",
    business: "24/7 Email & Phone",
  },
]

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    quote:
      "The drag & drop template builder has revolutionized our email marketing. We've seen a 40% increase in engagement since switching to this platform.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Michael Chen",
    title: "E-commerce Manager, ShopRight",
    quote:
      "The automated workflows have saved us countless hours. We can now create personalized customer journeys that drive conversions without manual intervention.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Jennifer Lopez",
    title: "Digital Strategist, GrowthLabs",
    quote:
      "The analytics capabilities are outstanding. We can track every aspect of our campaigns and make data-driven decisions that improve our ROI.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

// FAQs Data
const faqs = [
  {
    question: "What is the difference between transactional and broadcast emails?",
    answer:
      "Transactional emails are triggered by specific user actions like purchases or password resets, while broadcast emails are marketing campaigns sent to multiple recipients simultaneously.",
  },
  {
    question: "Can I use my own HTML templates?",
    answer:
      "We're currently working on this feature. Soon, you'll be able to import your own HTML templates or create them from scratch using our drag & drop builder or HTML editor. Stay tuned for updates!",
  },
  {
    question: "How does the intelligent scheduling feature work?",
    answer:
      "Our intelligent scheduling analyzes recipient engagement patterns and automatically sends emails at times when they're most likely to be opened, based on historical data.",
  },
  {
    question: "Is there a limit to how many automated workflows I can create?",
    answer:
      "There are no limits to the number of workflows you can create on Pro and Business plans. The Free plan allows up to 3 active workflows.",
  },
  {
    question: "How do I integrate the API with my application?",
    answer:
      "We provide comprehensive API documentation, SDKs for popular programming languages, and code examples to help you integrate our platform with your application.",
  },
  {
    question: "What analytics are available for my campaigns?",
    answer:
      "Our platform provides detailed analytics including open rates, click rates, bounce rates, unsubscribes, device and location data, and conversion tracking.",
  },
]

