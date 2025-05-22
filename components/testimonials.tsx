"use client"

import { CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { AnimatedSection, GradientText, ArtisticCard } from "@/components/ui-elements"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "ParentPass helped us identify areas we needed to work on before having a child. The financial assessment was particularly eye-opening.",
      name: "Sarah & Michael",
      role: "New Parents",
      avatar: "SM",
      image:
        "https://images.unsplash.com/photo-1623082574085-157d955f1d35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    },
    {
      quote:
        "As a single person considering adoption, the mental health assessment gave me confidence that I'm emotionally ready for this journey.",
      name: "James T.",
      role: "Prospective Adoptive Parent",
      avatar: "JT",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      quote:
        "The counseling resources provided after our assessment were invaluable. We're now much better prepared for parenthood.",
      name: "Priya & Raj",
      role: "Expecting Parents",
      avatar: "PR",
      image:
        "https://images.unsplash.com/photo-1565036558162-44c9118493e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
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
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success <GradientText>Stories</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from people who have used ParentPass to prepare for their parenting journey.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <ArtisticCard hoverEffect="glow" className="h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 border-t pt-6">
                  <Avatar className="h-12 w-12 border-2 border-teal-500/20">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </ArtisticCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
