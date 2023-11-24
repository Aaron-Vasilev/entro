import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Task } from '../../prisma/generated'
import Image from 'next/image'

interface Props {
  task: Task
}

export function TaskInfo({ task }: Props) {

  function cardInfo(): string {
    return `${task.assigneeName} · ${task.creationDate}`
  }

  return (
    <Flex
      gap="24px"
    >
      <Flex
        height="64px"
        width="64px"
        bg="primary.1000"
        justify="center"
        borderRadius="6px"
      >
        <Image
          src="/taskdone.svg" alt="left arrow" width={40} height={40}
        />
      </Flex>
      <Box>
        <Heading
          size="14px"
          mb="8px"
        >
          {task.title}
        </Heading>
        <Text
          textColor="secondary.500"
        >
          {cardInfo()}
        </Text>
      </Box>
    </Flex>
  )
}
