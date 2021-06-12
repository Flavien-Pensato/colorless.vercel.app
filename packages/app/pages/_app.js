import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactGA from 'react-ga'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  ReactGA.initialize('UA-46017345-5')

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
