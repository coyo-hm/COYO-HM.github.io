import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import CustomThemeProvider from './src/style/ThemeProvider'

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}

export const wrapRootElement = ({ element, props }) => (
  <CustomThemeProvider {...props}>{element}</CustomThemeProvider>
)
