"use client"

import { CardFooter } from "@/components/ui/card"

import { CardContent } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  BookMarked,
  Lightbulb,
  MessageSquare,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceCard } from "./resource-card"
import { Toaster } from "sonner"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Add Sonner Toaster for notifications */}
      <Toaster position="top-center" richColors />

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

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-200">Knowledge Center</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Resources & Guides
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                to Help You Succeed
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Explore our comprehensive collection of guides, tutorials, and best practices to maximize your email
              marketing success.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 w-full max-w-md"
            >
              <div className="relative rounded-xl p-1 bg-gradient-to-r from-purple-500/30 to-purple-300/30">
                <div className="relative flex items-center rounded-lg bg-black/80 backdrop-blur-sm">
                  <Search className="absolute left-3 h-5 w-5 text-purple-300" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    className="h-14 flex-1 border-0 bg-transparent pl-10 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Featured Resources</h2>
                <p className="mt-2 text-purple-100/80">Our most popular guides and tutorials</p>
              </div>
              <Button variant="link" className="text-purple-300 p-0 mt-2 md:mt-0">
                View all resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  id={`${resource.id}`}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  type={resource.type}
                  readTime={resource.readTime}
                  icon={resource.icon}
                  isNew={resource.isNew}
                />
              ))}
            </div>
          </motion.div>

          {/* Resource categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Browse by Category</h2>
              <p className="mt-4 text-purple-100/80">Find the resources you need by topic</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-black/40 backdrop-blur-sm mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard
                      key={index}
                      id={`${resource.id}`}
                      title={resource.title}
                      description={resource.description}
                      category={resource.category}
                      type={resource.type}
                      readTime={resource.readTime}
                      icon={resource.icon}
                    />
                  ))}
                </div>
              </TabsContent>

              {["guides", "tutorials", "documentation", "templates"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources
                      .filter((resource) => resource.category.toLowerCase() === category)
                      .map((resource, index) => (
                        <ResourceCard
                          key={index}
                          id={`${resource.id}`}
                          title={resource.title}
                          description={resource.description}
                          category={resource.category}
                          type={resource.type}
                          readTime={resource.readTime}
                          icon={resource.icon}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-24"
          >
            {/* <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Stay Updated</h2>
                  <p className="mt-4 text-purple-100/80">
                    Subscribe to our newsletter to receive the latest resources, guides, and best practices directly to
                    your inbox.
                  </p>
                  <div className="mt-6 flex items-center">
                    <Mail className="h-5 w-5 text-purple-300 mr-2" />
                    <span className="text-purple-200">Join 5,000+ subscribers</span>
                  </div>
                </div>
                <div>
                  <div className="relative rounded-xl p-1 bg-gradient-to-r from-purple-500/30 to-purple-300/30">
                    <div className="relative flex items-center rounded-lg bg-black/80 backdrop-blur-sm">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-14 flex-1 border-0 bg-transparent pl-4 pr-20 text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
                      />
                      <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 h-12">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-sm text-purple-200/70">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Help section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Need More Help?</h2>
            <p className="mt-4 text-purple-100/80 max-w-2xl mx-auto">
              Our team is ready to assist you with any questions or challenges you might have.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                    <MessageSquare className="h-8 w-8 text-purple-300" />
                  </div>
                  <CardTitle className="text-white text-center">Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100/80 text-center">
                    Reach out to our support team for personalized assistance with your account.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => window.location.href = 'https://f.metigan.com/f/dCItFHQqoe'} className="bg-white/10 hover:bg-white/20 text-white">Get in Touch</Button>
                </CardFooter>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                    <BookMarked className="h-8 w-8 text-purple-300" />
                  </div>
                  <CardTitle className="text-white text-center">Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100/80 text-center">
                    Explore our detailed documentation for in-depth information about our platform.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button  onClick={() => window.location.href = 'https://github.com/frantchessico/metigan-lib'} className="bg-white/10 hover:bg-white/20 text-white">View Docs</Button>
                </CardFooter>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                    <Lightbulb className="h-8 w-8 text-purple-300" />
                  </div>
                  <CardTitle className="text-white text-center">Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100/80 text-center">
                    Join our community to connect with other users and share insights.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => window.location.href = 'https://whatsapp.com/channel/0029VbAHdsMEKyZO1kO7VO1U'} className="bg-white/10 hover:bg-white/20 text-white">Join Community</Button>
                </CardFooter>
              </Card>
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

// Featured resources
const featuredResources = [
  { id: '67dd3b3e54134110d19c92fd',
    title: "Getting Started with Email Marketing",
    description: "Learn the fundamentals of effective email marketing campaigns.",
    category: "Guides",
    type: "Comprehensive Guide",
    readTime: "15 min read",
    icon: BookOpen,
    isNew: true,
  },
  { id: '67dd93a0c37dbd75bac421ea',
    title: "Creating High-Converting Email Templates",
    description: "Design templates that drive engagement and conversions.",
    category: "Tutorials",
    type: "Step-by-Step Tutorial",
    readTime: "12 min read",
    icon: FileText,
    isNew: false,
  },
  { id: '67ddb1aac3c28930a8cf4631',
    title: "Email Deliverability Best Practices",
    description: "Ensure your emails reach the inbox, not the spam folder.",
    category: "Guides",
    type: "Expert Guide",
    readTime: "10 min read",
    icon: BookOpen,
    isNew: false,
  },
]

// All resources
const resources = [
  // Guides
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Getting Started with Email Marketing",
    description: "Learn the fundamentals of effective email marketing campaigns.",
    category: "Guides",
    type: "Comprehensive Guide",
    readTime: "15 min read",
    icon: BookOpen,
  },
  {
    id: '67ddb1aac3c28930a8cf4631',
    title: "Email Deliverability Best Practices",
    description: "Ensure your emails reach the inbox, not the spam folder.",
    category: "Guides",
    type: "Expert Guide",
    readTime: "10 min read",
    icon: BookOpen,
  },
  {
    id: '67dd3caa19ec1be1942571f6',
    title: "Segmentation Strategies for Better Results",
    description: "Learn how to segment your audience for targeted campaigns.",
    category: "Guides",
    type: "Strategy Guide",
    readTime: "8 min read",
    icon: BookOpen,
  },
  {
    id: '67ddc94178ebbb436c063e28',
    title: "Email Marketing Compliance Guide",
    description: "Stay compliant with GDPR, CAN-SPAM, and other regulations.",
    category: "Guides",
    type: "Legal Guide",
    readTime: "12 min read",
    icon: BookOpen,
  },

  // Tutorials
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Creating High-Converting Email Templates",
    description: "Design templates that drive engagement and conversions.",
    category: "Tutorials",
    type: "Step-by-Step Tutorial",
    readTime: "12 min read",
    icon: FileText,
  },
  {
    id: '67de42b4228ab3d861c2b657',
    title: "Setting Up Automated Email Sequences",
    description: "Create powerful drip campaigns that nurture leads automatically.",
    category: "Tutorials",
    type: "Video Tutorial",
    readTime: "20 min watch",
    icon: Video,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "A/B Testing Your Email Campaigns",
    description: "Learn how to test and optimize your email performance.",
    category: "Tutorials",
    type: "Practical Tutorial",
    readTime: "15 min read",
    icon: FileText,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Advanced Personalization Techniques",
    description: "Go beyond first name personalization with dynamic content.",
    category: "Tutorials",
    type: "Advanced Tutorial",
    readTime: "18 min read",
    icon: FileText,
  },

  // Documentation
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "API Reference Guide",
    description: "Complete documentation of our RESTful API endpoints.",
    category: "Documentation",
    type: "Technical Docs",
    readTime: "Reference",
    icon: FileText,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "SMTP Integration Guide",
    description: "Step-by-step instructions for setting up SMTP integration.",
    category: "Documentation",
    type: "Technical Guide",
    readTime: "8 min read",
    icon: FileText,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Webhook Implementation",
    description: "Learn how to set up and use webhooks for real-time events.",
    category: "Documentation",
    type: "Developer Guide",
    readTime: "10 min read",
    icon: FileText,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Email Template Markup Reference",
    description: "Complete reference for our template markup language.",
    category: "Documentation",
    type: "Reference Guide",
    readTime: "Reference",
    icon: FileText,
  },

  // Templates
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Welcome Email Series Templates",
    description: "Ready-to-use templates for onboarding new subscribers.",
    category: "Templates",
    type: "Template Pack",
    readTime: "5 templates",
    icon: Download,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "E-commerce Email Templates",
    description: "Conversion-focused templates for online stores.",
    category: "Templates",
    type: "Template Pack",
    readTime: "8 templates",
    icon: Download,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Newsletter Templates Collection",
    description: "Beautiful, responsive templates for regular newsletters.",
    category: "Templates",
    type: "Template Pack",
    readTime: "6 templates",
    icon: Download,
  },
  {
    id: '67dd3b3e54134110d19c92fd',
    title: "Transactional Email Templates",
    description: "Professional templates for order confirmations and updates.",
    category: "Templates",
    type: "Template Pack",
    readTime: "7 templates",
    icon: Download,
  },
]

