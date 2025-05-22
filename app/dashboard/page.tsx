"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/components/auth-provider"
import { Brain, Heart, Coins, ArrowRight, Calendar, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GradientText, ArtisticCard } from "@/components/ui-elements"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [animatedProgress, setAnimatedProgress] = useState({
    mental: 0,
    emotional: 0,
    financial: 0,
    overall: 0,
  })

  // Mock assessment data
  const assessmentData = {
    mental: 75,
    emotional: 60,
    financial: 85,
    overall: 73,
    status: "Almost Ready",
    lastAssessment: "2023-05-15",
    nextAssessment: "2023-08-15",
  }

  // Animate progress bars on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress({
        mental: assessmentData.mental,
        emotional: assessmentData.emotional,
        financial: assessmentData.financial,
        overall: assessmentData.overall,
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [assessmentData])

  // Mock resources
  const resources = [
    {
      title: "Financial Planning for New Parents",
      category: "Financial",
      date: "June 12, 2023",
      link: "/resources/financial/planning",
    },
    {
      title: "Managing Anxiety During Pregnancy",
      category: "Mental Health",
      date: "May 28, 2023",
      link: "/resources/mental-health/anxiety",
    },
    {
      title: "Communication Strategies for Co-Parenting",
      category: "Relationship",
      date: "July 3, 2023",
      link: "/resources/relationship/communication",
    },
  ]

  // Mock upcoming appointments
  const appointments = [
    {
      title: "Financial Counseling Session",
      date: "August 10, 2023",
      time: "10:00 AM",
      link: "/appointments/fin-123",
    },
    {
      title: "Couple's Therapy",
      date: "August 17, 2023",
      time: "2:30 PM",
      link: "/appointments/cpl-456",
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 bg-gradient-to-br from-background via-background to-muted/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          >
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, <GradientText>{user?.name}</GradientText>
              </h1>
              <p className="text-muted-foreground">
                Your parenting readiness journey is in progress. Here's your current status.
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
              asChild
            >
              <Link href="/assessment">Continue Assessment</Link>
            </Button>
          </motion.div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 md:w-[400px] p-1 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300"
              >
                Appointments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div variants={item}>
                  <ArtisticCard hoverEffect="glow" className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Overall Status</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                          <FileText className="h-4 w-4" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">{animatedProgress.overall}%</div>
                      <div className="flex items-center mb-2">
                        <div className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                          {assessmentData.status}
                        </div>
                      </div>
                      <Progress
                        value={animatedProgress.overall}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-gradient-to-r from-amber-500 to-amber-600"
                      />
                      <div className="mt-4 text-xs text-muted-foreground">
                        Last assessment: {assessmentData.lastAssessment}
                      </div>
                    </CardContent>
                  </ArtisticCard>
                </motion.div>

                <motion.div variants={item}>
                  <ArtisticCard hoverEffect="glow" glowColor="teal" className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Mental Health</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <Brain className="h-4 w-4" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">{animatedProgress.mental}%</div>
                      <Progress
                        value={animatedProgress.mental}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-gradient-to-r from-teal-500 to-teal-600"
                      />
                      <div className="mt-4 text-sm text-muted-foreground">
                        <Link
                          href="/assessment/mental"
                          className="flex items-center hover:text-teal-500 transition-colors"
                        >
                          View details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </ArtisticCard>
                </motion.div>

                <motion.div variants={item}>
                  <ArtisticCard hoverEffect="glow" glowColor="pink" className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Emotional</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                          <Heart className="h-4 w-4" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">{animatedProgress.emotional}%</div>
                      <Progress
                        value={animatedProgress.emotional}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-gradient-to-r from-pink-500 to-pink-600"
                      />
                      <div className="mt-4 text-sm text-muted-foreground">
                        <Link
                          href="/assessment/emotional"
                          className="flex items-center hover:text-pink-500 transition-colors"
                        >
                          View details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </ArtisticCard>
                </motion.div>

                <motion.div variants={item}>
                  <ArtisticCard hoverEffect="glow" glowColor="blue" className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">Financial</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                          <Coins className="h-4 w-4" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">{animatedProgress.financial}%</div>
                      <Progress
                        value={animatedProgress.financial}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-green-600"
                      />
                      <div className="mt-4 text-sm text-muted-foreground">
                        <Link
                          href="/assessment/financial"
                          className="flex items-center hover:text-green-500 transition-colors"
                        >
                          View details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </ArtisticCard>
                </motion.div>
              </motion.div>

              <motion.div variants={item} initial="hidden" animate="show">
                <ArtisticCard hoverEffect="glow">
                  <CardHeader>
                    <CardTitle>Improvement Recommendations</CardTitle>
                    <CardDescription>Based on your assessment results, here are some areas to focus on</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border bg-muted/50 hover:border-pink-500/30 hover:bg-pink-50/5 transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                            <Heart className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Improve Emotional Communication</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Work on expressing emotions and active listening with your partner to strengthen your
                              co-parenting foundation.
                            </p>
                            <Button
                              variant="link"
                              className="p-0 h-auto mt-2 text-pink-600 hover:text-pink-500"
                              asChild
                            >
                              <Link href="/resources/relationship/communication">View resources</Link>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border bg-muted/50 hover:border-green-500/30 hover:bg-green-50/5 transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                            <Coins className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Build Emergency Savings</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Aim to save 3-6 months of expenses in an emergency fund to provide financial security for
                              your family.
                            </p>
                            <Button
                              variant="link"
                              className="p-0 h-auto mt-2 text-green-600 hover:text-green-500"
                              asChild
                            >
                              <Link href="/resources/financial/emergency-fund">View resources</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </ArtisticCard>
              </motion.div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <ArtisticCard>
                <CardHeader>
                  <CardTitle>Recommended Resources</CardTitle>
                  <CardDescription>Personalized content based on your assessment results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="group flex items-start p-4 rounded-lg border hover:border-teal-500/50 transition-all duration-300 hover:shadow-sm hover:bg-teal-50/5">
                          <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium group-hover:text-teal-600 transition-colors">
                                <Link href={resource.link}>{resource.title}</Link>
                              </h3>
                              <span className="text-xs px-2 py-1 rounded-full bg-muted">{resource.category}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Added on {resource.date}</p>
                            <Button
                              variant="link"
                              className="p-0 h-auto mt-2 text-teal-600 hover:text-teal-500"
                              asChild
                            >
                              <Link href={resource.link}>Read more</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className="border-teal-500/50 hover:bg-teal-50/10 hover:text-teal-600 transition-colors duration-300"
                      asChild
                    >
                      <Link href="/resources">View all resources</Link>
                    </Button>
                  </div>
                </CardContent>
              </ArtisticCard>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-6">
              <ArtisticCard>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled counseling and support sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  {appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.map((appointment, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="group flex items-start p-4 rounded-lg border hover:border-teal-500/50 transition-all duration-300 hover:shadow-sm hover:bg-teal-50/5">
                            <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium group-hover:text-teal-600 transition-colors">
                                <Link href={appointment.link}>{appointment.title}</Link>
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {appointment.date} at {appointment.time}
                              </p>
                              <div className="mt-3 flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-teal-500/30 hover:border-teal-500 hover:bg-teal-50/10 transition-colors duration-300"
                                  asChild
                                >
                                  <Link href={`${appointment.link}/reschedule`}>Reschedule</Link>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-500/30 hover:border-red-500 hover:bg-red-50/10 transition-colors duration-300"
                                  asChild
                                >
                                  <Link href={`${appointment.link}/cancel`}>Cancel</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No upcoming appointments</h3>
                      <p className="text-muted-foreground mb-4">
                        Schedule a counseling session to get personalized guidance on your parenting journey.
                      </p>
                      <Button
                        className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
                        asChild
                      >
                        <Link href="/appointments/schedule">Schedule Appointment</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </ArtisticCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
