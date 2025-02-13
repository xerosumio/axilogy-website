"use client"

import { useRef } from "react"
import Navbar from "./components/navbar"
import HeroCarousel from "./components/hero-carousel"
import AIServices from "./components/ai-services"
import SoftwareDevelopmentServices from "./components/software-development-services"
import CaseStudies from "./components/case-studies"
import ITConsulting from "./components/it-consulting"
import Footer from "./components/footer"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

export default function Home() {
  const sectionsRef = useSmoothScroll()

  return (
    <main className="min-h-screen bg-purple-950">
      <Navbar />
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <HeroCarousel />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <AIServices />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <SoftwareDevelopmentServices />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <CaseStudies />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <ITConsulting />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <Footer />
      </div>
    </main>
  )
}

