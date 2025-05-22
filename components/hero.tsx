"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GradientText, AnimatedSection } from "@/components/ui-elements"

export function Hero() {
  return (
    <AnimatedSection className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Are You Ready for <GradientText>Parenthood?</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
          >
            ParentPass helps you evaluate your mental, emotional, and financial readiness for the journey of parenthood
            with personalized assessments and resources.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
              asChild
            >
              <Link href="/assessment">
                <span className="relative z-10">Start Assessment</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-teal-500/50 hover:border-teal-500 transition-colors duration-300"
              asChild
            >
              <Link href="#how-it-works">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-teal-500 backdrop-blur-sm"></span>
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80"
              alt="Happy family with a baby"
              className="relative rounded-lg shadow-lg w-full h-auto object-cover z-10"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
