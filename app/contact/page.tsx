import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Packaging Lane", "Industrial Area, Bharat", "PIN: 123456"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 123 456 7890", "+91 987 654 3210", "Toll Free: 1800-123-4567"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@abgpropack.com", "sales@abgpropack.com", "support@abgpropack.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const departments = [
    {
      name: "Sales Inquiry",
      description: "Get quotes and product information",
      email: "sales@abgpropack.com",
      phone: "+91 123 456 7890",
    },
    {
      name: "Technical Support",
      description: "Product specifications and technical assistance",
      email: "support@abgpropack.com",
      phone: "+91 123 456 7891",
    },
    {
      name: "Customer Service",
      description: "Order status and general inquiries",
      email: "service@abgpropack.com",
      phone: "+91 123 456 7892",
    },
    {
      name: "Careers",
      description: "Job opportunities and HR inquiries",
      email: "careers@abgpropack.com",
      phone: "+91 123 456 7893",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white px-4 md:px-6">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up delay-100">
              Get in touch with our team for all your packaging needs and inquiries
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in delay-${index * 100}`}
                >
                  <CardContent className="p-6">
                    <info.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-lg font-semibold text-primary mb-3">{info.title}</CardTitle>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Send us a <span className="text-accent">Message</span>
                </h3>
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            className="border-gray-300 focus:border-accent focus:ring-accent"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            className="border-gray-300 focus:border-accent focus:ring-accent"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="border-gray-300 focus:border-accent focus:ring-accent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          className="border-gray-300 focus:border-accent focus:ring-accent"
                          placeholder="+91 123 456 7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          className="border-gray-300 focus:border-accent focus:ring-accent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          type="text"
                          required
                          className="border-gray-300 focus:border-accent focus:ring-accent"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          className="border-gray-300 focus:border-accent focus:ring-accent resize-none"
                          placeholder="Please describe your inquiry in detail..."
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-white group"
                      >
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="animate-fade-in-right">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Visit Our <span className="text-accent">Facility</span>
                </h3>
                <Card className="shadow-xl mb-8">
                  <CardContent className="p-0">
                    <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959117000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ABG PRO PACK Location"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-primary mb-2">Manufacturing Facility</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Visit our state-of-the-art manufacturing facility to see our production capabilities firsthand.
                        Tours available by appointment.
                      </p>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      >
                        Schedule a Tour
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-4 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-accent" />
                      Quick Contact Options
                    </h4>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now: +91 123 456 7890
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email: info@abgpropack.com
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Department <span className="text-accent">Contacts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in delay-${index * 100}`}
                >
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-semibold text-primary mb-2">{dept.name}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-accent mr-2" />
                        <span className="text-gray-700">{dept.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-accent mr-2" />
                        <span className="text-gray-700">{dept.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What is your typical response time for inquiries?",
                  answer:
                    "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our main number for immediate assistance.",
                },
                {
                  question: "Do you provide samples before placing an order?",
                  answer:
                    "Yes, we provide samples for most of our products. Sample costs may apply depending on the product type and customization requirements.",
                },
                {
                  question: "What are your minimum order quantities?",
                  answer:
                    "Minimum order quantities vary by product. For flexible tubes, our MOQ is typically 10,000 units. For custom packaging, MOQs are determined based on specifications.",
                },
                {
                  question: "Do you offer international shipping?",
                  answer:
                    "Yes, we ship internationally. Shipping costs and delivery times vary by destination. Contact our sales team for specific shipping quotes.",
                },
              ].map((faq, index) => (
                <Card key={index} className={`shadow-lg animate-fade-in-up delay-${index * 100}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
