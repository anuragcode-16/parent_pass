import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 text-transparent bg-clip-text">
              ParentPass
            </h3>
            <p className="mb-4 text-muted-foreground">
              Helping you prepare for the most important journey of your life with confidence and clarity.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/mental-health"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Mental Health
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/financial"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/relationship"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Relationship Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/parenting"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Parenting Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ParentPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
