import * as React from 'react'

const prefersColorScheme = '(prefers-color-scheme: dark)'
const matchMedia =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia
    : () => ({
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
      })

export type ThemeMode = 'light' | 'dark'

export const useDetectTheme = () => {
  const [mode, setMode] = React.useState<ThemeMode>(matchMedia(prefersColorScheme).matches ? 'dark' : 'light')
  const modeMe = (e: any) => setMode(e.matches ? 'dark' : 'light')

  React.useEffect(() => {
    matchMedia(prefersColorScheme).addEventListener('change', modeMe)
    return matchMedia(prefersColorScheme).removeEventListener('change', modeMe)
  }, [])
  return mode
}
