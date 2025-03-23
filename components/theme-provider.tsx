"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import type { ReactNode } from "react"

// Definindo o tipo correto para as props
interface ThemeProviderProps {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force dark theme by setting forcedTheme to "dark"
  return (
    <NextThemeProvider {...props} forcedTheme="dark">
      {children}
    </NextThemeProvider>
  )
}

