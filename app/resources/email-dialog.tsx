"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { sendResourcerEmail } from "../email/metigan"


interface EmailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  resourceId: string
  resourceTitle: string
  onSuccess: () => void
}

export function EmailDialog({ open, onOpenChange, resourceId, resourceTitle, onSuccess }: EmailDialogProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendResourcerEmail(email, resourceTitle, resourceId)

      if ('success' in result && result.success === true) {
        // Store email in localStorage
        localStorage.setItem("userEmail", email)

        // Show success notification
        toast.success("Resource will be sent to your email shortly!")

        // Close dialog and update parent component
        onOpenChange(false)
        onSuccess()
      } else {
        const errorMessage = 'message' in result ? result.message : 'Failed to send email. Please try again.'
        toast.error(errorMessage)
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle>Receive Resource by Email</DialogTitle>
          <DialogDescription className="text-purple-100/80">
            Enter your email address to receive "{resourceTitle}" in your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-purple-100">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/60 border-purple-500/30 text-white"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send to my email"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

