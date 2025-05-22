"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { forwardRef } from "react"

// Artistic Card component with hover effects
interface ArtisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: "glow" | "lift" | "border" | "none"
  glowColor?: string
}

export const ArtisticCard = forwardRef<HTMLDivElement, ArtisticCardProps>(
  ({ className, children, hoverEffect = "glow", glowColor = "teal", ...props }, ref) => {
    const glowColorMap = {
      teal: "from-teal-400/20 via-teal-500/10 to-transparent",
      blue: "from-blue-400/20 via-blue-500/10 to-transparent",
      purple: "from-purple-400/20 via-purple-500/10 to-transparent",
      pink: "from-pink-400/20 via-pink-500/10 to-transparent",
    }

    const selectedGlow = glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.teal

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300",
          hoverEffect === "glow" && "group hover:shadow-md hover:border-teal-500/30",
          hoverEffect === "lift" && "hover:-translate-y-1 hover:shadow-md",
          hoverEffect === "border" && "hover:border-teal-500",
          className,
        )}
        {...props}
      >
        {hoverEffect === "glow" && (
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-br",
              selectedGlow,
            )}
          />
        )}
        {children}
      </div>
    )
  },
)
ArtisticCard.displayName = "ArtisticCard"

// Animated Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: variant === "link" || variant === "ghost" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {variant === "gradient" && (
          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
        <span className="relative z-10">{props.children}</span>
      </motion.button>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

// Animated Section component
export const AnimatedSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={className}
        {...props}
      >
        {children}
      </motion.section>
    )
  },
)
AnimatedSection.displayName = "AnimatedSection"

// Gradient Text component
interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: "teal" | "blue" | "purple" | "pink"
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, gradient = "teal", ...props }, ref) => {
    const gradientMap = {
      teal: "from-teal-500 to-teal-700",
      blue: "from-blue-500 to-blue-700",
      purple: "from-purple-500 to-purple-700",
      pink: "from-pink-500 to-pink-700",
    }

    return (
      <span
        ref={ref}
        className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradientMap[gradient], className)}
        {...props}
      >
        {children}
      </span>
    )
  },
)
GradientText.displayName = "GradientText"
