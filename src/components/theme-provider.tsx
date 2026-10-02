"use client"

import * as React from "react"

// Minimal theme provider — same API shape as next-themes for { theme, setTheme }.
// Deliberately renders NO <script> element: next-themes (even v0.4) injects a
// blocking <script> inside the client tree, which React 19 + Next 16 rejects
// with "Encountered a script tag while rendering React component".
// Pre-hydration theme is set by a beforeInteractive script in the root layout.

type ThemeContextValue = {
  theme: string
  setTheme: (theme: string) => void
  resolvedTheme?: string
  systemTheme?: "light" | "dark"
  themes: string[]
}

const STORAGE_KEY = "theme"

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  themes: ["light", "dark", "system"],
})

export const useTheme = () => React.useContext(ThemeContext)

function systemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark"
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  } catch {
    return "dark"
  }
}

function applyTheme(theme: string) {
  const resolved = theme === "system" ? systemTheme() : theme
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: React.ReactNode
  defaultTheme?: string
  // next-themes-compatible props we intentionally ignore
  attribute?: string
  disableTransitionOnChange?: boolean
  enableSystem?: boolean
}) {
  const [theme, setThemeState] = React.useState<string>(defaultTheme)

  // Read the persisted theme after mount (server renders default, no mismatch)
  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "light" || stored === "dark" || stored === "system") {
        setThemeState(stored)
        return
      }
    } catch {
      /* private mode */
    }
    applyTheme(defaultTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = React.useCallback((next: string) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode */
    }
  }, [])

  const sys = systemTheme()
  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? sys : theme,
      systemTheme: sys,
      themes: ["light", "dark", "system"],
    }),
    [theme, setTheme, sys]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
