import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dZa9aawTRb3zF9iEg8FgAfMng8BIrk.png"
          alt="Deep space nebula background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-32">
        <div className="max-w-3xl">
          <span className="inline-block text-white/90 text-lg mb-4">Software Development</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Technological innovation that transcends digital
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Create robust and future-proof software solutions customized to your business needs
          </p>
          <Button variant="default" size="lg" className="bg-[#c8ff00] hover:bg-[#b3e600] text-black font-semibold px-8">
            Contact us today
          </Button>
        </div>
      </div>
    </section>
  )
}

