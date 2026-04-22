import { useState } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Progress,
} from "@chakra-ui/react"
import { CircleCheck, CircleX } from "lucide-react"
import { Icon } from "@chakra-ui/react"
import type { QuizSubject } from "../data/quizData"

interface QuizPageProps {
  quiz: QuizSubject;
  onComplete: (score: number) => void;
}

const optionLetters = ["A", "B", "C", "D"]

export function QuizPage({ quiz, onComplete }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showError, setShowError] = useState(false)

  const totalQuestions = quiz.questions.length
  const currentQuestion = quiz.questions[currentIndex]
  const isCorrect = selectedAnswer === currentQuestion.answer
  const isLastQuestion = currentIndex === totalQuestions - 1
  const progressValue = ((currentIndex + 1) / totalQuestions) * 100

  const handleSelectAnswer = (option: string) => {
    if (isSubmitted) return
    setSelectedAnswer(option)
    setShowError(false)
  }

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setShowError(true)
      return
    }

    if (!isSubmitted) {
      const isRight = selectedAnswer === currentQuestion.answer
      setIsSubmitted(true)
      if (isRight) {
        setScore((prev) => prev + 1)
      }
    } else {
      if (isLastQuestion) {
        onComplete(score)
        return
      }
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsSubmitted(false)
      setShowError(false)
    }
  }

  const getOptionBorderColor = (option: string) => {
    if (!isSubmitted) {
      return option === selectedAnswer ? "quiz.purple" : "transparent"
    }
    if (option === currentQuestion.answer) return "quiz.green"
    if (option === selectedAnswer && !isCorrect) return "quiz.red"
    return "transparent"
  }

  const getOptionLetterBg = (option: string) => {
    if (!isSubmitted) {
      return option === selectedAnswer ? "quiz.purple" : { _light: "quiz.lightGrey", _dark: "navy.700" }
    }
    if (option === currentQuestion.answer) return "quiz.green"
    if (option === selectedAnswer && !isCorrect) return "quiz.red"
    return { _light: "quiz.lightGrey", _dark: "navy.700" }
  }

  const getOptionLetterColor = (option: string) => {
    if (!isSubmitted && option === selectedAnswer) return "white"
    if (isSubmitted && (option === currentQuestion.answer || (option === selectedAnswer && !isCorrect))) return "white"
    return "quiz.greyNavy"
  }

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "10", lg: "20" }}
      flex="1"
    >
      {/* Left side - Question */}
      <Flex direction="column" justify="space-between" flex="1" maxW={{ lg: "465px" }}>
        <Box>
          <Text textStyle="bodyMd" color="fg.body" fontStyle="italic" mb="6">
            Question {currentIndex + 1} of {totalQuestions}
          </Text>
          <Heading
            textStyle="headingLg"
            color="fg.heading"
            mb="8"
          >
            {currentQuestion.question}
          </Heading>
        </Box>
        <Progress.Root
          value={progressValue}
          size="sm"
          colorPalette="purple"
          borderRadius="full"
          mb={{ base: "0", lg: "4" }}
        >
          <Progress.Track
            bg={{ _light: "quiz.lightGrey", _dark: "navy.800" }}
            h="16px"
            borderRadius="full"
            p="1"
          >
            <Progress.Range
              bg="quiz.purple"
              borderRadius="full"
              transition="width 0.4s ease"
            />
          </Progress.Track>
        </Progress.Root>
      </Flex>

      {/* Right side - Options */}
      <Stack gap="4" flex="1" maxW={{ lg: "564px" }}>
        {currentQuestion.options.map((option, idx) => (
          <Flex
            key={`${currentIndex}-${idx}`}
            as="button"
            align="center"
            gap="4"
            p="3"
            bg="bg.card"
            borderRadius="24px"
            cursor={isSubmitted ? "default" : "pointer"}
            transition="all 0.2s"
            boxShadow="0 2px 8px rgba(0,0,0,0.08)"
            border="3px solid"
            borderColor={getOptionBorderColor(option)}
            _hover={!isSubmitted ? {
              transform: "translateY(-1px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            } : {}}
            _focusVisible={{
              outline: "3px solid",
              outlineColor: "quiz.purple",
              outlineOffset: "2px",
            }}
            onClick={() => handleSelectAnswer(option)}
            w="full"
            textAlign="left"
            aria-label={`Option ${optionLetters[idx]}: ${option}`}
          >
            <Flex
              w="56px"
              h="56px"
              bg={getOptionLetterBg(option)}
              borderRadius="12px"
              align="center"
              justify="center"
              flexShrink={0}
              transition="all 0.2s"
            >
              <Text
                fontWeight="medium"
                fontSize="28px"
                color={getOptionLetterColor(option)}
                transition="color 0.2s"
              >
                {optionLetters[idx]}
              </Text>
            </Flex>
            <Text
              textStyle="headingSm"
              color="fg.option"
              flex="1"
              fontSize={{ base: "18px", md: "28px" }}
            >
              {option}
            </Text>
            {isSubmitted && option === currentQuestion.answer && (
              <Icon color="quiz.green" flexShrink={0}>
                <CircleCheck size={30} />
              </Icon>
            )}
            {isSubmitted && option === selectedAnswer && !isCorrect && option !== currentQuestion.answer && (
              <Icon color="quiz.red" flexShrink={0}>
                <CircleX size={30} />
              </Icon>
            )}
          </Flex>
        ))}

        <Button
          onClick={handleSubmit}
          bg="quiz.purple"
          color="white"
          h="60px"
          borderRadius="24px"
          fontSize="28px"
          fontWeight="medium"
          fontFamily="Rubik"
          w="full"
          _hover={{ bg: "quiz.purpleHover" }}
          transition="all 0.2s"
        >
          {isSubmitted ? (isLastQuestion ? "See Results" : "Next Question") : "Submit Answer"}
        </Button>

        {showError && (
          <Flex justify="center" align="center" gap="2">
            <Icon color="quiz.red">
              <CircleX size={20} />
            </Icon>
            <Text color="quiz.red" textStyle="bodyMd">
              Please select an answer
            </Text>
          </Flex>
        )}
      </Stack>
    </Flex>
  )
}
