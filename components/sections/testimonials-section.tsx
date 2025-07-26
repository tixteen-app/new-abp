"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "ABG PRO PACK delivered exceptional quality tubes for our cosmetic line. Their attention to detail and quick turnaround were impressive.",
    author: "Priya Sharma",
    company: "Glamour Cosmetics",
  },
  {
    quote:
      "The custom labels from ABG PRO PACK truly elevated our product's shelf appeal. Professional service and outstanding results!",
    author: "Rajesh Kumar",
    company: "Spice Route Foods",
  },
  {
    quote:
      "Their pharmaceutical packaging meets all our stringent requirements. A reliable partner for our critical products.",
    author: "Dr. Anjali Singh",
    company: "MediCare Pharma",
  },
]

export function TestimonialsSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0)

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

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000) // Change testimonial every 6 seconds

    return () => {
      clearInterval(interval)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-10 md:py-15 bg-gray-50 px-4 md:px-6">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          What Our <span className="text-accent">Clients Say</span>
        </h2>
        <div
          className={cn(
            "relative max-w-3xl mx-auto min-h-[280px] md:min-h-[220px]", // Added min-height to prevent collapse
            isVisible ? "animate-scale-in delay-200" : "opacity-0", // Changed to scale-in
          )}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "absolute top-0 left-0 w-full p-8 shadow-xl transition-opacity duration-700 ease-in-out",
                index === currentTestimonialIndex ? "opacity-100" : "opacity-0", // Control opacity based on current index
                index === currentTestimonialIndex ? "bg-accent/10" : "bg-primary/5", // Apply background based on active state
              )}
              style={{ zIndex: index === currentTestimonialIndex ? 1 : 0 }}
            >
              <CardContent className="p-0">
                <Quote className="h-10 w-10 text-accent mb-4 mx-auto" />
                <p className="text-lg md:text-xl italic text-gray-800 mb-6">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div
          className={cn("mt-8 flex justify-center space-x-2", isVisible ? "animate-fade-in-up delay-400" : "opacity-0")}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full bg-primary transition-all duration-300",
                index === currentTestimonialIndex ? "w-6 bg-accent" : "bg-primary/30",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
