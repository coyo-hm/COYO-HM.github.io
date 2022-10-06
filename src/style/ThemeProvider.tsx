import { ThemeProvider as DefaultThemeProvider } from '@emotion/react'
import { theme } from './theme'

const ThemeProvider = ({ children }: { children: any }) => {
  return <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
}

export default ThemeProvider
