import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example: if you had a private section
    },
    sitemap: "https://www.abgpropack.com/sitemap.xml", // Replace with your actual domain
  }
}
