import { useEffect, useRef } from "react"

export function useSmoothScroll() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const sections = sectionsRef.current.filter((section): section is HTMLElement => section !== null)
    let currentSectionIndex = 0
    let isScrolling = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSectionIndex = sections.findIndex((section) => section === entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => observer.observe(section))

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (!isScrolling) {
        isScrolling = true
        setTimeout(() => {
          isScrolling = false
        }, 1000)
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
          currentSectionIndex++
        } else if (e.deltaY < 0 && currentSectionIndex > 0) {
          currentSectionIndex--
        }
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      observer.disconnect()
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return sectionsRef
}
