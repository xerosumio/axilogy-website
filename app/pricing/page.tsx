"use client"
import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  CheckCircle2,
  XCircle,
  CreditCard,
  InfinityIcon,
  Box,
  Server,
  Globe,
  Shield,
  Cpu,
  MemoryStickIcon as Memory,
  HardDrive,
  Monitor,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useSmoothScroll } from "../hooks/useSmoothScroll"
import Image from "next/image"
import { useState } from "react"

export default function PricingPage() {
  const sectionsRef = useSmoothScroll()
  const [activeSlide, setActiveSlide] = useState(0)

  const specs = [
    {
      category: "Processor",
      icon: Cpu,
      items: [
        { label: "Brand", value: "IBM" },
        { label: "Type", value: "Celeron D" },
        { label: "Speed", value: "3.4 GHz" },
        { label: "Cores", value: "4" },
        { label: "Socket", value: "BGA 413" },
      ],
    },
    {
      category: "Memory",
      icon: Memory,
      items: [
        { label: "RAM Size", value: "8 GB" },
        { label: "Technology", value: "DDR4" },
        { label: "Type", value: "SODIMM" },
        { label: "Max Supported", value: "8 GB" },
      ],
    },
    {
      category: "Storage",
      icon: HardDrive,
      items: [
        { label: "Capacity", value: "256 GB" },
        { label: "Type", value: "SSD" },
        { label: "Interface", value: "Solid State" },
      ],
    },
    {
      category: "Display & Graphics",
      icon: Monitor,
      items: [
        { label: "Graphics", value: "Intel Integrated" },
        { label: "Resolution", value: "1920 x 1080" },
        { label: "HDMI Ports", value: "1" },
      ],
    },
  ]

  const features = [
    { name: "On-premises deployment", cuby: true, chatgpt: false, gemini: false },
    { name: "Offline capability", cuby: true, chatgpt: false, gemini: false },
    { name: "Data privacy", cuby: true, chatgpt: false, gemini: false },
    { name: "Customizable model", cuby: true, chatgpt: false, gemini: false },
    { name: "No internet required", cuby: true, chatgpt: false, gemini: false },
    { name: "Text generation", cuby: true, chatgpt: true, gemini: true },
    { name: "Image generation", cuby: true, chatgpt: true, gemini: true },
    { name: "Code generation", cuby: true, chatgpt: true, gemini: true },
    { name: "Data analysis", cuby: true, chatgpt: true, gemini: true },
    { name: "API access", cuby: true, chatgpt: true, gemini: true },
    { name: "Web search integration", cuby: true, chatgpt: true, gemini: true },
    { name: "Regular updates", cuby: true, chatgpt: true, gemini: true },
  ]

  return (
    <main className="bg-gray-900 relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QGHcWGjNR7LqcUVtu2MrF2fjDW7UVm.png"
          alt="Carbon fiber background with red accents"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center justify-center py-24 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              CUBY<span className="text-pink-500">AI</span> Pricing
            </h1>
          </motion.div>

          <Carousel className="w-full" setApi={undefined} onSelect={setActiveSlide} index={activeSlide}>
            <CarouselContent>
              {/* Pricing Slide */}
              <CarouselItem>
                <div className="flex justify-center">
                  <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 max-w-4xl w-full">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-4">CUBYAI Enterprise Package</h2>
                        <div className="flex items-center mb-6">
                          <span className="text-4xl font-bold text-pink-500">20,000 HKD</span>
                          <span className="text-lg text-white/70 ml-2">one-time</span>
                        </div>
                        <ul className="text-white/80 text-base mb-6 space-y-2">
                          <li className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>One-time payment</span>
                          </li>
                          <li className="flex items-center">
                            <Server className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>On-premises deployment</span>
                          </li>
                          <li className="flex items-center">
                            <Shield className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>Data privacy & control</span>
                          </li>
                          <li className="flex items-center">
                            <Box className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>All CUBYAI features</span>
                          </li>
                          <li className="flex items-center">
                            <InfinityIcon className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>Unlimited usage</span>
                          </li>
                          <li className="flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
                            <span>Web search integration</span>
                          </li>
                        </ul>
                        <div className="text-center md:text-left">
                          <Button
                            size="lg"
                            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 text-base rounded-full w-full md:w-auto"
                          >
                            Get Started with CUBYAI
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-[300px]">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EHX4K1ObhhAmGIK8sVpK3QVfpGq69z.png"
                            alt="CUBYAI Mini PC and packaging"
                            width={500}
                            height={500}
                            className="rounded-lg"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Technical Specifications Slide */}
              <CarouselItem>
                <div className="flex justify-center">
                  <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {specs.map((section, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                            <section.icon className="h-6 w-6 text-pink-500" />
                            <h3 className="text-lg font-semibold text-white">{section.category}</h3>
                          </div>
                          <div className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex justify-between text-sm">
                                <span className="text-gray-400">{item.label}</span>
                                <span className="text-white font-medium">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-sm text-gray-400">
                      <p>Package Dimensions: 16 x 16 x 10.5 cm</p>
                      <p>Weight: 1.1 kg</p>
                      <p>Operating System: Windows</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <div className="flex justify-center mt-4 space-x-4">
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

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="min-h-screen flex items-center justify-center py-12 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Feature Comparison</h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-700">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-800/90 backdrop-blur-sm">
                      <TableHead className="py-2 px-4 text-left text-[10px] font-medium text-white uppercase tracking-wider">
                        Feature
                      </TableHead>
                      <TableHead className="py-2 px-4 text-center text-[10px] font-medium text-white uppercase tracking-wider">
                        CUBYAI (OLAMA)
                      </TableHead>
                      <TableHead className="py-2 px-4 text-center text-[10px] font-medium text-white uppercase tracking-wider">
                        ChatGPT (Paid)
                      </TableHead>
                      <TableHead className="py-2 px-4 text-center text-[10px] font-medium text-white uppercase tracking-wider">
                        Google Gemini (Paid)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((feature, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-gray-800/80" : "bg-gray-900/80"}>
                        <TableCell className="py-2 px-4 text-xs font-medium text-white">{feature.name}</TableCell>
                        <TableCell className="py-2 px-4 text-center">
                          {feature.cuby ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                          )}
                        </TableCell>
                        <TableCell className="py-2 px-4 text-center">
                          {feature.chatgpt ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                          )}
                        </TableCell>
                        <TableCell className="py-2 px-4 text-center">
                          {feature.gemini ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen flex items-center justify-center py-24 relative z-10"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg border border-gray-700 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose CUBYAI?</h2>
            <p className="text-white/80 text-lg mb-6">
              CUBYAI offers unparalleled privacy and control with its on-premises deployment, making it the ideal choice
              for businesses that prioritize data security and customization.
            </p>
            <p className="text-white/80 text-lg mb-6">
              With our one-time pricing model, you get full access to all features without any recurring costs, allowing
              you to leverage AI technology without straining your budget.
            </p>
            <p className="text-white/80 text-lg mb-8 font-semibold">
              Powered by NATON LAB, CUBYAI brings you state-of-the-art AI capabilities tailored for enterprise needs.
            </p>
            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 text-lg rounded-full"
            >
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

