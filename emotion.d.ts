import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    sidebarWidth: string
    headerHeight: string
    color: {
      main: string
    }
  }
}
