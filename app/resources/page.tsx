import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, BookOpen, Users, Award } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Technical Documents",
      icon: FileText,
      items: [
        { name: "Product Specifications Sheet", type: "PDF", size: "2.5 MB" },
        { name: "Material Safety Data Sheets", type: "PDF", size: "1.8 MB" },
        { name: "Quality Certificates", type: "PDF", size: "3.2 MB" },
        { name: "Installation Guidelines", type: "PDF", size: "4.1 MB" },
      ],
    },
    {
      category: "Design Resources",
      icon: BookOpen,
      items: [
        { name: "Brand Guidelines", type: "PDF", size: "5.6 MB" },
        { name: "Logo Assets Package", type: "ZIP", size: "12.3 MB" },
        { name: "Color Palette Guide", type: "PDF", size: "1.2 MB" },
        { name: "Typography Standards", type: "PDF", size: "2.8 MB" },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        { name: "Manufacturing Process Overview", type: "MP4", size: "45.2 MB" },
        { name: "Quality Control Procedures", type: "MP4", size: "32.1 MB" },
        { name: "Sustainable Practices", type: "MP4", size: "28.7 MB" },
        { name: "Custom Design Process", type: "MP4", size: "38.9 MB" },
      ],
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        { name: "ISO 9001:2015 Certificate", type: "PDF", size: "1.5 MB" },
        { name: "FDA Compliance Certificate", type: "PDF", size: "2.1 MB" },
        { name: "Environmental Certification", type: "PDF", size: "1.9 MB" },
        { name: "GMP Certificate", type: "PDF", size: "1.7 MB" },
      ],
    },
  ]

  const faqs = [
    {
      question: "What materials do you use for your packaging?",
      answer:
        "We use a variety of high-quality materials including LDPE, HDPE, aluminum, paper, and biodegradable plastics, all selected based on your specific product requirements and sustainability goals.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantities vary by product type. For flexible tubes, we typically require a minimum of 10,000 units, while for custom packaging solutions, MOQs are determined based on complexity and specifications.",
    },
    {
      question: "How long does production take?",
      answer:
        "Standard production times range from 2-4 weeks depending on the product type and customization requirements. Rush orders can be accommodated with additional planning and may incur expedited fees.",
    },
    {
      question: "Do you offer design services?",
      answer:
        "Yes, we have an in-house design team that can help create custom packaging designs, including artwork, structural design, and brand integration to ensure your packaging stands out in the market.",
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
              <span className="text-accent">Resources</span> & Support
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Access technical documents, design resources, and comprehensive support materials
            </p>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Download <span className="text-accent">Center</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <resource.icon className="h-8 w-8 text-accent mr-3" />
                      <CardTitle className="text-xl font-bold text-primary">{resource.category}</CardTitle>
                    </div>
                    <div className="space-y-3">
                      {resource.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-primary">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              {item.type} • {item.size}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Need Additional <span className="text-accent">Support</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Our technical support team is ready to assist you with any questions about our products, specifications,
              or custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Users className="h-5 w-5 mr-2" />
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
