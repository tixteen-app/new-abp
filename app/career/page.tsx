import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, TrendingUp, Heart, Award } from "lucide-react"

export default function CareerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive wellness programs",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Attractive salary packages, health insurance, and performance bonuses",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with supportive colleagues and leadership",
    },
  ]

  const openings = [
    {
      title: "Production Manager",
      department: "Manufacturing",
      location: "Bharat, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead production operations and ensure quality standards in our manufacturing facility.",
    },
    {
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Bharat, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Implement quality control procedures and maintain compliance with industry standards.",
    },
    {
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      description: "Drive sales growth and build relationships with clients across various industries.",
    },
    {
      title: "Design Engineer",
      department: "R&D",
      location: "Bharat, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Develop innovative packaging solutions and improve existing product designs.",
    },
    {
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Bharat, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Manage supply chain operations and optimize logistics processes.",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Bharat, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop marketing strategies and manage brand communications.",
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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Build your career with ABG PRO PACK and be part of the packaging revolution
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Work <span className="text-accent">With Us</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Current <span className="text-accent">Openings</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openings.map((job, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-primary mb-2">{job.title}</CardTitle>
                        <p className="text-accent font-medium">{job.department}</p>
                      </div>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        {job.experience} experience required
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Application <span className="text-accent">Process</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Apply Online",
                    description: "Submit your application through our career portal",
                  },
                  {
                    step: "2",
                    title: "Initial Review",
                    description: "Our HR team reviews your application and qualifications",
                  },
                  {
                    step: "3",
                    title: "Interview Process",
                    description: "Participate in technical and cultural fit interviews",
                  },
                  { step: "4", title: "Welcome Aboard", description: "Join our team and start your journey with us" },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white px-4 md:px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-accent">Journey</span>?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Don't see a position that matches your skills? Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3">
              Send Your Resume
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
