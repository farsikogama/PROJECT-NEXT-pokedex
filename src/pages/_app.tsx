import '../styles/globals.css'
import { ReactNode } from 'react'

// import context
import AppContext from '../contexts/AppContext'

type Props = {
  Component?: ReactNode
  pageProps?: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp
