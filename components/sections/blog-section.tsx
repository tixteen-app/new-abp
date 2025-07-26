"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const blogPosts = [
  {
    title: "The Future of Sustainable Packaging",
    date: "July 20, 2025",
    excerpt: "Explore the latest innovations in eco-friendly packaging materials and practices.",
    href: "#",
  },
  {
    title: "Why Flexible Tubes Are Revolutionizing Cosmetics",
    date: "July 15, 2025",
    excerpt: "Discover the benefits of flexible laminated tubes for beauty and personal care products.",
    href: "#",
  },
  {
    title: "Ensuring Product Safety with Pharma Packaging",
    date: "July 10, 2025",
    excerpt: "Learn about the stringent standards and technologies in pharmaceutical packaging.",
    href: "#",
  },
]

export function BlogSection() {
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
    <section id="blog" ref={sectionRef} className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="container text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Latest <span className="text-accent">Insights</span>
        </h2>
        <p
          className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto mb-12",
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0",
          )}
        >
          Stay informed with our latest articles, industry news, and expert insights on packaging innovations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col p-6 text-left shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? `animate-scale-in delay-${index * 100 + 200}` : "opacity-0",
              )}
            >
              <CardContent className="p-0">
                <CardTitle className="text-xl font-semibold text-primary mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500 mb-4">{post.date}</CardDescription>
                <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
                <Link href={post.href} className="text-accent hover:underline text-sm font-medium">
                  Read More &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          size="lg"
          variant="outline"
          className={cn(
            "px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 border-primary text-primary",
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0",
          )}
        >
          View All Posts
        </Button>
      </div>
    </section>
  )
}
