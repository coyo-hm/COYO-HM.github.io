/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// const React = require('react')
// const RecoilRoot = require('recoil')
// const CustomThemeProvider = require('./src/style/ThemeProvider')

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

// exports.wrapRootElement = ({ element }) => {
//   return (
//     <RecoilRoot>
//       <CustomThemeProvider>{element}</CustomThemeProvider>
//     </RecoilRoot>
//   )
// }

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
