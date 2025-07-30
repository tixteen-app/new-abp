import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Sustainable Packaging: Innovations Shaping Tomorrow",
    excerpt:
      "Explore the cutting-edge technologies and materials that are revolutionizing the packaging industry, from biodegradable plastics to smart packaging solutions.",
    author: "Dr. Priya Sharma",
    date: "July 25, 2025",
    readTime: "8 min read",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=800",
    href: "/blog/future-sustainable-packaging",
  }

  const blogPosts = [
    {
      title: "The Future of Sustainable Packaging",
      date: "July 20, 2025",
      author: "Dr. Priya Sharma",
      category: "Sustainability",
      readTime: "6 min read",
      excerpt:
        "Explore the latest innovations in eco-friendly packaging materials and practices that are shaping the future of the industry.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/future-sustainable-packaging",
      featured: true,
    },
    {
      title: "Why Flexible Tubes Are Revolutionizing Cosmetics",
      date: "July 15, 2025",
      author: "Rajesh Kumar",
      category: "Product Innovation",
      readTime: "5 min read",
      excerpt:
        "Discover the benefits of flexible laminated tubes for beauty and personal care products, and why leading brands are making the switch.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/flexible-tubes-cosmetics",
      featured: true,
    },
    {
      title: "Ensuring Product Safety with Pharma Packaging",
      date: "July 10, 2025",
      author: "Dr. Anjali Singh",
      category: "Healthcare",
      readTime: "7 min read",
      excerpt:
        "Learn about the stringent standards and advanced technologies used in pharmaceutical packaging to ensure product integrity and patient safety.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/pharma-packaging-safety",
      featured: true,
    },
    {
      title: "Smart Packaging: The Integration of IoT and Packaging",
      date: "July 5, 2025",
      author: "Amit Patel",
      category: "Technology",
      readTime: "6 min read",
      excerpt:
        "How Internet of Things (IoT) technology is being integrated into packaging solutions to provide real-time tracking, temperature monitoring, and consumer engagement.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/smart-packaging-iot",
    },
    {
      title: "Regulatory Compliance in Food Packaging",
      date: "June 30, 2025",
      author: "Meera Gupta",
      category: "Compliance",
      readTime: "8 min read",
      excerpt:
        "Understanding the complex regulatory landscape for food packaging, including FDA guidelines, EU regulations, and best practices for compliance.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/food-packaging-compliance",
    },
    {
      title: "The Psychology of Packaging Design",
      date: "June 25, 2025",
      author: "Kavya Reddy",
      category: "Design",
      readTime: "5 min read",
      excerpt:
        "How packaging design influences consumer behavior and purchasing decisions, with insights from behavioral psychology and market research.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/packaging-design-psychology",
    },
    {
      title: "Circular Economy in Packaging: Closing the Loop",
      date: "June 20, 2025",
      author: "Dr. Priya Sharma",
      category: "Sustainability",
      readTime: "7 min read",
      excerpt:
        "Exploring how the circular economy model is being applied to packaging, from design for recyclability to innovative take-back programs.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/circular-economy-packaging",
    },
    {
      title: "Anti-Counterfeiting Technologies in Packaging",
      date: "June 15, 2025",
      author: "Rohit Sharma",
      category: "Security",
      readTime: "6 min read",
      excerpt:
        "Advanced security features and technologies being implemented in packaging to combat counterfeiting and protect brand integrity.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/anti-counterfeiting-packaging",
    },
    {
      title: "Minimalist Packaging: Less is More",
      date: "June 10, 2025",
      author: "Neha Joshi",
      category: "Design",
      readTime: "4 min read",
      excerpt:
        "The growing trend of minimalist packaging design and how brands are using simplicity to create powerful visual impact while reducing environmental footprint.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/blog/minimalist-packaging-design",
    },
  ]

  const categories = [
    { name: "All", count: 12 },
    { name: "Sustainability", count: 4 },
    { name: "Product Innovation", count: 3 },
    { name: "Technology", count: 2 },
    { name: "Design", count: 2 },
    { name: "Healthcare", count: 1 },
    { name: "Compliance", count: 1 },
    { name: "Security", count: 1 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white px-4 md:px-6">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stay informed with the latest trends, innovations, and expert insights in packaging technology
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white border-gray-300 focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Featured Article</h2>
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link href={featuredPost.href}>
                    <Button className="bg-primary hover:bg-primary/90 text-white group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-bold text-primary mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={post.href}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-white px-4 md:px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our <span className="text-accent">Newsletter</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Get the latest industry insights, product updates, and expert tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
