"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const heroContent = [
  {
    imageSrc: "/placeholder.svg?height=600&width=800",
    alt: "Modern Packaging Factory",
    title: "Endless <span class='text-accent'>Capabilities</span>",
    description: "Delivering innovative packaging solutions to brands.",
  },
  {
    imageSrc: "/placeholder.svg?height=600&width=800",
    alt: "Innovative Packaging Design",
    title: "Innovate Your <span class='text-accent'>Brand</span>",
    description: "Transforming ideas into impactful packaging designs.",
  },
  {
    imageSrc: "/placeholder.svg?height=600&width=800",
    alt: "Sustainable Packaging Materials",
    title: "Sustainable <span class='text-accent'>Solutions</span>",
    description: "Committed to eco-friendly practices for a greener future.",
  },
  {
    imageSrc: "/placeholder.svg?height=600&width=800",
    alt: "Cosmetic Tube Manufacturing",
    title: "Precision in <span class='text-accent'>Cosmetics</span>",
    description: "High-quality tubes for beauty and personal care.",
  },
  {
    imageSrc: "/placeholder.svg?height=600&width=800",
    alt: "Pharmaceutical Packaging Production",
    title: "Secure <span class='text-accent'>Pharma</span> Packaging",
    description: "Ensuring safety and compliance for critical products.",
  },
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const [parallaxOffset, setParallaxOffset] = React.useState(0)
  const [textKey, setTextKey] = React.useState(0) // Key to force re-render for text animation

  React.useEffect(() => {
    setIsVisible(true) // Hero section is visible on mount

    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3) // Adjust multiplier for desired parallax speed
    }

    window.addEventListener("scroll", handleScroll)

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
      setTextKey((prevKey) => prevKey + 1) // Change key to trigger text animation
    }, 5000) // Change image every 5 seconds

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const currentContent = heroContent[currentImageIndex]

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {heroContent.map((content, index) => (
        <Image
          key={index}
          src={content.imageSrc || "/placeholder.svg"}
          alt={content.alt}
          fill
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out transition-transform",
            index === currentImageIndex ? "opacity-70 scale-100" : "opacity-0 scale-105",
          )}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          priority={index === 0}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 z-0"></div>

      <div className="relative z-10 text-white px-4 md:px-6 container flex flex-col items-start">
        <h1
          key={textKey}
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-lg",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
          dangerouslySetInnerHTML={{ __html: currentContent.title }}
        />
        <p
          key={textKey + 1}
          className={cn(
            "text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl drop-shadow-md",
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {currentContent.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            size="lg"
            variant="default"
            className={cn(
              "px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 bg-primary text-white",
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
            )}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="default" // Changed to default variant
            className={cn(
              "px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 bg-white text-primary", // Explicitly set white background and primary text
              isVisible ? "animate-fade-in-up delay-500" : "opacity-0",
            )}
          >
            Learn More
          </Button>
        </div>
        {/* Carousel Navigation Dots */}
        <div className={cn("flex justify-center space-x-2", isVisible ? "animate-fade-in-up delay-600" : "opacity-0")}>
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full bg-white transition-all duration-300",
                index === currentImageIndex ? "w-6 bg-accent" : "bg-white/30",
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
