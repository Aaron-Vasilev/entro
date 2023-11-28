import { ReactNode } from 'react'
import { Flex, Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <main>
      <Flex
        m="4rem"
        justify="center"
      >
        <Box
          width="680px"
        >
          { children }
        </Box>
      </Flex>
    </main>
  )
}

