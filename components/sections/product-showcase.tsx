"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const products = [
  {
    name: "Laminated Tubes",
    description: "Durable and versatile packaging for cosmetics, pharma, and food.",
    image: "/tube.png",
  },
  {
    name: "Printed Labels",
    description: "High-resolution, custom-designed labels for brand visibility.",
    image: "https://5.imimg.com/data5/XI/KN/QJ/SELLER-3005866/garment-label-printing-machine.jpg",
  },
  {
    name: "Custom Packaging",
    description: "Tailored solutions to meet unique product and brand requirements.",
    image: "https://image.made-in-china.com/2f0j00iCckUKWdlRqj/Popular-Automatic-Paper-Food-Box-Making-Machine-Disposable-Food-Container-Making-Machine-Paper-Plate-Pulp-Machine.jpg",
  },
  {
    name: "Cosmetic Tubes",
    description: "Elegant and functional tubes for beauty and personal care products.",
    image: "https://s.alicdn.com/@sc04/kf/H3446dc7cc78e497ab5bf43c8bfcc44edy.png",
  },
  {
    name: "Food Packaging",
    description: "Safe and hygienic packaging solutions for various food products.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/433209177/BK/YM/CR/3781527/qq-500x500.jpg",
  },
  {
    name: "Pharmaceutical Tubes",
    description: "Secure and compliant packaging for pharmaceutical applications.",
    image: "https://4.imimg.com/data4/PW/RH/MY-7648618/semi-automatic-tube-filling-machine-500x500.jpg",
  },
]

export function ProductShowcase() {
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
    <section id="products" ref={sectionRef} className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Our <span className="text-accent">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={cn(
                "group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                isVisible ? `animate-scale-in delay-${index * 100}` : "opacity-0", // Changed to scale-in
              )}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white text-left">
                    <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                    <p className="text-sm mt-1">{product.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
