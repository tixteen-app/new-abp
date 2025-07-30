import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize packaging solutions with innovative, sustainable, and high-quality products that protect and enhance your brand.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "To be the leading packaging partner in Bharat, known for excellence, reliability, and environmental responsibility.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Quality, Innovation, Sustainability, and Customer-centricity drive everything we do at ABG PRO PACK.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A dedicated team of professionals with decades of combined experience in packaging and manufacturing.",
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
              About <span className="text-accent">ABG PRO PACK</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Pioneering packaging excellence with over two decades of industry expertise
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our <span className="text-accent">Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2025, ABG PRO PACK emerged from a vision to transform the packaging landscape in Bharat. Our
                journey began with over 20 years of trading expertise in chemicals, dry fruits, and spices, giving us
                unique insights into diverse industry requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we stand as a testament to innovation and quality, specializing in flexible laminated tubes,
                precision-printed labels, and custom packaging solutions that not only protect products but elevate
                brands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment extends beyond manufacturing – we're dedicated to sustainable practices, cutting-edge
                technology, and building lasting partnerships with our clients.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ABG PRO PACK Factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Leadership <span className="text-accent">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Kumar", position: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
                {
                  name: "Priya Sharma",
                  position: "Head of Operations",
                  image: "/placeholder.svg?height=300&width=300",
                },
                { name: "Amit Singh", position: "Technical Director", image: "/placeholder.svg?height=300&width=300" },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                    <p className="text-accent font-medium">{member.position}</p>
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
