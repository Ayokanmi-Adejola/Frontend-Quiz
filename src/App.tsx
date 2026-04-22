import { useState, useCallback } from "react"
import { Box, Flex, Container } from "@chakra-ui/react"
import { Provider } from "./components/Provider"
import { ColorModeToggle } from "./components/ColorModeToggle"
import { HomePage } from "./components/HomePage"
import { QuizPage } from "./components/QuizPage"
import { ResultsPage } from "./components/ResultsPage"
import { SubjectIcon } from "./components/SubjectIcon"
import { quizData } from "./data/quizData"
import type { QuizSubject } from "./data/quizData"

type GameScreen = "home" | "quiz" | "results"

function QuizApp() {
  const [screen, setScreen] = useState<GameScreen>("home")
  const [selectedQuiz, setSelectedQuiz] = useState<QuizSubject | null>(null)
  const [finalScore, setFinalScore] = useState(0)

  const handleSelectSubject = useCallback((index: number) => {
    setSelectedQuiz(quizData[index])
    setScreen("quiz")
  }, [])

  const handleQuizComplete = useCallback((score: number) => {
    setFinalScore(score)
    setScreen("results")
  }, [])

  const handlePlayAgain = useCallback(() => {
    setScreen("home")
    setSelectedQuiz(null)
    setFinalScore(0)
  }, [])

  return (
    <Box
      minH="100dvh"
      bg="bg.page"
      transition="background 0.3s"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes */}
      <Box
        position="absolute"
        top="-120px"
        left="-80px"
        w="400px"
        h="400px"
        borderRadius="full"
        opacity={0.06}
        bg="quiz.purple"
        filter="blur(80px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-100px"
        right="-60px"
        w="350px"
        h="350px"
        borderRadius="full"
        opacity={0.04}
        bg="quiz.purple"
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Container maxW="1160px" px={{ base: "6", md: "10" }} py="6" position="relative" minH="100dvh">
        <Flex direction="column" minH="calc(100dvh - 48px)">
          {/* Header */}
          <Flex justify="space-between" align="center" mb={{ base: "8", lg: "16" }}>
            <Flex align="center" gap="4">
              {selectedQuiz && (
                <>
                  <SubjectIcon subject={selectedQuiz.subject} size="sm" />
                  <Box
                    fontFamily="Rubik"
                    fontWeight="medium"
                    fontSize="28px"
                    color="fg.heading"
                  >
                    {selectedQuiz.subject}
                  </Box>
                </>
              )}
            </Flex>
            <ColorModeToggle />
          </Flex>

          {/* Content */}
          <Box
            flex="1"
            display="flex"
            css={{
              "& > *": {
                animationName: "fade-in, slide-from-bottom",
                animationDuration: "0.4s",
                animationTimingFunction: "ease-out",
                animationFillMode: "forwards",
              },
            }}
          >
            {screen === "home" && (
              <HomePage onSelectSubject={handleSelectSubject} />
            )}
            {screen === "quiz" && selectedQuiz && (
              <QuizPage
                key={selectedQuiz.subject}
                quiz={selectedQuiz}
                onComplete={handleQuizComplete}
              />
            )}
            {screen === "results" && selectedQuiz && (
              <ResultsPage
                subject={selectedQuiz.subject}
                score={finalScore}
                totalQuestions={selectedQuiz.questions.length}
                onPlayAgain={handlePlayAgain}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

function App() {
  return (
    <Provider>
      <QuizApp />
    </Provider>
  )
}

export default App
