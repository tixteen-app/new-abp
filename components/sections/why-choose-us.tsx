"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Award, Clock, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const reasons = [
  {
    title: "Innovative Technology",
    description: "Leveraging cutting-edge machinery and processes for superior packaging.",
    icon: Lightbulb,
  },
  {
    title: "Premium Quality",
    description: "Adhering to stringent quality controls for flawless products.",
    icon: Award,
  },
  {
    title: "Quick Turnaround",
    description: "Efficient production cycles to meet your deadlines promptly.",
    icon: Clock,
  },
  {
    title: "Global Standards",
    description: "Manufacturing practices that comply with international benchmarks.",
    icon: Globe,
  },
]

export function WhyChooseUs() {
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
    <section id="why-choose-us" ref={sectionRef} className="py-16 md:py-24 bg-primary text-white px-4 md:px-6">
      <div className="container text-center">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-12", isVisible ? "animate-fade-in-up" : "opacity-0")}>
          Why Choose <span className="text-accent">ABG PRO PACK</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className={cn(
                "flex flex-col items-center p-6 text-center bg-white/10 border border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm",
                isVisible ? `animate-scale-in delay-${index * 100}` : "opacity-0", // Changed to scale-in
              )}
            >
              <CardContent className="p-0 flex flex-col items-center">
                <reason.icon className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
