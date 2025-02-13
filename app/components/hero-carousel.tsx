"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Triangle } from "lucide-react";
import { useRouter } from "next/navigation";

const AutoChangingText = () => {
  const [text, setText] = React.useState("TRADITIONAL");
  const [animationClass, setAnimationClass] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("rotate-up-out");
      setTimeout(() => {
        setText((prevText) =>
          prevText === "TRADITIONAL" ? "AI" : "TRADITIONAL"
        );
        setAnimationClass("rotate-up-in");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-[300px]">
      <span className={`inline-block ${animationClass}`}>{text}</span>
    </span>
  );
};

const slides = [
  {
    title: "GENERATOR",
    description: "The future of business is AI. Are you ready?",
    buttons: ["Contact us today", "Learn more"],
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Comprehensive solutions tailored to your unique business requirements",
    buttons: ["Call us today", "Explore services", "View case studies"],
  },
  {
    title: "IT & BIZ ADVISORY",
    description:
      "Expert guidance to optimize your technology infrastructure and strategy",
    buttons: ["Schedule a consultation", "Our approach"],
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    const aiServicesSection = document.getElementById("ai-services");
    if (aiServicesSection) {
      aiServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreServices = () => {
    const softwareServicesSection = document.getElementById(
      "software-development-services"
    );
    if (softwareServicesSection) {
      softwareServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = (buttonText: string) => {
    if (buttonText === "Learn more") {
      handleLearnMore();
    } else if (buttonText === "Explore services") {
      handleExploreServices();
    } else if (buttonText === "View case studies") {
      const caseStudiesSection = document.getElementById("case-studies");
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (buttonText === "Our approach") {
      const itConsultingSection = document.getElementById("it-consulting");
      if (itConsultingSection) {
        itConsultingSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (
      buttonText === "Contact us today" ||
      buttonText === "Call us today" ||
      buttonText === "Schedule a consultation"
    ) {
      router.push("/contact");
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center">
      <style jsx>{`
        ${rotateUpKeyframes}
        ${rotateUpStyles}
        ${slideInKeyframes}
      `}</style>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dZa9aawTRb3zF9iEg8FgAfMng8BIrk.png"
          alt="Deep space nebula background"
          fill
          className="object-cover opacity-70 mix-blend-overlay"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-32">
        <Carousel
          className="w-full max-w-6xl mx-auto px-4 md:px-20"
          index={activeIndex}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="max-w-3xl">
                  <h2 className="text-white/75 text-xl mb-4 tracking-wider">
                    THE FUTURE OF TECHNOLOGY IS HERE WITH AXILOGY'S
                  </h2>
                  <h1 className="mf text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-wider">
                    {index === 0 ? <AutoChangingText /> : null} {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mp">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8 btn-text">
                    {slide.buttons.map((buttonText, buttonIndex) => (
                      <Button
                        key={buttonIndex}
                        size="lg"
                        className={`bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 ${
                          index === activeIndex ? "slide-in" : ""
                        }`}
                        style={{ animationDelay: `${buttonIndex * 0.1}s` }}
                        onClick={() => handleButtonClick(buttonText)}
                      >
                        {buttonText}
                      </Button>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0  bg-pink-600 hover:bg-pink-700 text-white">
            <Triangle className="h-4 w-4 rotate-[-90deg]" />
          </CarouselPrevious>
          <CarouselNext className="right-0  bg-pink-600 hover:bg-pink-700 text-white">
            <Triangle className="h-4 w-4 rotate-90" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}

const rotateUpKeyframes = `
  @keyframes rotateUp {
    0% { transform: rotateX(0); opacity: 1; }
    50% { transform: rotateX(-90deg); opacity: 0; }
    100% { transform: rotateX(0); opacity: 1; }
  }
`;

const rotateUpStyles = `
  .rotate-up-out {
    animation: rotateUp 1s ease-in-out forwards;
    display: inline-block;
  }
  .rotate-up-in {
    animation: rotateUp 1s ease-in-out reverse forwards;
    display: inline-block;
  }
`;

const slideInKeyframes = `
  @keyframes slideIn {
    0% { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  .slide-in {
    animation: slideIn 0.5s ease-out forwards;
  }
`;
