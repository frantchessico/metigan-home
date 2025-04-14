"use client"

import { MailCheck, ShoppingCart, Truck, Receipt, Headphones, KeyRound, MessageSquareHeart, UserPlus2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import Image from 'next/image';

export default function TransactionEmailPage() {
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
                            <span className="text-sm font-medium text-purple-200">Transactional Emails</span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
                        >
                            Send automatic emails
                            <br />
                            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                                personal and business transactions.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
                        >
                            Our smart automation platform empowers you to effortlessly create, schedule, and track personalized email
                            campaigns for both personal and professional needs — all in one place.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 1.2 }}
                            >
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
                                            {feature.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start">
                                                    <ChevronRight className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                                                    <span className="text-sm text-purple-100">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

};



const cards = [
    {
      icon: MailCheck,
      title: "Account Alerts",
      description: "Notify users about account creation, subscription cancellation, and card expiration.",
      benefits: ["New account confirmation", "Subscription cancellation notice", "Credit card expiration alert"]
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Notifications",
      description: "Recover sales by reminding users of their abandoned carts.",
      benefits: ["Personalized reminders", "Product image previews", "Discount incentives"]
    },
    {
      icon: Truck,
      title: "Event Notifications",
      description: "Keep customers informed with shipping and tracking updates.",
      benefits: ["Real-time delivery updates", "Tracking links", "Shipping status"]
    },
    {
      icon: Receipt,
      title: "Order Confirmations & Receipts",
      description: "Send confirmations and receipts after every transaction.",
      benefits: ["Purchase confirmation", "Invoice attachment", "Tax breakdown"]
    },
    {
      icon: Headphones,
      title: "Customer Service Replies",
      description: "Automate support responses to common inquiries.",
      benefits: ["Instant FAQ replies", "24/7 availability", "Ticket status updates"]
    },
    {
      icon: KeyRound,
      title: "Password Reminders or Resets",
      description: "Help users recover account access easily.",
      benefits: ["Secure reset links", "Timed one-time codes", "Friendly reminder templates"]
    },
    {
      icon: MessageSquareHeart,
      title: "Feedback Requests",
      description: "Gather insights through automated surveys.",
      benefits: ["Post-purchase surveys", "Rating prompts", "User feedback analytics"]
    },
    {
      icon: UserPlus2,
      title: "Welcome Emails",
      description: "Create a great first impression.",
      benefits: ["Warm greetings", "Next steps guidance", "Helpful resource links"]
    }
  ];