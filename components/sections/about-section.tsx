"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

const aboutImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Modern Factory" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Design Team" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Quality Control" },
]

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const aboutPoints = [
    "Established in 2025, building on rich industry experience.",
    "Backed by 20+ years of trading expertise in diverse sectors.",
    "Specializing in flexible laminated tubes, labels, and custom packaging.",
    "Committed to innovation, quality, and sustainable practices."
  ]
  const { containerRef: pointsRef, visibleItems: visiblePoints } = useStaggeredAnimation(aboutPoints, { threshold: 0.1 })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length)
    }, 4000) // Change image every 4 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section id="about" ref={elementRef} className="py-10 md:py-24 bg-white px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className={cn("space-y-6", isVisible ? "animate-fade-in-left" : "opacity-0")}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About <span className="text-accent gradient-text">ABG PRO PACK</span>
          </h2>
          <p className={cn("text-lg text-gray-700 leading-relaxed", isVisible ? "animate-fade-in-up delay-200" : "opacity-0")}>
            At ABG PRO PACK, we are driven by a vision to revolutionize the packaging industry in Bharat. Established in
            2025, our foundation is built upon over two decades of trading expertise in chemicals, dry fruits, and
            spices, giving us a unique insight into diverse industry needs.
          </p>
          <p className={cn("text-lg text-gray-700 leading-relaxed", isVisible ? "animate-fade-in-up delay-300" : "opacity-0")}>
            We specialize in manufacturing high-quality flexible laminated tubes, precision-printed labels, and custom
            packaging solutions designed to protect, preserve, and enhance your brand's appeal. Our commitment to
            innovation, quality, and sustainability sets us apart.
          </p>
          <ul ref={pointsRef} className="list-none space-y-3">
            {aboutPoints.map((point, index) => (
              <li 
                key={index}
                className={cn(
                  "flex items-start space-x-3 text-lg text-gray-700 transition-all duration-500",
                  visiblePoints[index] ? "animate-fade-in-left" : "opacity-0 translate-x-4"
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3 animate-pulse-slow"></div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "relative h-[300px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-xl border border-gray-200 hover-lift group",
            isVisible ? "animate-fade-in-right delay-200" : "opacity-0",
          )}
        >
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          
          {aboutImages.map((image, index) => (
            <Image
              key={index}
              src={"/8-colour.png"}
              alt={image.alt}
              fill
              className={cn(
                "object-contain transition-all duration-1000 ease-in-out group-hover:scale-105",
                index === currentImageIndex ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-accent/80 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/80 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}
