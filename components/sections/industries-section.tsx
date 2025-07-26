"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FlaskConical, Utensils, Syringe, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
  {
    name: "Cosmetics",
    description: "Packaging that enhances brand appeal and product integrity.",
    icon: Sparkles,
  },
  {
    name: "Pharma",
    description: "Secure and compliant packaging for pharmaceutical products.",
    icon: Syringe,
  },
  {
    name: "Food & Beverage",
    description: "Hygienic and safe packaging solutions for consumables.",
    icon: Utensils,
  },
  {
    name: "Chemicals",
    description: "Durable and resistant packaging for various chemical products.",
    icon: FlaskConical,
  },
]

export function IndustriesSection() {
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
    <section id="industries" ref={sectionRef} className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Industries We <span className="text-accent">Serve</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={industry.name}
              className={cn(
                "flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? `animate-scale-in delay-${index * 100}` : "opacity-0", // Changed to scale-in
              )}
            >
              <CardContent className="p-0 flex flex-col items-center">
                <industry.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
