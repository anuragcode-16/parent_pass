"use client"

import { Brain, Heart, Coins, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection, GradientText } from "@/components/ui-elements"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Mental Health Assessment",
      description:
        "Evaluate your mental health readiness using clinically validated tools like GAD-7 and PHQ-9 to ensure you're prepared for the challenges of parenthood.",
    },
    {
      icon: Heart,
      title: "Emotional Compatibility",
      description:
        "For couples, assess your emotional compatibility and communication patterns to build a strong foundation for co-parenting.",
    },
    {
      icon: Coins,
      title: "Financial Readiness",
      description:
        "Analyze your financial situation including income stability, savings, debts, and future planning to ensure you can provide for your child.",
    },
    {
      icon: CheckCircle,
      title: "Government Verification",
      description:
        "Get official verification of your parenting readiness status, which may be required or beneficial in certain jurisdictions.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <AnimatedSection id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive <GradientText>Readiness Evaluation</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our holistic approach evaluates all aspects of parenting readiness to help you prepare for this important
            life journey.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group h-full relative overflow-hidden border border-border/50 transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-teal-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
