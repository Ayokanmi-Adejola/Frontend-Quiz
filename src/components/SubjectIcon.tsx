import { Box, Icon } from "@chakra-ui/react"
import { CodeXml, Paintbrush2, Braces, Accessibility } from "lucide-react"

interface SubjectIconProps {
  subject: string;
  size?: "sm" | "md";
}

const subjectConfig: Record<string, { bg: string; color: string; icon: typeof CodeXml }> = {
  HTML: { bg: "subject.htmlBg", color: "subject.htmlIcon", icon: CodeXml },
  CSS: { bg: "subject.cssBg", color: "subject.cssIcon", icon: Paintbrush2 },
  JavaScript: { bg: "subject.jsBg", color: "subject.jsIcon", icon: Braces },
  Accessibility: { bg: "subject.a11yBg", color: "subject.a11yIcon", icon: Accessibility },
}

export function SubjectIcon({ subject, size = "md" }: SubjectIconProps) {
  const config = subjectConfig[subject]
  if (!config) return null

  const boxSize = size === "sm" ? "40px" : "56px"
  const iconSize = size === "sm" ? 24 : 28

  const IconComponent = config.icon

  return (
    <Box
      w={boxSize}
      h={boxSize}
      bg={config.bg}
      borderRadius="12px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <Icon color={config.color}>
        <IconComponent size={iconSize} />
      </Icon>
    </Box>
  )
}
