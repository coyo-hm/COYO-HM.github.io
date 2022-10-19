import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

const CustomThemeProvider = ({ children }: { children: any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
