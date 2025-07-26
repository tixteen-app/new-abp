"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const aboutImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Modern Factory" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Design Team" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Quality Control" },
]

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing once visible
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length)
    }, 4000) // Change image every 4 seconds

    return () => {
      clearInterval(interval)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={cn("space-y-6", isVisible ? "animate-fade-in-left" : "opacity-0")}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About <span className="text-accent">ABG PRO PACK</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At ABG PRO PACK, we are driven by a vision to revolutionize the packaging industry in Bharat. Established in
            2025, our foundation is built upon over two decades of trading expertise in chemicals, dry fruits, and
            spices, giving us a unique insight into diverse industry needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We specialize in manufacturing high-quality flexible laminated tubes, precision-printed labels, and custom
            packaging solutions designed to protect, preserve, and enhance your brand's appeal. Our commitment to
            innovation, quality, and sustainability sets us apart.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Established in 2025, building on rich industry experience.</li>
            <li>Backed by 20+ years of trading expertise in diverse sectors.</li>
            <li>Specializing in flexible laminated tubes, labels, and custom packaging.</li>
            <li>Committed to innovation, quality, and sustainable practices.</li>
          </ul>
        </div>

        <div
          className={cn(
            "relative h-[300px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-xl border border-gray-200",
            isVisible ? "animate-fade-in-right delay-200" : "opacity-0",
          )}
        >
          {aboutImages.map((image, index) => (
            <Image
              key={index}
              src={"/8-colour.png"}
              alt={image.alt}
              fill
              className={cn(
                "object-contain transition-opacity duration-1000 ease-in-out",
                index === currentImageIndex ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
