import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '.'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Home />
      <Home />
    </ChakraProvider>
  
   )
}

export default App
