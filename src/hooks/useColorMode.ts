import { useTheme } from "next-themes"

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()

  return {
    colorMode: resolvedTheme as "light" | "dark",
    toggleColorMode: () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    },
    setColorMode: setTheme,
  }
}
