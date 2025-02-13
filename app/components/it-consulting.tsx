"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const consultingServices = [
  {
    title: "Business Strategy Development",
    description:
      "Unlocking Your Business Potential: We work with you to align your IT strategy with your overall business goals. We help you identify key performance indicators (KPIs), assess your current IT capabilities, and develop a roadmap for achieving your desired business outcomes.",
    strengths: [
      {
        title: "Strategic Alignment",
        description: "Ensure IT initiatives support overall business objectives",
      },
      {
        title: "KPI Identification",
        description: "Define measurable indicators of success",
      },
      {
        title: "Capability Assessment",
        description: "Evaluate current IT infrastructure and skills",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eB4OlQbkVM1UxiLXC2VA1xRgeAvoPU.png",
  },
  {
    title: "Technology Roadmap Planning & Execution",
    description:
      "Future-Proofing Your Business: We create a customized technology roadmap that guides your company's digital transformation. We evaluate emerging technologies, identify potential risks and challenges, and develop a phased implementation plan to ensure your business thrives in the future.",
    strengths: [
      {
        title: "Digital Transformation",
        description: "Guide your business through technological evolution",
      },
      {
        title: "Risk Assessment",
        description: "Identify and mitigate potential challenges",
      },
      {
        title: "Phased Implementation",
        description: "Develop a structured plan for technology adoption",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hWWx7MfK5jg2nYo7h5XGmU70GTgUvA.png",
  },
  {
    title: "Data Analysis and Decision-Making Support",
    description:
      "Data-Driven Decisions for Success: We help you unlock the power of your data. Our team leverages advanced analytics to uncover valuable insights, optimize your business processes, and identify new opportunities for growth. We empower you to make informed decisions based on data-driven evidence.",
    strengths: [
      {
        title: "Advanced Analytics",
        description: "Utilize cutting-edge tools to extract insights",
      },
      {
        title: "Process Optimization",
        description: "Streamline operations based on data analysis",
      },
      {
        title: "Growth Opportunity Identification",
        description: "Discover new avenues for business expansion",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NCLpi84GYWhdUGWtms2eoaatZOTCGV.png",
  },
]

export default function ITConsulting() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="it-consulting" className="py-24 relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M8KbRforV1gCy3zq5KBtX56fYtD3Fq.png"
          alt="Starry night sky background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">IT Consulting and Strategy</h2>
        <Carousel className="w-full max-w-6xl mx-auto" onSelect={setActiveIndex}>
          <CarouselContent>
            {consultingServices.map((service, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-800/90 border-gray-700 overflow-hidden h-[70vh] flex flex-col">
                  <div className="p-8 flex-grow overflow-auto">
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                      <div className="flex-1">
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="text-2xl font-bold text-white mb-4">{service.title}</CardTitle>
                          <CardDescription className="text-gray-400 text-lg">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                            Our Approach
                          </h3>
                          <div className="space-y-4">
                            {service.strengths.map((strength, idx) => (
                              <div key={idx} className="group">
                                <h4 className="text-pink-500 text-lg font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                                  {strength.title}
                                </h4>
                                <p className="text-gray-400">{strength.description}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                      {service.image && (
                        <div className="lg:w-[45%] flex-shrink-0">
                          <div className="sticky top-8">
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={`${service.title} visualization`}
                              width={800}
                              height={600}
                              className="rounded-lg object-contain w-full h-auto bg-white/90 p-4"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 space-x-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-pink-600 hover:bg-pink-700 text-white">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-y-0 bg-pink-600 hover:bg-pink-700 text-white">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

