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
import { BlogSection } from "@/components/sections/blog-section" // Import the new BlogSection
import { ContactCTA } from "@/components/sections/contact-cta"

export default function Home() {
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
        <BlogSection /> {/* Add the BlogSection here */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
