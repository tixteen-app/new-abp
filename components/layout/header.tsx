"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "Catalog", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#products" },
    { name: "Resources", href: "#" },
    { name: "Contact Us", href: "#footer" }, // Changed from Career to Contact Us
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black shadow-lg transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 font-bold text-2xl text-black">
          <Image
            src="/ABG_Logo.png"
            alt="ABG PRO PACK Logo"
            width={100} // Adjust width as needed
            height={40} // Adjust height as needed
            className="object-contain"
          /> 
          {/* <span className="text-black">PRO PACK</span>  */}
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-md font-medium text-black hover:text-accent transition-colors duration-200 group"
            >
              {link.name}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col items-center space-y-4 py-4 bg-primary/90 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-base font-medium text-black hover:text-accent transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
