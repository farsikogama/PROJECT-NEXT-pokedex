import '../styles/globals.css'

// import context
import AppContext from '../contexts/AppContext'

type Props = {
  Component: any
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
