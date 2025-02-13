import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Building2, Palette, GitMerge } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Web Application Development",
    description: "Create powerful, scalable web applications tailored to your business needs.",
    icon: Code,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5jKHx9p0fDFdXYrgpkfrAHUppH8m1R.png",
  },
  {
    title: "Mobile App Development",
    description: "Build innovative mobile apps for iOS and Android platforms.",
    icon: Smartphone,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3CPqyY6Fx2lr3E8DnKT7OCqBsUtpKb.png",
  },
  {
    title: "Enterprise Software Solutions",
    description: "Develop custom enterprise-level software to streamline your operations.",
    icon: Building2,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4P3boGNPs2Qx2f49jFVguNJJRkUv1A.png",
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and engaging user interfaces for optimal user experience.",
    icon: Palette,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQkjcRPIADTLxaq7gJ23lfaSoXvYut.png",
  },
  {
    title: "Software Integration",
    description: "Seamlessly integrate various software systems to enhance productivity.",
    icon: GitMerge,
    backgroundImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-msJxMbehwkitb1Bx5Wu0F54BHx8J4Y.png",
  },
]

export default function SoftwareDevelopmentServices() {
  return (
    <section id="software-development-services" className="py-24 relative min-h-screen flex items-center">
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
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Software Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 relative overflow-hidden">
              {service.backgroundImage ? (
                <>
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px] z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={service.backgroundImage || "/placeholder.svg"}
                        alt={`${service.title} visualization`}
                        fill
                        className={`object-cover ${
                          service.title === "Mobile App Development"
                            ? "w-full scale-150"
                            : service.title === "Enterprise Software Solutions"
                              ? "w-full scale-110"
                              : service.title === "UI/UX Design"
                                ? "w-full scale-125"
                                : service.title === "Software Integration"
                                  ? "w-full scale-110"
                                  : "p-4"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="relative z-20">
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
              ) : (
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

