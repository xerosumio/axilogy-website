"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Server,
  FileText,
  ImageIcon,
  Zap,
  Shield,
  DollarSign,
} from "lucide-react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useRouter } from "next/navigation";

export default function CubyProductPage() {
  const sectionsRef = useSmoothScroll();
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
    // Add a small delay to ensure the page transition is complete
    setTimeout(() => {
      const firstSlide = document.querySelector("section");
      if (firstSlide) {
        firstSlide.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gr27tj1DZWVH2rZvsrSMEo5kQfXFKf.png"
            alt="CUBY AI Mini PC Setup"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                CUBY<span className="text-pink-500">AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                A powerful, in-house AI solution developed by Naton Lab,
                leveraging the open-source generative AI model, Experience the
                future of decentralized AI computing.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-full"
                  onClick={() => {
                    const featuresSection =
                      document.getElementById("key-features");
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-pink-600 font-semibold px-8 py-6 text-lg rounded-full"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        id="key-features"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24 relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QGHcWGjNR7LqcUVtu2MrF2fjDW7UVm.png"
            alt="Carbon fiber background with red accents"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Decentralized AI",
                description:
                  "Runs on a compact mini-PC, allowing complete control over AI operations and data security.",
                icon: Server,
              },
              {
                title: "Text Generation",
                description:
                  "Create high-quality content, such as articles, marketing copy, and creative writing.",
                icon: FileText,
              },
              {
                title: "Data Analysis",
                description:
                  "Analyze and extract key information from documents, improving efficiency and accuracy.",
                icon: Zap,
              },
              {
                title: "Image Generation",
                description:
                  "Create simple images and visuals to support content marketing and design needs.",
                icon: ImageIcon,
              },
              {
                title: "Easy-to-Use",
                description:
                  "Designed to be user-friendly and easy to integrate into existing business workflows.",
                icon: Zap,
              },
              {
                title: "Scalable and Customizable",
                description:
                  "Easily scaled to meet evolving needs and customized to specific requirements.",
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/80 border-gray-700">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-pink-500 mb-4" />
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 relative overflow-hidden bg-gray-800 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QGHcWGjNR7LqcUVtu2MrF2fjDW7UVm.png"
            alt="Carbon fiber background with red accents"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Productivity",
                description:
                  "Automate tasks, streamline workflows, and increase efficiency.",
                icon: Zap,
              },
              {
                title: "Increased Creativity",
                description:
                  "Unlock new creative possibilities with AI-powered content generation.",
                icon: ImageIcon,
              },
              {
                title: "Improved Data Security",
                description:
                  "Protect sensitive data and maintain full control over your information.",
                icon: Shield,
              },
              {
                title: "Offline Capability",
                description:
                  "Operate completely offline without internet dependency, ensuring maximum data privacy and security.",
                icon: Shield,
              },
              {
                title: "Cost-Effectiveness",
                description:
                  "Eliminate the need for expensive cloud subscriptions and reduce operational expenses.",
                icon: DollarSign,
              },
              {
                title: "Competitive Advantage",
                description:
                  "Gain a competitive edge by leveraging the power of AI within your own infrastructure.",
                icon: Zap,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/80 border-gray-700">
                  <CardHeader>
                    <benefit.icon className="h-8 w-8 text-pink-500 mb-4" />
                    <CardTitle className="text-xl font-semibold text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24 relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QGHcWGjNR7LqcUVtu2MrF2fjDW7UVm.png"
            alt="Carbon fiber background with red accents"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Empower Your Business with AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            CubyAI empowers businesses to harness the power of AI while
            maintaining data security and control. It's a valuable tool for
            companies looking to enhance their operations, improve efficiency,
            and unlock new opportunities in the age of AI.
          </p>
          <Button
            size="lg"
            className="btn-width bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-full"
            onClick={handleContactClick}
          >
            Contact Us for More Information
          </Button>
        </div>
      </section>
    </main>
  );
}
