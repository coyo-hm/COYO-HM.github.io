import '@style/globals.css'
import '@style/tailwind.css'
import '@style/prism-plus.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
