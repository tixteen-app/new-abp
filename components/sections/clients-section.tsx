"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section id="clients" ref={sectionRef} className="py-16 md:py-24 bg-gray-50 px-4 md:px-6 overflow-hidden">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Our Valued <span className="text-accent">Clients</span>
        </h2>
        <div
          className={cn(
            "relative w-full overflow-hidden py-4",
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0",
          )}
        >
          <div className="flex whitespace-nowrap animate-scroll-x hover:animation-play-state-paused">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center h-24 w-48 flex-shrink-0 mx-4 p-2 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
