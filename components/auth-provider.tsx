"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("parentpass-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Protect routes
  useEffect(() => {
    if (!isLoading) {
      const publicPaths = ["/", "/login", "/register"]
      const isPublicPath = publicPaths.includes(pathname)

      if (!user && !isPublicPath) {
        router.push("/login")
      }

      if (user && (pathname === "/login" || pathname === "/register")) {
        router.push("/dashboard")
      }
    }
  }, [user, isLoading, pathname, router])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in a real app, this would be an API call
      const mockUser = {
        id: "user-1",
        name: email.split("@")[0],
        email,
      }

      // Store user in localStorage
      localStorage.setItem("parentpass-user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/dashboard")
    } catch (error) {
      console.error("Failed to sign in:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock registration - in a real app, this would be an API call
      const mockUser = {
        id: "user-" + Math.floor(Math.random() * 1000),
        name,
        email,
      }

      // Store user in localStorage
      localStorage.setItem("parentpass-user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/dashboard")
    } catch (error) {
      console.error("Failed to sign up:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    localStorage.removeItem("parentpass-user")
    setUser(null)
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
