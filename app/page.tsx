"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { IndustriesSection } from "@/components/sections/industries-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { SustainabilitySection } from "@/components/sections/sustainability-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactCTA } from "@/components/sections/contact-cta"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-accent">
        <div className="text-center text-white">
          <div className="mb-4">
            <LoadingSpinner size="lg" className="text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2 animate-pulse">ABG PRO PACK</h1>
          <p className="text-white/80">Loading innovative packaging solutions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <IndustriesSection />
        <WhyChooseUs />
        <SustainabilitySection />
        <ClientsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
