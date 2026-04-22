import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
  defineTextStyles,
  defineSemanticTokens,
} from "@chakra-ui/react"

const tokens = defineTokens({
  colors: {
    navy: {
      900: { value: "#1E2A38" },
      800: { value: "#2C3A4A" },
      700: { value: "#313E51" },
      600: { value: "#3B4D66" },
      500: { value: "#4B6077" },
    },
    quiz: {
      purple: { value: "#A729F5" },
      purpleHover: { value: "#D394FA" },
      green: { value: "#26D782" },
      red: { value: "#EE5454" },
      lightGrey: { value: "#F4F6FA" },
      greyNavy: { value: "#626C7F" },
      bluishGrey: { value: "#ABC1E1" },
      white: { value: "#FFFFFF" },
      darkNavy: { value: "#313E51" },
    },
    subject: {
      htmlBg: { value: "#FFF1E9" },
      htmlIcon: { value: "#FF7E35" },
      cssBg: { value: "#E0FDEF" },
      cssIcon: { value: "#2FD887" },
      jsBg: { value: "#EBF0FF" },
      jsIcon: { value: "#306AFF" },
      a11yBg: { value: "#F6E7FF" },
      a11yIcon: { value: "#A729F5" },
    },
  },
  fonts: {
    heading: { value: "'Rubik', sans-serif" },
    body: { value: "'Rubik', sans-serif" },
  },
})

const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      page: {
        value: { _light: "{colors.quiz.lightGrey}", _dark: "{colors.navy.700}" },
      },
      card: {
        value: { _light: "{colors.quiz.white}", _dark: "{colors.navy.600}" },
      },
    },
    fg: {
      heading: {
        value: { _light: "{colors.navy.700}", _dark: "{colors.quiz.white}" },
      },
      body: {
        value: { _light: "{colors.quiz.greyNavy}", _dark: "{colors.quiz.bluishGrey}" },
      },
      option: {
        value: { _light: "{colors.navy.700}", _dark: "{colors.quiz.white}" },
      },
      optionLetter: {
        value: { _light: "{colors.quiz.greyNavy}", _dark: "{colors.quiz.greyNavy}" },
      },
    },
  },
})

const textStyles = defineTextStyles({
  displayLg: {
    description: "Large display heading for welcome text",
    value: {
      fontFamily: "Rubik",
      fontWeight: "300",
      fontSize: "64px",
      lineHeight: "1",
      letterSpacing: "-0.02em",
    },
  },
  displayMd: {
    description: "Medium display for bold emphasis",
    value: {
      fontFamily: "Rubik",
      fontWeight: "500",
      fontSize: "64px",
      lineHeight: "1",
      letterSpacing: "-0.02em",
    },
  },
  headingLg: {
    description: "Large heading for questions",
    value: {
      fontFamily: "Rubik",
      fontWeight: "500",
      fontSize: "36px",
      lineHeight: "1.2",
    },
  },
  headingSm: {
    description: "Small heading for options",
    value: {
      fontFamily: "Rubik",
      fontWeight: "500",
      fontSize: "28px",
      lineHeight: "1",
    },
  },
  bodyLg: {
    description: "Large body text",
    value: {
      fontFamily: "Rubik",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "1.5",
    },
  },
  bodyMd: {
    description: "Medium body text",
    value: {
      fontFamily: "Rubik",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "1.5",
    },
  },
  bodySm: {
    description: "Small body text",
    value: {
      fontFamily: "Rubik",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.5",
    },
  },
})

const config = defineConfig({
  theme: {
    tokens,
    semanticTokens,
    textStyles,
  },
})

const system = createSystem(defaultConfig, config)

export default system
