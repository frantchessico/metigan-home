"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ArrowRight, Eye, Copy, Download, Star, Clock, Tag, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { defaultTemplates } from "./default-templates"
import Image from 'next/image';

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [previewTemplate, setPreviewTemplate] = useState<(typeof defaultTemplates)[0] | null>(null)

  // Categories derived from templates
  const categories = [
    { id: "all", name: "All" },
    { id: "welcome", name: "Welcome" },
    { id: "promotional", name: "Promotional" },
    { id: "newsletter", name: "Newsletter" },
    { id: "event", name: "Events" },
    { id: "transactional", name: "Transactional" },
    { id: "feedback", name: "Feedback" },
  ]

  // Filter templates based on search query and category
  const filteredTemplates = defaultTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || template.id.includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === "newest") {
      return -1 // Simulating newest first (would normally compare dates)
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "popular") {
      return -1 // Simulating popularity (would normally compare usage stats)
    }
    return 0
  })

  // Handle preview
  const handlePreview = (template: (typeof defaultTemplates)[0]) => {
    setPreviewTemplate(template)
  }

  // Close preview
  const closePreview = () => {
    setPreviewTemplate(null)
  }

  return (
    <section className="relative w-full overflow-hidden py-24">
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
              <span className="text-sm font-medium text-purple-200">Template Library</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Professional Templates
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Ready to Use
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Choose from our collection of professionally designed email templates to boost your marketing campaigns.
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
                    placeholder="Search templates..."
                    className="h-14 flex-1 border-0 bg-transparent pl-10 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Filter and sort controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <Tabs
                defaultValue="all"
                className="w-full md:w-auto"
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-7 bg-black/40 backdrop-blur-sm">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-4 w-4 text-purple-300" />
                <span className="text-sm text-purple-200 mr-2">Sort by:</span>
                <Select defaultValue="newest" onValueChange={(value) => setSortBy(value)}>
                  <SelectTrigger className="w-full md:w-[180px] bg-black/40 border-purple-500/20">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/80 border-purple-500/20">
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Templates grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {sortedTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={template.thumbnail || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm"
                            onClick={() => handlePreview(template)}
                          >
                            <Eye className="h-4 w-4 mr-1" /> Preview
                          </Button>
                          {/* <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                            <Copy className="h-4 w-4 mr-1" /> Duplicate
                          </Button> */}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                          {template.id.includes("welcome")
                            ? "Welcome"
                            : template.id.includes("newsletter")
                              ? "Newsletter"
                              : template.id.includes("promotional")
                                ? "Promotional"
                                : template.id.includes("event")
                                  ? "Events"
                                  : template.id.includes("thank")
                                    ? "Thank You"
                                    : template.id.includes("password")
                                      ? "Transactional"
                                      : template.id.includes("feedback")
                                        ? "Feedback"
                                        : "General"}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-purple-300">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                      <h3 className="text-white text-lg font-medium mb-2">{template.name}</h3>
                      <p className="text-purple-100/80 text-sm line-clamp-2 mb-3">{template.description}</p>
                      <div className="flex items-center text-sm text-purple-200/70">
                        <Mail className="h-4 w-4 mr-1" />
                        <span className="line-clamp-1">{template.subject}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="px-5 py-4 border-t border-purple-500/20 flex justify-between">
                      <div className="flex items-center text-sm text-purple-200/70">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Recently updated</span>
                      </div>
                      <Button onClick={() => window.location.href = 'https://app.metigan.com/templates'} variant="ghost" size="sm" className="text-purple-300 p-0 h-auto">
                        Use <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
                <Tag className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white text-lg font-medium mb-2">No templates found</h3>
                <p className="text-purple-100/80 max-w-md mx-auto">
                  We couldn't find any templates matching your search. Try different terms or categories.
                </p>
              </div>
            )}
          </motion.div>

          {/* Pagination */}
          {/* {sortedTemplates.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-purple-500/20 text-purple-200">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/20 bg-purple-500/20 text-purple-100">
                  1
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/20 text-purple-200">
                  2
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/20 text-purple-200">
                  3
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/20 text-purple-200">
                  Next
                </Button>
              </div>
            </motion.div>
          )} */}

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-24 text-center"
          >
            <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Didn't find what you were looking for?</h2>
              <p className="mt-4 text-purple-100/80 max-w-2xl mx-auto">
                Create your own custom template or request help from our team to develop a template that meets your
                specific needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300">
                  <Download className="h-4 w-4 mr-2" /> Create Template
                </Button>
                <Button variant="outline" className="border-purple-500/50 text-purple-100 hover:bg-purple-500/10">
                  Request Custom Template
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Template Preview Dialog */}
      <Dialog open={previewTemplate !== null} onOpenChange={(open) => !open && closePreview()}>
        <DialogContent className="max-w-4xl bg-black/90 border-purple-500/20 text-white">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">{previewTemplate?.name}</DialogTitle>
              
            </div>
            <DialogDescription className="text-purple-100/80">{previewTemplate?.description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4 border border-purple-500/20 rounded-lg overflow-hidden">
            <div className="bg-gray-100 text-black p-3 flex items-center justify-between border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-medium text-gray-600">
                <span>Subject: </span>
                <span className="font-bold">{previewTemplate?.subject}</span>
              </div>
              <div className="w-16"></div> {/* Spacer for alignment */}
            </div>

            <div className="bg-white p-4 h-[500px] overflow-auto">
              <div className="mx-auto max-w-[600px] bg-white">
                {/* Email Header */}
                <div className="text-center py-6 border-b border-gray-200">
                  <Image src="/placeholder.svg?height=50&width=150" alt="Company Logo" className="h-10 mx-auto mb-4" />
                </div>

                {/* Email Content - This would be the actual template content */}
                <div className="py-8 px-4 text-gray-800">
                  {/* This is where the actual template content would be rendered */}
                  {/* For now, we'll show a placeholder based on the template type */}
                  {previewTemplate?.id.includes("welcome") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-6">Welcome to Our Platform!</h1>
                      <Image
                        src={previewTemplate?.thumbnail || "/placeholder.svg"}
                        alt="Welcome"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <p className="mb-4">Hello [Customer Name],</p>
                      <p className="mb-4">
                        We're thrilled to have you join us! Your account has been successfully created and you're all
                        set to start exploring our platform.
                      </p>
                      <p className="mb-4">Here are some helpful links to get you started:</p>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          Access My Account
                        </a>
                      </div>
                      <p className="mb-4">If you have any questions, don't hesitate to contact our support team.</p>
                      <p>
                        Best regards,
                        <br />
                        The Team
                      </p>
                    </div>
                  )}

                  {previewTemplate?.id.includes("newsletter") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-6">This Month's Newsletter</h1>
                      <Image
                        src={previewTemplate?.thumbnail || "/placeholder.svg"}
                        alt="Newsletter"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <h2 className="text-xl font-bold mb-3">Featured Article</h2>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                        arcu sed erat molestie vehicula.
                      </p>
                      <div className="my-4 border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
                        <h3 className="font-bold">Quick Updates</h3>
                        <ul className="list-disc list-inside">
                          <li>New feature launch next week</li>
                          <li>Community event on June 15th</li>
                          <li>Product updates and improvements</li>
                        </ul>
                      </div>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          Read More
                        </a>
                      </div>
                    </div>
                  )}

                  {previewTemplate?.id.includes("promotional") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-2">SPECIAL OFFER</h1>
                      <h2 className="text-xl text-center text-purple-600 mb-6">30% OFF EVERYTHING</h2>
                      <Image
                        src={previewTemplate?.thumbnail || "/placeholder.svg"}
                        alt="Promotion"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <p className="mb-4 text-center">
                        Take advantage of this limited-time offer. Valid until the end of the week!
                      </p>
                      <div className="grid grid-cols-2 gap-4 my-6">
                        <div className="border rounded-lg p-3 text-center">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Product 1"
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h3 className="font-bold">Product 1</h3>
                          <p className="text-purple-600 font-bold">$99.90</p>
                          <p className="text-sm text-gray-600">From $149.90</p>
                        </div>
                        <div className="border rounded-lg p-3 text-center">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Product 2"
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h3 className="font-bold">Product 2</h3>
                          <p className="text-purple-600 font-bold">$79.90</p>
                          <p className="text-sm text-gray-600">From $119.90</p>
                        </div>
                      </div>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  )}

                  {previewTemplate?.id.includes("event") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-6">YOU'RE INVITED</h1>
                      <Image
                        src={previewTemplate?.thumbnail || "/placeholder.svg"}
                        alt="Event"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <h2 className="text-xl font-bold text-center mb-4">Webinar: Marketing Trends for 2023</h2>
                      <p className="mb-4 text-center">
                        Join us for an exclusive webinar on the latest marketing trends. Our experts will share valuable
                        insights and practical strategies.
                      </p>
                      <div className="my-4 bg-purple-50 p-4 rounded-lg text-center">
                        <p>
                          <strong>Date:</strong> April 15, 2023
                        </p>
                        <p>
                          <strong>Time:</strong> 7:00 PM - 8:30 PM EST
                        </p>
                        <p>
                          <strong>Location:</strong> Online (Zoom)
                        </p>
                      </div>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          REGISTER NOW
                        </a>
                      </div>
                      <p className="text-center text-sm">Limited spots available. Secure yours today!</p>
                    </div>
                  )}

                  {previewTemplate?.id.includes("transactional") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-6">Order Confirmation</h1>
                      <p className="mb-4">Hello [Customer Name],</p>
                      <p className="mb-4">
                        Thank you for your purchase. Your order has been received and is being processed.
                      </p>
                      <div className="my-4 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2">Order Details</h3>
                        <p>
                          <strong>Order Number:</strong> #12345
                        </p>
                        <p>
                          <strong>Date:</strong> March 10, 2023
                        </p>
                        <p>
                          <strong>Payment Method:</strong> Credit Card
                        </p>
                        <hr className="my-3" />
                        <div className="flex items-center mb-3">
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Product"
                            className="w-12 h-12 object-cover rounded mr-3"
                          />
                          <div>
                            <p className="font-bold">Product 1</p>
                            <p className="text-sm">Quantity: 1</p>
                          </div>
                          <p className="ml-auto font-bold">$99.90</p>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between">
                          <p>
                            <strong>Total:</strong>
                          </p>
                          <p className="font-bold">$99.90</p>
                        </div>
                      </div>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          Track Order
                        </a>
                      </div>
                    </div>
                  )}

                  {previewTemplate?.id.includes("feedback") && (
                    <div>
                      <h1 className="text-2xl font-bold text-center mb-6">How Was Your Experience?</h1>
                      <Image
                        src={previewTemplate?.thumbnail || "/placeholder.svg"}
                        alt="Feedback"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      <p className="mb-4">Hello [Customer Name],</p>
                      <p className="mb-4">
                        We hope you're enjoying your recent purchase. We'd love to hear your thoughts about the product
                        and your shopping experience with us.
                      </p>
                      <p className="mb-4 text-center">Your feedback helps us improve our products and services.</p>
                      <div className="my-6 text-center">
                        <a href="#" className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                          Give Feedback
                        </a>
                      </div>
                      <p className="text-center">
                        As a thank you, we're offering a 10% discount on your next purchase: <strong>FEEDBACK10</strong>
                      </p>
                    </div>
                  )}
                </div>

                {/* Email Footer */}
                <div className="text-center py-6 border-t border-gray-200 text-sm text-gray-600">
                  <p className="mb-2">© 2023 Company Name. All rights reserved.</p>
                  <p>
                    <a href="#" className="text-purple-600 hover:underline">
                      Unsubscribe
                    </a>{" "}
                    ·
                    <a href="#" className="text-purple-600 hover:underline">
                      {" "}
                      Privacy Policy
                    </a>{" "}
                    ·
                    <a href="#" className="text-purple-600 hover:underline">
                      {" "}
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-purple-200/70">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30 mr-2">
                {previewTemplate?.id.includes("welcome")
                  ? "Welcome"
                  : previewTemplate?.id.includes("newsletter")
                    ? "Newsletter"
                    : previewTemplate?.id.includes("promotional")
                      ? "Promotional"
                      : previewTemplate?.id.includes("event")
                        ? "Events"
                        : previewTemplate?.id.includes("thank")
                          ? "Thank You"
                          : previewTemplate?.id.includes("password")
                            ? "Transactional"
                            : previewTemplate?.id.includes("feedback")
                              ? "Feedback"
                              : "General"}
              </Badge>
              <Mail className="h-4 w-4 mr-1" />
              <span>Subject: {previewTemplate?.subject}</span>
            </div>
            <div className="flex gap-2">
              
              <Button onClick={() => window.location.href = 'https://app.metigan.com/templates'} className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300">
                Use Template
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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

