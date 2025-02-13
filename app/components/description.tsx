import { Button } from "@/components/ui/button"

export default function Description() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-white/90 leading-relaxed">
              Software development is about identifying your business goals, knowing your pain points, and developing
              solutions that address your unique challenges.
            </p>
          </div>
          <div>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              We use artificial intelligence technology and other cutting-edge technologies to design, build, and evolve
              world-class digital end-to-end solutions for our clients. From human interfaces design to scalable AI
              platforms, our full-stack capabilities unleash better and more personalized experiences.
            </p>
            <Button variant="default" className="bg-[#c8ff00] hover:bg-[#b3e600] text-black font-semibold px-8">
              Let's connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

