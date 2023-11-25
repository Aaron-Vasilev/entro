import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TaskList } from "../TaskList"
import { LinkTask } from "../LinkTask"
import { RootState, useAppDispatch } from "../../store"
import { getRelatedTasks } from "@/store/slices/taskSlice"
import { Wathcers } from "../Watchers"

type Tab = 'R' | 'W'

interface Props {
  clickOnTask: Function
}

export function RelatedWatchers({ clickOnTask }: Props) {
  const dispatch = useAppDispatch()
  const relatedTasks = useSelector((state: RootState) => state.tasks.relatedTasks)
  const [currentTab, setCurrentTab] = useState('R')
  const isActive = (tab: Tab): boolean => currentTab === tab

  useEffect(() => {
    dispatch(getRelatedTasks())
  }, [])

  return (
    <Box>
      <Flex
        gap="40px"
        pl="14px"
      >
        <Heading
          pb="18px"
          px="2px"
          fontSize="14px"
          borderColor="black"
          borderBottom={isActive('R') ? "2px solid" : ""}
          onClick={() => setCurrentTab('R')}
        >
          Related tasks
        </Heading>
        <Heading
          pb="18px"
          fontSize="14px"
          borderColor="black"
          borderBottom={isActive('W') ? "2px solid" : ''}
          onClick={() => setCurrentTab('W')}
        >
          Watchers
        </Heading>
      </Flex>
      { currentTab === 'R' ? 
        <>
          <TaskList tasks={relatedTasks} clickOnTask={clickOnTask}/> 
          <LinkTask />
        </>
      : 
        <Wathcers /> }
    </Box>
  )
}
