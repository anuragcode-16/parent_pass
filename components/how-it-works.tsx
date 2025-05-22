"use client"

import { ClipboardCheck, LineChart, BookOpen, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection, GradientText } from "@/components/ui-elements"

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Complete Assessment",
      description:
        "Take our comprehensive assessment covering mental, emotional, and financial aspects of parenting readiness.",
    },
    {
      icon: LineChart,
      title: "Receive Analysis",
      description: "Get detailed results with personalized insights about your strengths and areas for improvement.",
    },
    {
      icon: BookOpen,
      title: "Access Resources",
      description: "Explore our curated resources tailored to your specific needs and improvement areas.",
    },
    {
      icon: Calendar,
      title: "Follow-up Support",
      description: "Schedule counseling sessions if needed and track your progress with reassessments.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <AnimatedSection id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How <GradientText>ParentPass</GradientText> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our simple four-step process helps you understand and improve your readiness for parenthood.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-800 dark:via-teal-700 dark:to-teal-800 -translate-y-1/2 z-0 origin-left"
          ></motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={item} className="flex flex-col items-center text-center group">
                <div className="relative h-16 w-16 rounded-full bg-background border-2 border-teal-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                  <step.icon className="h-8 w-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-teal-500 backdrop-blur-sm"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
