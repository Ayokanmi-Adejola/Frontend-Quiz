import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react"
import { SubjectIcon } from "./SubjectIcon"
import { quizData } from "../data/quizData"

interface HomePageProps {
  onSelectSubject: (subjectIndex: number) => void;
}

export function HomePage({ onSelectSubject }: HomePageProps) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "stretch", lg: "center" }}
      justify="space-between"
      gap={{ base: "10", lg: "20" }}
      flex="1"
    >
      {/* Left side - Welcome text */}
      <Box flex="1" maxW={{ lg: "465px" }}>
        <Heading
          textStyle={{ base: "headingLg", md: "displayLg" }}
          color="fg.heading"
          mb="2"
        >
          Welcome to the
        </Heading>
        <Heading
          textStyle={{ base: "headingLg", md: "displayMd" }}
          color="fg.heading"
          mb="6"
        >
          Frontend Quiz!
        </Heading>
        <Text
          textStyle="bodyMd"
          color="fg.body"
          fontStyle="italic"
        >
          Pick a subject to get started.
        </Text>
      </Box>

      {/* Right side - Subject cards */}
      <Stack gap="4" flex="1" maxW={{ lg: "564px" }}>
        {quizData.map((quiz, index) => (
          <Flex
            key={quiz.subject}
            as="button"
            align="center"
            gap="4"
            p="3"
            bg="bg.card"
            borderRadius="24px"
            cursor="pointer"
            transition="all 0.2s"
            boxShadow="0 2px 8px rgba(0,0,0,0.08)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            }}
            _focusVisible={{
              outline: "3px solid",
              outlineColor: "quiz.purple",
              outlineOffset: "2px",
            }}
            onClick={() => onSelectSubject(index)}
            w="full"
            border="none"
            textAlign="left"
            aria-label={`Start ${quiz.subject} quiz`}
          >
            <SubjectIcon subject={quiz.subject} />
            <Heading
              textStyle="headingSm"
              color="fg.heading"
            >
              {quiz.subject}
            </Heading>
          </Flex>
        ))}
      </Stack>
    </Flex>
  )
}
