"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navigateToTop = () => {
    router.push("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAboutUsClick = () => {
    router.push("/about")
    // Add a small delay to ensure the page transition is complete
    setTimeout(() => {
      const visionSection = document.querySelector("section")
      if (visionSection) {
        visionSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleCallUsNowClick = () => {
    router.push("/contact")
    // Add a small delay to ensure the page transition is complete
    setTimeout(() => {
      const firstSlide = document.querySelector("section")
      if (firstSlide) {
        firstSlide.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const navigateToSection = (sectionId: string) => {
    router.push("/")
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={navigateToTop} className="flex items-center bg-transparent border-none cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20(58)-mZibRQ3DsnjQ6LFSiFsepd2zzJs8jI.png"
              alt="Axilogy Logo"
              width={200}
              height={70}
              className="object-contain"
            />
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={navigateToTop}
              className="text-white hover:text-white/80 font-medium bg-transparent border-none cursor-pointer"
            >
              HOME
            </button>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger
                className="text-white hover:text-white/80 font-medium"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                SERVICES
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-gray-800 border-gray-700 p-1"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <DropdownMenuItem>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      navigateToSection("ai-services")
                    }}
                    className="text-white hover:text-black hover:bg-white w-full text-left p-2 rounded transition-colors duration-200"
                  >
                    AI Services
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      navigateToSection("software-development-services")
                    }}
                    className="text-white hover:text-black hover:bg-white w-full text-left p-2 rounded transition-colors duration-200"
                  >
                    Software Development
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      navigateToSection("it-consulting")
                    }}
                    className="text-white hover:text-black hover:bg-white w-full text-left p-2 rounded transition-colors duration-200"
                  >
                    IT Consulting
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      navigateToSection("case-studies")
                    }}
                    className="text-white hover:text-black hover:bg-white w-full text-left p-2 rounded transition-colors duration-200"
                  >
                    Case Studies
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => router.push("/product")}
              className="text-white hover:text-white/80 font-medium bg-transparent border-none cursor-pointer"
            >
              PRODUCT
            </button>
            <button
              onClick={handleAboutUsClick}
              className="text-white hover:text-white/80 font-medium bg-transparent border-none cursor-pointer"
            >
              ABOUT US
            </button>
            <Button
              variant="default"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6"
              onClick={handleCallUsNowClick}
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

