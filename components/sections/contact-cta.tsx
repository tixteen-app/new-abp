"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Rocket } from "lucide-react" // Import new icons
import { Card, CardContent } from "@/components/ui/card" // Import Card components

export function ContactCTA() {
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
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-100 relative overflow-hidden px-4 md:px-6" // Changed background to light gray
    >
      {/* Subtle background pattern/overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 z-0"></div>

      <div className="container relative z-10 flex justify-center">
        <Card
          className={cn(
            "w-full max-w-4xl bg-primary text-white p-8 md:p-12 rounded-lg shadow-2xl text-center border-none",
            isVisible ? "animate-scale-in" : "opacity-0", // Apply scale-in animation to the card
          )}
        >
          <CardContent className="p-0 flex flex-col items-center">
            <Rocket
              className={cn("h-16 w-16 text-accent mb-6", isVisible ? "animate-fade-in-up delay-100" : "opacity-0")}
            />{" "}
            {/* Added a prominent icon */}
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
              )}
            >
              Ready to Elevate Your Packaging?
            </h2>
            <p
              className={cn(
                "text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200",
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0",
              )}
            >
              Connect with us today to discuss your unique packaging needs and get a personalized quote.
            </p>
            <Button
              size="lg"
              variant="accent"
              className={cn(
                "px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300",
                isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
              )}
            >
              Get a Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
