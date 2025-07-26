"use client"

import * as React from "react"
import { Leaf, Recycle, Factory } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const sustainabilityPoints = [
  {
    title: "Eco-Friendly Materials",
    description: "Utilizing recyclable and sustainable materials in our production.",
    icon: Leaf,
  },
  {
    title: "Reduced Waste",
    description: "Implementing efficient processes to minimize environmental impact.",
    icon: Recycle,
  },
  {
    title: "Responsible Manufacturing",
    description: "Adhering to ethical and environmentally conscious production methods.",
    icon: Factory,
  },
]

export function SustainabilitySection() {
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

  return (
    <section id="sustainability" ref={sectionRef} className="py-2 md:py-20 bg-white px-4 md:px-6">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Our Commitment to <span className="text-accent">Sustainability</span>
        </h2>
        <p
          className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto mb-12",
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0",
          )}
        >
          At ABG PRO PACK, we believe in responsible packaging. Our practices are designed to minimize environmental
          impact while delivering high-quality solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "flex flex-col items-center text-center p-6",
                isVisible ? `animate-scale-in delay-${index * 100 + 200}` : "opacity-0", // Changed to scale-in
              )}
            >
              <div className="bg-accent/10 rounded-full p-4 mb-4 inline-flex items-center justify-center shadow-md">
                <point.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
        {/* <h3
          className={cn(
            "text-2xl font-bold text-primary mt-16 mb-8",
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
          )}
        >
          Certifications & Recognitions
        </h3>
        <div
          className={cn(
            "mt-4 flex flex-wrap justify-center gap-6",
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0",
          )}
        >
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="ISO Certified Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="GMP Certified Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Recyclable Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div> */}
      </div>
    </section>
  )
}
