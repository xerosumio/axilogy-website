"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Navbar from "../components/navbar"
import { useSmoothScroll } from "../hooks/useSmoothScroll"

export default function AboutPage() {
  const sectionsRef = useSmoothScroll(4) // Updated to use 4 sections

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <main className="bg-gray-900">
      <Navbar />
      {/* Vision Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dZa9aawTRb3zF9iEg8FgAfMng8BIrk.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="space-y-6">
              <h1 className="text-8xl font-bold">
                <span className="text-white">OUR </span>
                <span className="text-pink-500">VISION</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                We envision a future where technology seamlessly integrates with human life, driving innovation and
                empowering individuals and businesses. We strive to be at the forefront of technological advancement,
                delivering cutting-edge solutions that address real-world challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="min-h-screen py-24 flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M8KbRforV1gCy3zq5KBtX56fYtD3Fq.png"
            alt="Starry night sky background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-12">Our Values</h2>
            <div className="grid gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We embrace innovation and seek out new opportunities to push the boundaries of technology.",
                },
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from project execution to client service.",
                },
                {
                  title: "Integrity",
                  description: "We conduct business with honesty, transparency, and ethical principles.",
                },
                {
                  title: "Collaboration",
                  description: "We foster strong partnerships with our clients and team members.",
                },
                {
                  title: "Customer Focus",
                  description: "We prioritize our clients' needs and strive to deliver exceptional value.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-pink-500 mb-2">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen py-24 flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M8KbRforV1gCy3zq5KBtX56fYtD3Fq.png"
            alt="Starry night sky background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Shape the way we work with our </span>
              <span className="text-pink-500">clients</span>
              <span className="text-white"> and delivering an outstanding user </span>
              <span className="text-pink-500">experience</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-2xl text-white/80">
                We've helped clients modernize their operations and boost productivity.
              </p>
              <p className="text-xl text-white/60">Empowering businesses with innovative technology solutions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section ref={(el) => (sectionsRef.current[3] = el)} className="relative z-10">
        {/* Footer component is now rendered in the layout */}
      </section>
    </main>
  )
}

