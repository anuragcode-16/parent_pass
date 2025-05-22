"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Brain, Heart, Coins, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export default function AssessmentPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [currentSection, setCurrentSection] = useState("mental")
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Mock assessment data
  const mentalHealthQuestions = [
    {
      id: "m1",
      question: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
      options: [
        { value: "0", label: "Not at all" },
        { value: "1", label: "Several days" },
        { value: "2", label: "More than half the days" },
        { value: "3", label: "Nearly every day" },
      ],
    },
    {
      id: "m2",
      question: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
      options: [
        { value: "0", label: "Not at all" },
        { value: "1", label: "Several days" },
        { value: "2", label: "More than half the days" },
        { value: "3", label: "Nearly every day" },
      ],
    },
    {
      id: "m3",
      question: "How confident do you feel in your ability to handle stress?",
      options: [
        { value: "0", label: "Not at all confident" },
        { value: "1", label: "Somewhat confident" },
        { value: "2", label: "Moderately confident" },
        { value: "3", label: "Very confident" },
      ],
    },
  ]

  const emotionalQuestions = [
    {
      id: "e1",
      question:
        "How would you rate your ability to communicate effectively with your partner about parenting decisions?",
      options: [
        { value: "0", label: "Poor" },
        { value: "1", label: "Fair" },
        { value: "2", label: "Good" },
        { value: "3", label: "Excellent" },
      ],
    },
    {
      id: "e2",
      question: "How aligned are you and your partner on core parenting values?",
      options: [
        { value: "0", label: "Not aligned at all" },
        { value: "1", label: "Somewhat aligned" },
        { value: "2", label: "Mostly aligned" },
        { value: "3", label: "Completely aligned" },
      ],
    },
    {
      id: "e3",
      question: "How do you typically resolve conflicts with your partner?",
      options: [
        { value: "0", label: "We avoid conflicts" },
        { value: "1", label: "We argue without resolution" },
        { value: "2", label: "We compromise" },
        { value: "3", label: "We discuss and find solutions together" },
      ],
    },
  ]

  const financialQuestions = [
    {
      id: "f1",
      question: "Do you have an emergency fund that could cover at least 3-6 months of expenses?",
      options: [
        { value: "0", label: "No emergency fund" },
        { value: "1", label: "Less than 1 month of expenses" },
        { value: "2", label: "1-3 months of expenses" },
        { value: "3", label: "3+ months of expenses" },
      ],
    },
    {
      id: "f2",
      question: "How stable is your current income?",
      options: [
        { value: "0", label: "Very unstable" },
        { value: "1", label: "Somewhat unstable" },
        { value: "2", label: "Mostly stable" },
        { value: "3", label: "Very stable" },
      ],
    },
    {
      id: "f3",
      question: "Have you researched and planned for the financial costs of raising a child?",
      options: [
        { value: "0", label: "Not at all" },
        { value: "1", label: "A little research" },
        { value: "2", label: "Moderate research and planning" },
        { value: "3", label: "Extensive research and detailed planning" },
      ],
    },
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      setProgress((currentStep / 3) * 100)
    } else {
      setIsComplete(true)
      setProgress(100)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setProgress(((currentStep - 2) / 3) * 100)
    }
  }

  const handleSectionChange = (value: string) => {
    setCurrentSection(value)
  }

  const handleComplete = () => {
    router.push("/dashboard")
  }

  const renderQuestions = () => {
    let questions

    switch (currentSection) {
      case "mental":
        questions = mentalHealthQuestions
        break
      case "emotional":
        questions = emotionalQuestions
        break
      case "financial":
        questions = financialQuestions
        break
      default:
        questions = mentalHealthQuestions
    }

    return (
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="space-y-4">
            <h3 className="text-lg font-medium">{q.question}</h3>
            <RadioGroup defaultValue={q.options[0].value}>
              {q.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                  <Label htmlFor={`${q.id}-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Parenting Readiness Assessment</h1>
            <p className="text-muted-foreground">
              Complete this comprehensive assessment to evaluate your readiness for parenthood.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {!isComplete ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>
                  Step {currentStep} of 3:{" "}
                  {currentStep === 1
                    ? "Mental Health"
                    : currentStep === 2
                      ? "Emotional Readiness"
                      : "Financial Stability"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1
                    ? "Assess your mental health and psychological readiness for parenthood."
                    : currentStep === 2
                      ? "Evaluate your emotional compatibility and relationship strength."
                      : "Analyze your financial stability and preparedness for child-related expenses."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <Tabs defaultValue="mental" value={currentSection} onValueChange={handleSectionChange}>
                    <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
                      <TabsTrigger value="mental" className="flex items-center gap-2">
                        <Brain className="h-4 w-4" /> Mental Health
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="mental">{renderQuestions()}</TabsContent>
                  </Tabs>
                )}

                {currentStep === 2 && (
                  <Tabs defaultValue="emotional" value={currentSection} onValueChange={handleSectionChange}>
                    <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
                      <TabsTrigger value="emotional" className="flex items-center gap-2">
                        <Heart className="h-4 w-4" /> Emotional Readiness
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="emotional">{renderQuestions()}</TabsContent>
                  </Tabs>
                )}

                {currentStep === 3 && (
                  <Tabs defaultValue="financial" value={currentSection} onValueChange={handleSectionChange}>
                    <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
                      <TabsTrigger value="financial" className="flex items-center gap-2">
                        <Coins className="h-4 w-4" /> Financial Stability
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="financial">{renderQuestions()}</TabsContent>
                  </Tabs>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-teal-500 backdrop-blur-sm"></span>
                </Button>
                <Button onClick={handleNext} className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    {currentStep === 3 ? "Complete" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></span>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
                <CardDescription>
                  Thank you for completing the ParentPass assessment. Your results are being analyzed.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  We've gathered valuable insights about your parenting readiness across mental, emotional, and
                  financial dimensions. Your personalized results and recommendations are now available on your
                  dashboard.
                </p>
                <Button onClick={handleComplete} size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">View Your Results</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></span>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
