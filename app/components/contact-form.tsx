"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white">
          Name
        </Label>
        <Input id="name" name="name" required className="mt-1 bg-gray-800 text-white border-gray-700" />
      </div>
      <div>
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input id="email" name="email" type="email" required className="mt-1 bg-gray-800 text-white border-gray-700" />
      </div>
      <div>
        <Label htmlFor="message" className="text-white">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          className="mt-1 bg-gray-800 text-white border-gray-700"
          rows={5}
        />
      </div>
      <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

