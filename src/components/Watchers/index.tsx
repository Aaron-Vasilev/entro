import { Watcher } from "@/prisma/generated"
import { RootState } from "@/store"
import Image from "next/image"
import { Button, Box, Heading, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Loading from "../TaskList/loading"

export function Wathcers() {
  const activeTaskId = useSelector((state: RootState) => state.tasks.activeTask.id)
  const [watchers, setWatchers] = useState<Watcher[]>([])
  const [loading, setLoading] = useState(true)

  async function askName() {
    const name = prompt('What is your name?')
    if (name && name.length) {
      fetch(`/api/watcher/${activeTaskId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
      })
        .then(res =>  res.json())
        .then(wather => {
          setWatchers([...watchers, wather])
          setLoading(false)
        })
      }
  }

  useEffect(() => {
    fetch(`/api/watcher/${activeTaskId}`)
      .then(res =>  res.json())
      .then(arr => {
        setLoading(false)
        setWatchers(arr)
      })
  }, [])

  if (loading) return <Loading/>

  return (
    <Box>
      <Flex
        flexDir="column"
        gap="12px"
      >
        {watchers.map(w => <Box
          borderWidth="1px"
          borderColor="secondary.100"
          borderRadius="10px"
          px="16px"
          py="14px"
          boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
          _hover={{
            transitionDuration: "0.25s",
            transitionTimingFunction: "ease-in-out",
            boxShadow: `0px 12px 16px -4px rgba(16, 24, 40, 0.08), 
                        0px 4px 6px -2px rgba(16, 24, 40, 0.03)`,
          }}
          key={w.id}
        >
          {w.name}
        </Box>)}
        </Flex>
      <Box
        py="27px"
      >
        <Button
          bg="none"
          onClick={askName}
        >
          <Heading
            fontSize="md"
            display="flex"
            gap="11px"
          >
            <Image
              src="/cross.svg" alt="left arrow" width={14} height={14}
            />
            Subscribe
          </Heading>
        </Button>
      </Box>
    </Box>
  )
}
