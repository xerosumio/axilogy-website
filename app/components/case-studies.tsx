"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    title: "Inventory Management - Mobile Web App",
    description:
      "This project involved developing a custom web application to optimize inventory management for a manufacturing company. By leveraging web technologies, we created a solution that provides real-time inventory visibility, automates order fulfillment processes, and generates valuable data-driven insights.",
    strengths: [
      {
        title: "Real-Time Inventory Tracking",
        description: "Enabled real-time visibility into inventory levels across the supply chain",
      },
      {
        title: "Automate Order Fulfillment",
        description: "Streamlined order processing and fulfillment through automated workflow",
      },
      {
        title: "Data-Driven Insights",
        description: "Provided valuable insights into inventory trends and demand forecasting",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x18Id4FCEZLgl2NGs8BfDI45RDlMjU.png",
  },
  {
    title: "Web Development Excellence",
    description:
      "Our team of web professionals possesses over a decade of experience in creating highly effective enterprise solutions for our clients.",
    strengths: [
      {
        title: "Custom Website App Development",
        description: "Building robust and scalable web applications tailored to specific business needs.",
      },
      {
        title: "UI/UX Design",
        description: "Designing intuitive and user-friendly interfaces that enhance user experience.",
      },
      {
        title: "Enterprise-Level AI Integration",
        description:
          "Integrating AI and machine learning capabilities into web applications to enhance functionality and user experience.",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGSIaXwp2tEo426jptPo16jRya5vyB.png",
  },
  {
    title: "AI-Powered Invoice Data Extraction",
    description:
      "This project involved developing an AI-powered solution to streamline invoice processing for our clients. We created a web application that utilizes Optical Character Recognition (OCR) to accurately extract key data from invoices, such as invoice numbers, dates, and amounts.",
    strengths: [
      {
        title: "OCR",
        description: "Accurately extract text from invoices (PDFs and Images)",
      },
      {
        title: "Natural Language Processing",
        description: "Analyzes extracted text to identify and extract relevant data fields.",
      },
      {
        title: "Machine Learning",
        description:
          "Trains models to recognize and classify different invoice formats, ensuring high accuracy and adaptability",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uCqYaqtM79B4EdaktOeDGyh2ibF7ST.png",
  },
  {
    title: "AI-Powered Sign Verification",
    description:
      "We developed an AI-powered web application to automate the process of verifying signage on floor plans for a building signage company. Our solution significantly reduced manual effort and improved accuracy",
    strengths: [
      {
        title: "Automated AI Shape Detection",
        description: "Accurately identified and located circular markers on floor plans.",
      },
      {
        title: "Advanced OCR",
        description: "Extracted sign numbers and labels from within the detected circles.",
      },
      {
        title: "Data Verification and Reporting",
        description: "Compared extracted data with the provided sign list and generated detailed reports.",
      },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oJ1FOd2MtZZUWxn8TfZxYbyQmHAfJ1.png",
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="case-studies" className="py-24 relative min-h-screen flex items-center">
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
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Case Studies</h2>
        <Carousel className="w-full max-w-6xl mx-auto" onSelect={(index) => setActiveIndex(index)}>
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-800/90 border-gray-700 overflow-hidden h-[70vh] flex flex-col">
                  <div className="p-8 flex-grow overflow-auto">
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                      <div className="flex-1">
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="text-2xl font-bold text-white mb-4">{study.title}</CardTitle>
                          <CardDescription className="text-gray-400 text-lg">{study.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                            Our Strength
                          </h3>
                          <div className="space-y-4">
                            {study.strengths.map((strength, idx) => (
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
                      {study.image && (
                        <div className="lg:w-[45%] flex-shrink-0">
                          <div className="sticky top-8">
                            <Image
                              src={study.image || "/placeholder.svg"}
                              alt={`Case study visualization for ${study.title}`}
                              width={800}
                              height={600}
                              className="rounded-lg object-contain w-full h-auto"
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

