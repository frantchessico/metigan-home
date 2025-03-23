"use client"

import type React from "react"

import {
  Mail,
  MousePointer,
  FileText,
  Users,
  Clock,
  Zap,
  Code,
  Server,
  BarChart3,
  Globe,
  PenToolIcon as Tool,
} from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Custom Webhook icon since it's not in Lucide
const Webhook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 16.98h-5.99c-1.1 0-1.95.5-2.5 1.02" />
    <path d="M18 21v-4.02" />
    <path d="M14 21l-2-2 2-2" />
    <path d="M6 16.98h3" />
    <path d="M3 12h18" />
    <path d="M3 7h9" />
    <path d="M13 7h5" />
    <path d="M18 7v4" />
    <path d="M8 3v4" />
    <path d="M6 3l2 2 2-2" />
  </svg>
)

const features = [
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

export function FeaturesSection() {
  const categories = [
    { id: "all", label: "All Features" },
    { id: "email", label: "Email Tools" },
    { id: "automation", label: "Automation" },
    { id: "developer", label: "Developer" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="container py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#894EEE]/20 text-[#894EEE] hover:bg-[#894EEE]/30">Powerful Features</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Everything you need to succeed</h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Our comprehensive suite of tools empowers marketers and developers to create, automate, and optimize email
          campaigns with ease.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-[#894EEE] data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features
                .filter((feature) => category.id === "all" || feature.category === category.id)
                .map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div key={index} variants={item}>
                      <Card className="h-full bg-black/50 border-[#894EEE]/20 hover:border-[#894EEE]/50 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 rounded-lg bg-[#894EEE]/20 text-[#894EEE]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <Badge variant="outline" className="text-xs capitalize">
                              {feature.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-white">{feature.title}</CardTitle>
                          <CardDescription className="text-white/70">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-white/80">
                                <span className="text-[#894EEE] mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

