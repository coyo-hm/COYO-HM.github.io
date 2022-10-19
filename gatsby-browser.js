import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import CustomThemeProvider from './src/style/ThemeProvider'
import { RecoilRoot } from 'recoil'

export const wrapRootElement = ({ element, props }) => {
  return (
    <RecoilRoot>
      <CustomThemeProvider {...props}>{element}</CustomThemeProvider>
    </RecoilRoot>
  )
}
