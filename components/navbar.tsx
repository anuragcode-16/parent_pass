"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/components/auth-provider"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 text-transparent bg-clip-text"
          >
            ParentPass
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isHomePage && (
            <>
              <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="#resources" className="text-foreground/70 hover:text-foreground transition-colors">
                Resources
              </Link>
            </>
          )}

          <ThemeToggle />

          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-foreground/70 hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Button variant="ghost" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col space-y-3">
            {isHomePage && (
              <>
                <Link
                  href="#features"
                  className="text-foreground/70 hover:text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-foreground/70 hover:text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#resources"
                  className="text-foreground/70 hover:text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
              </>
            )}

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-foreground/70 hover:text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => {
                    signOut()
                    setIsMenuOpen(false)
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="justify-start" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
