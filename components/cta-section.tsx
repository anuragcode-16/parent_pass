"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-600 dark:from-teal-900 dark:via-teal-800 dark:to-teal-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          Ready to Begin Your Parenting Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80"
        >
          Take the first step toward confident, prepared parenthood with our comprehensive assessment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            variant="secondary"
            className="group relative overflow-hidden bg-white text-teal-700 hover:bg-white/90 transition-colors duration-300"
            asChild
          >
            <Link href="/assessment">
              <span className="relative z-10">Start Assessment</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-teal-500 backdrop-blur-sm"></span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10 group relative overflow-hidden transition-colors duration-300"
            asChild
          >
            <Link href="/login">
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white backdrop-blur-sm"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
