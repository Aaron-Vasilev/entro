'use client'

import { Provider } from 'react-redux'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { store } from './'

const theme = extendTheme({
  colors: {
    primary: {
      100: "#DEE5F0",
      200: "#EEF2F8",
      1000: "#0F52BA",
    },
    secondary: {
      50: "#F7F9FC",
      100: "#F0F2F7",
      200: "#DFE3EB",
      500: "#98A2B3",
      600: "#667085",
      700: "#101828",
      1000: "#101828",
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        {children}
      </Provider>
    </ChakraProvider>
  )
}
