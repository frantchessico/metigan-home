"use client"

import {   Key, useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ArrowRight, Eye, Copy, Download, Star, Clock, Tag, FileText, X } from "lucide-react"
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
import { templates } from "./templates"
import Image from 'next/image';

export default function FormTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [previewTemplate, setPreviewTemplate] = useState<(typeof templates)[0] | null>(null)

  // Extract unique categories from templates
  const uniqueCategories = Array.from(new Set(templates.map((template: { category: any }) => template.category)))

  // Categories for filtering
  const categories = [
    { id: "all", name: "All" },
    ...uniqueCategories.map((category: any) => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ]

  // Filter templates based on search query and category
  const filteredTemplates = templates.filter((template: { title: string; description: string; category: string }) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title)
    } else if (sortBy === "complexity") {
      const complexityOrder = { simple: 1, medium: 2, advanced: 3 }
      return (
        complexityOrder[a.complexity as keyof typeof complexityOrder] -
        complexityOrder[b.complexity as keyof typeof complexityOrder]
      )
    }
    return 0
  })

  // Handle preview
  const handlePreview = (template: (typeof templates)[0]) => {
    setPreviewTemplate(template)
  }

  // Close preview
  const closePreview = () => {
    setPreviewTemplate(null)
  }

  // Get complexity badge color
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "simple":
        return "bg-green-500/20 text-green-200 border-green-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-200 border-yellow-500/30"
      case "advanced":
        return "bg-orange-500/20 text-orange-200 border-orange-500/30"
      default:
        return "bg-purple-500/20 text-purple-200 border-purple-500/30"
    }
  }

  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "business":
        return "bg-blue-500/20 text-blue-200 border-blue-500/30"
      case "marketing":
        return "bg-purple-500/20 text-purple-200 border-purple-500/30"
      case "feedback":
        return "bg-teal-500/20 text-teal-200 border-teal-500/30"
      case "education":
        return "bg-indigo-500/20 text-indigo-200 border-indigo-500/30"
      case "events":
        return "bg-pink-500/20 text-pink-200 border-pink-500/30"
      case "nonprofit":
        return "bg-amber-500/20 text-amber-200 border-amber-500/30"
      case "ecommerce":
        return "bg-emerald-500/20 text-emerald-200 border-emerald-500/30"
      default:
        return "bg-gray-500/20 text-gray-200 border-gray-500/30"
    }
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
              <span className="text-sm font-medium text-purple-200">Form Templates</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Form Templates
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
              Choose from our collection of professionally designed form templates to collect data, feedback, and
              registrations.
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
                <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-black/40 backdrop-blur-sm">
                  {categories.slice(0, 7).map((category) => (
                    <TabsTrigger key={category.id as string} value={category.id as string}>
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
                    <SelectItem value="complexity">Complexity</SelectItem>
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
                        src={template.coverImage || "/placeholder.svg?height=200&width=400"}
                        alt={template.title}
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
                          <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                            <Copy className="h-4 w-4 mr-1" /> Duplicate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getCategoryColor(template.category)}>
                          {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                        </Badge>
                        <Badge className={getComplexityColor(template.complexity)}>
                          {template.complexity.charAt(0).toUpperCase() + template.complexity.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="text-white text-lg font-medium mb-2">{template.title}</h3>
                      <p className="text-purple-100/80 text-sm line-clamp-2 mb-3">{template.description}</p>
                      <div className="flex items-center text-sm text-purple-200/70">
                        <FileText className="h-4 w-4 mr-1" />
                        <span className="line-clamp-1">{template.fields.length} fields</span>
                      </div>
                    </CardContent>
                    <CardFooter className="px-5 py-4 border-t border-purple-500/20 flex justify-between">
                      <div className="flex items-center text-sm text-purple-200/70">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{new Date(template.createdAt).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-300 p-0 h-auto">
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">Need a custom form?</h2>
              <p className="mt-4 text-purple-100/80 max-w-2xl mx-auto">
                Create your own custom form or request help from our team to develop a form that meets your specific
                needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.href = 'https://home.metigan.com/forms'} className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300">
                  <Download className="h-4 w-4 mr-2" /> Create New Form
                </Button>
                {/* <Button variant="outline" className="border-purple-500/50 text-purple-100 hover:bg-purple-500/10">
                  Request Custom Form
                </Button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Form Preview Dialog */}
      <Dialog open={previewTemplate !== null} onOpenChange={(open) => !open && closePreview()}>
        <DialogContent className="max-w-4xl bg-black/90 border-purple-500/20 text-white">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">{previewTemplate?.title}</DialogTitle>
              <Button variant="ghost" size="icon" onClick={closePreview} className="h-8 w-8 rounded-full">
                <X className="h-4 w-4" />
              </Button>
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
                <span>Form Preview</span>
              </div>
              <div className="w-16"></div> {/* Spacer for alignment */}
            </div>

            <div className="bg-white p-4 h-[500px] overflow-auto">
              <div className="mx-auto max-w-[600px] bg-white p-6 rounded-lg shadow-sm">
                {previewTemplate?.coverImage && (
                  <div className="mb-6">
                    <Image
                      src={previewTemplate.coverImage || "/placeholder.svg"}
                      alt={previewTemplate.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                <h1 className="text-2xl font-bold text-gray-800 mb-4">{previewTemplate?.title}</h1>
                <p className="text-gray-600 mb-6">{previewTemplate?.description}</p>

                <div className="space-y-6">
                  {previewTemplate?.fields.map((field: any, index: any) => {
                    // Skip step fields in preview
                    if (field.type === "step") return null

                    // Skip conditional fields in preview for simplicity
                    if (field.conditional) return null

                    return (
                      <div key={field.id} className="space-y-2">
                        {field.type !== "heading" && (
                          <label className="block text-sm font-medium text-gray-700">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                        )}

                        {field.type === "heading" && (
                          <h2 className="text-xl font-semibold text-gray-800 mt-4">{field.label}</h2>
                        )}

                        {field.type === "text" && (
                          <input
                            type="text"
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "email" && (
                          <input
                            type="email"
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "textarea" && (
                          <textarea
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "select" && (
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          >
                            <option value="">{field.placeholder || "Select an option"}</option>
                            {field.options?.map((option: any, i: any) => (
                              <option key={i} value={option as any}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {field.type === "checkbox" && field.options && (
                          <div className="space-y-2">
                            {field.options.map((option: any, i: any) => (
                              <div key={i} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`${field.id}-${i}`}
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                  disabled
                                />
                                <label htmlFor={`${field.id}-${i}`} className="ml-2 block text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}

                        {field.type === "radio" && field.options && (
                          <div className="space-y-2">
                            {field.options.map((option: any, i: any) => (
                              <div key={i} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`${field.id}-${i}`}
                                  name={field.id as string}
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                                  disabled
                                />
                                <label htmlFor={`${field.id}-${i}`} className="ml-2 block text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}

                        {field.type === "date" && (
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "number" && (
                          <input
                            type="number"
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "phone" && (
                          <input
                            type="tel"
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "file" && (
                          <input
                            type="file"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled
                          />
                        )}

                        {field.type === "rating" && field.options && (
                          <div className="flex items-center space-x-1">
                            {field.options.map((_: any, i: Key | null | undefined) => (
                              <button key={i} className="text-gray-300 hover:text-yellow-400" disabled>
                                <Star className="h-6 w-6" />
                              </button>
                            ))}
                          </div>
                        )}

                        {field.type === "slider" && (
                          <input
                            type="range"
                            min={field.validation?.min || 0}
                            max={field.validation?.max || 10}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            disabled
                          />
                        )}

                        {field.helpText && <p className="mt-1 text-sm text-gray-500">{field.helpText}</p>}
                      </div>
                    )
                  })}

                  <div
                    className={`mt-8 flex ${previewTemplate?.buttonCustomization.position === "center" ? "justify-center" : previewTemplate?.buttonCustomization.position === "right" ? "justify-end" : "justify-start"}`}
                  >
                    <button
                      className={`px-4 py-2 ${previewTemplate?.buttonCustomization.fullWidth ? "w-full" : ""} ${previewTemplate?.buttonCustomization.size === "lg" ? "text-lg" : "text-base"} font-medium text-white bg-purple-600 ${previewTemplate?.buttonCustomization.rounded ? "rounded-full" : "rounded-md"} shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                      disabled
                    >
                      {previewTemplate?.buttonCustomization.text || "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-purple-200/70">
              <Badge className={previewTemplate ? getCategoryColor(previewTemplate.category) : ""}>
                {previewTemplate?.category.charAt(0).toUpperCase() + previewTemplate?.category.slice(1)}
              </Badge>
              <span className="mx-2">•</span>
              <Badge className={previewTemplate ? getComplexityColor(previewTemplate.complexity) : ""}>
                {previewTemplate?.complexity.charAt(0).toUpperCase() + previewTemplate?.complexity.slice(1)}
              </Badge>
              <span className="mx-2">•</span>
              <FileText className="h-4 w-4 mr-1" />
              <span>{previewTemplate?.fields.length} fields</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => (window.location.href = "https://home.metigan.com/forms")}
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300"
              >
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

