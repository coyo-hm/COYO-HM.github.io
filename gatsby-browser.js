import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import CustomThemeProvider from './src/style/ThemeProvider'

export const wrapRootElement = ({ element }) => (
  <CustomThemeProvider>{element}</CustomThemeProvider>
)
