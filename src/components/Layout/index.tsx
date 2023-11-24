import { ReactNode } from 'react'
import { Heading, Flex, Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <main>
      <Box
        m="4rem"
      >
        <Box>
          { children }
        </Box>
      </Box>
    </main>
  )
}

