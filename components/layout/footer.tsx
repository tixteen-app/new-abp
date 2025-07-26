import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white py-8 px-4 md:px-6">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-md">
              <img src="/ABG_Logo.png" alt="ABG Pro Pack Logo" className="h-12 w-auto" />
            </div>
          </Link>
          <p className="text-sm text-gray-300">Innovative packaging solutions that protect and elevate your brand.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="#home" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="#products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="#industries" className="hover:text-accent transition-colors">
              Industries
            </Link>
            <Link href="#sustainability" className="hover:text-accent transition-colors">
              Sustainability
            </Link>
            <Link href="#clients" className="hover:text-accent transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-accent">Contact Us</h3>
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-accent" />
              <span>info@abgpropack.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 123 456 7890</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-accent mt-1" />
              <span>123 Packaging Lane, Industrial Area, Bharat</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-accent">Newsletter</h3>
          <p className="text-sm text-gray-300">Stay updated with our latest news and innovations.</p>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent"
            />
            <Button type="submit" >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} ABG PRO PACK. All rights reserved.</p>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-400">Created by <span className="text-accent">Pitamaas PVT. LTD</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
