"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const clientLogos = [
  { src: "/dabur.png", alt: "Dabur Logo" },
  { src: "/dalmia.png", alt: "Dalmia Logo" },
  { src: "/devyani.png", alt: "Devyani Logo" },
  { src: "/fresca.png", alt: "Fresca Logo" },
  { src: "/kali mehandi.png", alt: "Kali Mehandi Logo" },
  { src: "/kaveri.png", alt: "Kaveri Logo" },
  { src: "/Lahori.png", alt: "Lahori Logo" },
  { src: "/neha.png", alt: "Neha Logo" },
  { src: "/reliance.png", alt: "Reliance Logo" },
  { src: "/triveni.png", alt: "Triveni Logo" },
  { src: "/zydus.png", alt: "Zydus Logo" }
]


export function ClientsSection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [hoveredLogo, setHoveredLogo] = React.useState<number | null>(null)

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section id="clients" ref={elementRef} className="py-16 md:py-24 bg-gray-50 px-4 md:px-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container text-center relative z-10">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-bounce-in" : "opacity-0",
          )}
        >
          Our Valued <span className="text-accent gradient-text">Clients</span>
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-8 max-w-2xl mx-auto",
          isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
        )}>
          Trusted by leading brands across industries for our innovative packaging solutions
        </p>
        <div
          className={cn(
            "relative w-full overflow-hidden py-4",
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0",
          )}
        >
          <div className="flex whitespace-nowrap animate-scroll-x hover:animation-play-state-paused">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center h-24 w-48 flex-shrink-0 mx-4 p-2 bg-white rounded-lg shadow-md transition-all duration-500 hover-lift group"
                onMouseEnter={() => setHoveredLogo(index)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className={cn(
                    "object-contain max-h-full max-w-full transition-all duration-300 relative z-10",
                    hoveredLogo === index ? "scale-110" : "scale-100"
                  )}
                />
                {hoveredLogo === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16",
          isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
        )}>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover-lift">
            <div className="text-3xl font-bold text-primary mb-2 animate-pulse-slow">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover-lift">
            <div className="text-3xl font-bold text-accent mb-2 animate-pulse-slow">1000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover-lift">
            <div className="text-3xl font-bold text-primary mb-2 animate-pulse-slow">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
