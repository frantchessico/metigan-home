"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Toaster, toast } from "sonner"

export default function ContactSalesPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    interest: "pricing",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using fetch as requested in the prompt
      const response = await fetch("https://metigan-form-submissions-api-97eb0d2389d5.herokuapp.com/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formId: "67df3e0863400b1f850ecccc", // Assuming this is the form ID
          data: formState,
        }),
      })

      // Also implementing with axios as requested
      // const response = await axios.post("https://f.metigan.com/f/api/submissions", {
      //   formId: "contact-sales",
      //   data: formState,
      // })

      if (response.ok) {
        toast.success("Form submitted successfully!")
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      employees: "",
      interest: "pricing",
      message: "",
    })
    setIsSubmitted(false)
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
              <span className="text-sm font-medium text-purple-200">Sales Team</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Contact Our Sales Team
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Have questions about our platform or pricing? Our sales team is ready to assist you in finding the perfect
              solution for your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 md:p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-purple-100">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formState.firstName}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-purple-100">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formState.lastName}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-purple-100">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-purple-100">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formState.phone}
                            onChange={handleChange}
                            className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-purple-100">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Enter your company name"
                            value={formState.company}
                            onChange={handleChange}
                            required
                            className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employees" className="text-purple-100">
                            Company Size
                          </Label>
                          <Select
                            value={formState.employees}
                            onValueChange={(value) => handleSelectChange("employees", value)}
                          >
                            <SelectTrigger className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/80 border-purple-500/20">
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-purple-100">What are you interested in?</Label>
                        <RadioGroup
                          defaultValue="pricing"
                          className="flex flex-col space-y-2"
                          value={formState.interest}
                          onValueChange={(value: any) => handleSelectChange("interest", value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="pricing"
                              id="pricing"
                              className="border-purple-500/50 text-purple-500"
                            />
                            <Label htmlFor="pricing" className="text-purple-100">
                              Pricing Information
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="demo" id="demo" className="border-purple-500/50 text-purple-500" />
                            <Label htmlFor="demo" className="text-purple-100">
                              Product Demo
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="enterprise"
                              id="enterprise"
                              className="border-purple-500/50 text-purple-500"
                            />
                            <Label htmlFor="enterprise" className="text-purple-100">
                              Enterprise Solutions
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" className="border-purple-500/50 text-purple-500" />
                            <Label htmlFor="other" className="text-purple-100">
                              Other
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-purple-100">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your needs and how we can help"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          className="bg-black/30 border-purple-500/20 focus:border-purple-500/50 text-white placeholder:text-white/60 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-xs text-purple-200/70 text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="underline underline-offset-2">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline underline-offset-2">
                          Terms of Service
                        </a>
                        .
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="rounded-full bg-purple-500/20 p-3 mb-6">
                      <CheckCircle className="h-12 w-12 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
                    <p className="text-purple-100 text-center max-w-md mb-8">
                      Your message has been sent successfully. A member of our sales team will contact you within 24
                      hours.
                    </p>
                    <Button
                      onClick={resetForm}
                      className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact info and FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="space-y-8"
            >
              {/* Contact methods */}
              <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-white mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 rounded-full bg-purple-500/20 p-2 mr-4">
                      <Mail className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email Us</h4>
                      <p className="text-purple-100/80 text-sm">We'll respond within 24 hours</p>
                      <a href="mailto:sales@example.com" className="text-purple-300 hover:underline">
                        sales@metigan.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-purple-500/20">
                    <AccordionTrigger className="text-white hover:text-purple-300">
                      What pricing plans do you offer?
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100/80">
                      We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprise. Our
                      plans include Free, Pro ($16/month), and Business ($150/month) tiers with varying features and
                      limits.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-purple-500/20">
                    <AccordionTrigger className="text-white hover:text-purple-300">
                      Can I get a custom quote for my business?
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100/80">
                      Yes! For businesses with specific needs or high volume requirements, we offer custom pricing.
                      Contact our sales team to discuss your requirements and get a tailored quote.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-purple-500/20">
                    <AccordionTrigger className="text-white hover:text-purple-300">
                      Do you offer a free trial?
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100/80">
                      Yes, we offer a 14-day free trial of our Pro plan with no credit card required. You can explore
                      all features and decide if our platform is right for your business.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-purple-500/20">
                    <AccordionTrigger className="text-white hover:text-purple-300">
                      How long does implementation take?
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100/80">
                      Most customers can get started immediately with our self-service options. For enterprise customers
                      requiring custom implementation, our team typically completes setup within 1-2 weeks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          </div>
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

