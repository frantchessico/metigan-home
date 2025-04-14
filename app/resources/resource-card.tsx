"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { EmailDialog } from "./email-dialog"

import { Check } from "lucide-react"
import { sendResourcerEmail } from "../email/metigan"

interface ResourceCardProps {
  id: string
  title: string
  description: string
  category: string
  type: string
  readTime: string
  icon: React.ElementType
  isNew?: boolean
}

export function ResourceCard({
  id,
  title,
  description,
  category,
  type,
  readTime,
  icon: Icon,
  isNew,
}: ResourceCardProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Check if user already has an email stored
  useEffect(() => {
    console.log(id)
    const storedEmail = localStorage.getItem("userEmail")
    // Check if this specific resource was already sent to this email
    const sentResources = JSON.parse(localStorage.getItem("sentResources") || "[]")

    if (sentResources.includes(id)) {
      setIsSent(true)
    }
  }, [id])

  const handleReceiveClick = async () => {
    const storedEmail = localStorage.getItem("userEmail")

    if (storedEmail) {
      // If email exists in localStorage, send directly without showing dialog
      setIsSubmitting(true)

      try {
        const result = await sendResourcerEmail(storedEmail, title, id)

        if (result.success) {
          // Store that this resource was sent
          const sentResources = JSON.parse(localStorage.getItem("sentResources") || "[]")
          if (!sentResources.includes(id)) {
            sentResources.push(id)
            localStorage.setItem("sentResources", JSON.stringify(sentResources))
          }

          setIsSent(true)
          toast.success(`Resource will be sent to ${storedEmail}`)
        } else {
          toast.error("Failed to send email. Please try again.")
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // If no email in localStorage, show dialog
      setShowDialog(true)
    }
  }

  const handleDialogSuccess = () => {
    // Store that this resource was sent
    const sentResources = JSON.parse(localStorage.getItem("sentResources") || "[]")
    if (!sentResources.includes(id)) {
      sentResources.push(id)
      localStorage.setItem("sentResources", JSON.stringify(sentResources))
    }

    setIsSent(true)
  }

  return (
    <>
      <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30 mb-2">{category}</Badge>
            {isNew && <Badge className="bg-green-500/20 text-green-200 border-green-500/30">New</Badge>}
          </div>
          <CardTitle className="text-white text-xl">{title}</CardTitle>
          <CardDescription className="text-purple-100/80 mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex items-center text-sm text-purple-200/70">
            <Icon className="h-4 w-4 mr-2" />
            <span>{type}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className={`${
              isSent
                ? "text-green-300 hover:text-green-200 hover:bg-green-500/10"
                : "text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
            } w-full`}
            onClick={handleReceiveClick}
            disabled={isSubmitting || isSent}
          >
            {isSent ? (
              <>
                <Check className="h-4 w-4 mr-2" /> Sent to your email
              </>
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              "Receive in your email"
            )}
          </Button>
        </CardFooter>
      </Card>

      <EmailDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        resourceId={id}
        resourceTitle={title}
        onSuccess={handleDialogSuccess}
      />
    </>
  )
}

