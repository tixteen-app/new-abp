import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, Shield, Recycle, Award, Globe } from "lucide-react"

export default function ProductPage() {
  const productCategories = [
    {
      id: "flexible-tubes",
      name: "Flexible Laminated Tubes",
      description: "Premium quality tubes for cosmetics, pharmaceuticals, and food applications",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Multi-layer barrier protection",
        "Custom printing up to 8 colors",
        "Various closure options",
        "FDA approved materials",
        "Tamper-evident sealing",
        "Eco-friendly options available",
      ],
      applications: ["Cosmetics & Personal Care", "Pharmaceuticals", "Food & Beverages", "Industrial Products"],
      specifications: {
        "Diameter Range": "13mm - 60mm",
        "Length Range": "50mm - 200mm",
        Capacity: "5ml - 500ml",
        Materials: "PE, ABL, PBL, Aluminum",
        Printing: "Offset, Flexo, Digital",
        "Minimum Order": "10,000 pieces",
      },
    },
    {
      id: "printed-labels",
      name: "Printed Labels & Stickers",
      description: "High-resolution custom labels with superior adhesion and durability",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "High-resolution printing",
        "Weather resistant materials",
        "Custom shapes and sizes",
        "Holographic security features",
        "Barcode and QR code integration",
        "Removable and permanent adhesives",
      ],
      applications: ["Product Labeling", "Branding & Marketing", "Security & Authentication", "Inventory Management"],
      specifications: {
        "Material Types": "Paper, Vinyl, Polyester, PP",
        "Printing Methods": "Digital, Flexographic, Screen",
        "Adhesive Types": "Permanent, Removable, Repositionable",
        Finishes: "Matte, Gloss, Satin, Textured",
        "Size Range": "10mm x 10mm to 500mm x 700mm",
        "Minimum Order": "1,000 pieces",
      },
    },
    {
      id: "custom-packaging",
      name: "Custom Packaging Solutions",
      description: "Tailored packaging designs to meet your unique product requirements",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Bespoke design service",
        "Structural engineering",
        "Prototype development",
        "Material optimization",
        "Brand integration",
        "Sustainability focus",
      ],
      applications: ["E-commerce Packaging", "Retail Display", "Gift Packaging", "Industrial Packaging"],
      specifications: {
        "Design Process": "Consultation, Prototype, Testing, Production",
        Materials: "Cardboard, Plastic, Metal, Composite",
        Printing: "Full-color, Spot colors, Special effects",
        "Lead Time": "2-6 weeks depending on complexity",
        Prototyping: "Available for all custom projects",
        "Minimum Order": "Varies by project",
      },
    },
    {
      id: "sustainable-packaging",
      name: "Sustainable Packaging",
      description: "Eco-friendly packaging solutions for environmentally conscious brands",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Biodegradable materials",
        "Recyclable components",
        "Reduced carbon footprint",
        "Compostable options",
        "Renewable resources",
        "Circular economy principles",
      ],
      applications: ["Organic Products", "Green Brands", "Sustainable Retail", "Environmental Compliance"],
      specifications: {
        "Eco Materials": "PLA, Kraft Paper, Bamboo, Recycled Plastics",
        Certifications: "FSC, PEFC, Cradle to Cradle",
        Biodegradability: "3-12 months depending on material",
        "Recycling Rate": "Up to 95% recyclable content",
        "Carbon Reduction": "30-70% lower than traditional packaging",
        "Minimum Order": "5,000 pieces",
      },
    },
  ]

  const qualityStandards = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality management system certification ensuring consistent product quality",
    },
    {
      icon: Shield,
      title: "FDA Compliance",
      description: "Food contact approved materials meeting FDA regulations",
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Compliance with global packaging standards and regulations",
    },
    {
      icon: Recycle,
      title: "Environmental Certification",
      description: "Eco-friendly practices and sustainable material certifications",
    },
  ]

  const productionCapabilities = [
    {
      title: "Advanced Manufacturing",
      description: "State-of-the-art machinery with precision control systems",
      stats: "50,000+ units/day capacity",
    },
    {
      title: "Quality Control",
      description: "Multi-stage quality checks throughout production",
      stats: "99.8% quality approval rate",
    },
    {
      title: "Custom Solutions",
      description: "In-house design and engineering capabilities",
      stats: "500+ custom projects completed",
    },
    {
      title: "Fast Turnaround",
      description: "Efficient production scheduling and logistics",
      stats: "2-4 weeks standard delivery",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white px-4 md:px-6">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive packaging solutions engineered for excellence, sustainability, and brand enhancement
            </p>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((product, index) => (
          <section
            key={product.id}
            className={`py-16 md:py-24 px-4 md:px-6 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    {product.name.split(" ").map((word, i) =>
                      i === product.name.split(" ").length - 1 ? (
                        <span key={i} className="text-accent">
                          {word}
                        </span>
                      ) : (
                        word + " "
                      ),
                    )}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Applications:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Request Quote
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>

                  {/* Specifications Card */}
                  <Card className="mt-6 shadow-lg">
                    <CardContent className="p-6">
                      <CardTitle className="text-lg font-bold text-primary mb-4">Technical Specifications</CardTitle>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-primary text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Quality Standards */}
        <section className="py-16 md:py-24 bg-primary text-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quality <span className="text-accent">Standards</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStandards.map((standard, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <standard.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{standard.title}</h3>
                    <p className="text-gray-200 text-sm">{standard.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Production Capabilities */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Production <span className="text-accent">Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productionCapabilities.map((capability, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold">{capability.stats}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Get <span className="text-accent">Started</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Contact our technical team to discuss your specific requirements and get a customized solution for your
              packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Get Custom Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent px-8"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
