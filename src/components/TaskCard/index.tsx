import { Box, Flex } from '@chakra-ui/react'
import { Task } from '../../prisma/generated'
import { TaskInfo } from '../TaskInfo'
import { TaskStatus } from '../TaskStatus'

interface Props {
  task: Task
  clickOnTask: Function
}

export function TaskCard({ task, clickOnTask }: Props) {

  function handleClick() {
    clickOnTask(task)
  }

  return (
    <Box 
      cursor="pointer"
      overflow="hidden" 
      borderWidth="1px"
      borderColor="secondary.100"
      borderRadius="10px"
      px="32px"
      py="28px"
      boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
      _hover={{
        transitionDuration: "0.25s",
        transitionTimingFunction: "ease-in-out",
        boxShadow: `0px 12px 16px -4px rgba(16, 24, 40, 0.08), 
                    0px 4px 6px -2px rgba(16, 24, 40, 0.03)`,
      }}
      onClick={handleClick}
    >
      <Flex
        justifyContent="space-between"
      >
        <TaskInfo
          task={task}
        />
        <TaskStatus
          task={task}
        />
      </Flex>
    </Box>
  )
}

