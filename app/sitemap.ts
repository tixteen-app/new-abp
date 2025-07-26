import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.abgpropack.com", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        {
          url: "https://www.abgpropack.com/placeholder.svg?height=600&width=800&query=Modern%20Packaging%20Factory", // Example image from HeroSection
          caption: "Modern Packaging Factory",
        },
      ],
    },
    {
      url: "https://www.abgpropack.com/about", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.abgpropack.com/products", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.abgpropack.com/industries", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.abgpropack.com/sustainability", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.abgpropack.com/contact", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
