"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useSmoothScroll } from "../hooks/useSmoothScroll"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionsRef = useSmoothScroll(3)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Thank you for your message. We'll get back to you soon!")
    event.currentTarget.reset()
  }

  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dZa9aawTRb3zF9iEg8FgAfMng8BIrk.png"
            alt="Deep space nebula background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center justify-center relative z-10"
        >
          <div className="container mx-auto px-4 py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
                Get in Touch with <span className="text-pink-500">Axilogy</span>
              </h1>
              <p className="text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto">
                We're here to answer your questions and discuss how we can help transform your business with
                cutting-edge AI and IT solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen flex items-center justify-center relative z-10"
        >
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <Phone className="w-6 h-6 mr-4 text-pink-500" />
                    <span>+852 1234 5678</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Mail className="w-6 h-6 mr-4 text-pink-500" />
                    <span>info@axilogy.com</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Office Hours</h2>
                <p className="text-white/80">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
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
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 bg-gray-800 text-white border-gray-700"
                    />
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
                  <Button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <div ref={(el) => (sectionsRef.current[2] = el)} className="relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  )
}

