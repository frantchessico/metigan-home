"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, FlaskRoundIcon as Flask, Webhook, Clock, ChevronDown, ComputerIcon as Windows, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export  function EmailDashboard() {
  const emailPool = [
    {
      id: "1",
      from: "isabella@yahoo.com",
      subject: "Get Started",
      agent: "Yahoo Mail",
      platform: "Windows",
      timestamp: "Mar 08 07:21:45",
      status: "opened",
    },
    {
      id: "2",
      from: "john@gmail.com",
      subject: "Welcome to our platform",
      agent: "Gmail",
      platform: "Mac OS",
      timestamp: "Mar 08 07:21:42",
      status: "opened",
    },
    {
      id: "3",
      from: "support@company.com",
      subject: "Your account has been created",
      agent: "Outlook",
      platform: "Windows",
      timestamp: "Mar 08 07:20:15",
      status: "opened",
    },
    {
      id: "4",
      from: "newsletter@tech.com",
      subject: "Weekly Tech Updates",
      agent: "Apple Mail",
      platform: "iOS",
      timestamp: "Mar 08 07:19:30",
      status: "opened",
    },
  ]

  const [visibleEmails, setVisibleEmails] = useState<Array<(typeof emailPool)[0] & { key: string }>>([])
  const [emailCounter, setEmailCounter] = useState(0)

  const [httpResponses, setHttpResponses] = useState([
    { id: "b5dcb678-be15-4fa8-8085-8979fecafed2" },
    { id: "13359f77-466e-436d-9cb2-ff0b0c9a8af4" },
    { id: "c3be1838-b80e-457a-9fc5-3abf49c3b33e" },
    { id: "a08045a6-1274-4e16-ace1-a581df478ac1" },
  ])

  const addEmail = useCallback(() => {
    setEmailCounter((prevCounter) => {
      const emailIndex = prevCounter % emailPool.length
      const newEmail = {
        ...emailPool[emailIndex],
        key: `${emailPool[emailIndex].id}-${Date.now()}`, // Unique key for animation
      }

      setVisibleEmails((prev) => {
        // Keep only the last 2 emails
        const updated = [...prev, newEmail]
        if (updated.length > 2) {
          return updated.slice(-2)
        }
        return updated
      })

      return prevCounter + 1
    })
  }, []) // Remove emailCounter from dependencies

  useEffect(() => {
    // Initial email
    addEmail()

    // Add and remove emails at intervals
    const interval = setInterval(() => {
      addEmail()
    }, 3000)

    return () => clearInterval(interval)
  }, []) // Only run on mount

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Test Mode Panel */}
          <Card className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#0D2E14] text-[#4ADE80] hover:bg-[#0D2E14] font-medium">Delivered</Badge>
                  <span className="text-gray-300">delivered@resend.dev</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
                <Button variant="outline" className="bg-[#1A1A1A] border-[#333333] text-white hover:bg-[#252525]">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>

              <div className="font-mono text-sm space-y-2 text-gray-300 mb-8">
                {httpResponses.map((response, index) => (
                  <motion.div
                    key={response.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="text-green-400">HTTP 200:</span> {`{ "id": "${response.id}" }`}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1A1A1A] p-3 rounded-lg">
                  <Flask className="h-6 w-6 text-[#E2E8F0]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Test Mode</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Simulate events and experiment with our API without the risk of accidentally sending real emails to
                    real people.
                  </p>
                  <Button variant="link" className="text-[#3B82F6] p-0 h-auto hover:text-[#60A5FA] font-medium">
                    Learn more
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modular Webhooks Panel */}
          <Card className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="relative min-h-[300px]">
                {/* Timeline */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1E1E1E]"></div>

                {/* Email notifications */}
                <AnimatePresence mode="popLayout">
                  {visibleEmails.map((email, index) => (
                    <motion.div
                      key={email.key}
                      className="mb-12 pl-12 relative"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.5,
                      }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 bg-[#1D4ED8] p-2 rounded-md">
                        <Mail className="h-4 w-4 text-white" />
                      </div>

                      {/* Email card */}
                      <div className="flex justify-between mb-2">
                        <Badge className="bg-[#1E3A8A] text-[#60A5FA] hover:bg-[#1E3A8A] font-medium">Opened</Badge>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {email.timestamp}
                        </div>
                      </div>

                      <div className="grid gap-2 text-sm">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-gray-300 mr-1">from</span>
                          <span className="bg-[#1A1A1A] px-2 py-1 rounded text-white">{email.from}</span>
                          <span className="text-gray-300 mr-1">with subject</span>
                          <span className="bg-[#1A1A1A] px-2 py-1 rounded text-white">{email.subject}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-gray-300 mr-1">on agent</span>
                          <Badge className="bg-[#4C1D95] text-[#C4B5FD] hover:bg-[#4C1D95] font-medium">
                            {email.agent}
                          </Badge>
                          <span className="text-gray-300 mr-1">running on</span>
                          <Badge className="bg-[#1E3A8A] text-[#60A5FA] hover:bg-[#1E3A8A] font-medium">
                            <Windows className="h-3 w-3 mr-1" />
                            {email.platform}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex items-start space-x-4 mt-8">
                <div className="bg-[#1A1A1A] p-3 rounded-lg">
                  <Webhook className="h-6 w-6 text-[#E2E8F0]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Modular Webhooks</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Receive real-time notifications directly to your server. Every time an email is delivered, opened,
                    bounces, or a link is clicked.
                  </p>
                  <Button variant="link" className="text-[#3B82F6] p-0 h-auto hover:text-[#60A5FA] font-medium">
                    Learn more
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

