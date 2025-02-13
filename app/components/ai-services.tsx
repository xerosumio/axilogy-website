import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, TrendingUp, Brain, Lightbulb } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis for object detection, facial recognition, and more.",
    icon: Eye,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y8XDMaN10VSgzQBNvFztDSXG5MsJqg.png",
  },
  {
    title: "Predictive Analytics",
    description: "Leverage historical data to forecast trends and make data-driven decisions.",
    icon: TrendingUp,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VklLFrRj2aTRW2613KWFCMDg4hZH3K.png",
  },
  {
    title: "Machine Learning Consulting",
    description: "Expert guidance on implementing ML solutions tailored to your business needs.",
    icon: Brain,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TbTwbAPdQPLSeeFIFn24pR47Lze35U.png",
  },
  {
    title: "AI Strategy and Roadmap",
    description: "Develop a comprehensive plan to integrate AI into your business processes.",
    icon: Lightbulb,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LtQsMGq68mpM0Qu6FzT465F36tA1Ex.png",
  },
]

export default function AIServices() {
  return (
    <section id="ai-services" className="py-24 relative min-h-screen flex items-center">
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
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-gray-700 relative overflow-hidden ${
                service.backgroundImage ? "min-h-[400px]" : ""
              }`}
            >
              {service.backgroundImage && (
                <>
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px] z-10" />
                    <Image
                      src={service.backgroundImage || "/placeholder.svg"}
                      alt={`${service.title} background`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <CardHeader>
                      <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">{service.description}</CardDescription>
                    </CardContent>
                  </div>
                </>
              )}
              {!service.backgroundImage && (
                <>
                  <CardHeader>
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

