import { useColorMode } from "../hooks/useColorMode"
import { Flex, Box, Icon } from "@chakra-ui/react"
import { Sun, Moon } from "lucide-react"

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex
      align="center"
      gap="2"
      cursor="pointer"
      onClick={toggleColorMode}
      role="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggleColorMode()
        }
      }}
    >
      <Icon color={isDark ? "quiz.bluishGrey" : "quiz.greyNavy"}>
        <Sun size={20} />
      </Icon>

      <Box
        w="48px"
        h="28px"
        bg="quiz.purple"
        borderRadius="full"
        position="relative"
        transition="background 0.3s"
        flexShrink={0}
      >
        <Box
          w="20px"
          h="20px"
          bg="white"
          borderRadius="full"
          position="absolute"
          top="4px"
          left={isDark ? "24px" : "4px"}
          transition="left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        />
      </Box>

      <Icon color={isDark ? "quiz.bluishGrey" : "quiz.greyNavy"}>
        <Moon size={20} />
      </Icon>
    </Flex>
  )
}
