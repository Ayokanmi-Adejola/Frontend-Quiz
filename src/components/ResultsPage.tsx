import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react"
import { SubjectIcon } from "./SubjectIcon"

interface ResultsPageProps {
  subject: string;
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

export function ResultsPage({ subject, score, totalQuestions, onPlayAgain }: ResultsPageProps) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "stretch", lg: "center" }}
      justify="space-between"
      gap={{ base: "10", lg: "20" }}
      flex="1"
    >
      {/* Left side - Completion text */}
      <Box flex="1" maxW={{ lg: "465px" }}>
        <Heading
          textStyle={{ base: "headingLg", md: "displayLg" }}
          color="fg.heading"
          mb="2"
        >
          Quiz completed
        </Heading>
        <Heading
          textStyle={{ base: "headingLg", md: "displayMd" }}
          color="fg.heading"
        >
          You scored...
        </Heading>
      </Box>

      {/* Right side - Score */}
      <Stack gap="4" flex="1" maxW={{ lg: "564px" }}>
        <Flex
          direction="column"
          align="center"
          bg="bg.card"
          borderRadius="24px"
          p="10"
          boxShadow="0 2px 8px rgba(0,0,0,0.08)"
        >
          <Flex align="center" gap="4" mb="8">
            <SubjectIcon subject={subject} size="sm" />
            <Heading textStyle="headingSm" color="fg.heading">
              {subject}
            </Heading>
          </Flex>

          <Text
            fontSize={{ base: "88px", md: "144px" }}
            fontWeight="medium"
            color="fg.heading"
            lineHeight="1"
            fontFamily="Rubik"
          >
            {score}
          </Text>

          <Text textStyle="bodyLg" color="fg.body" mt="4">
            out of {totalQuestions}
          </Text>
        </Flex>

        <Button
          onClick={onPlayAgain}
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
          Play Again
        </Button>
      </Stack>
    </Flex>
  )
}
