import { useCallback, useEffect, useState } from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'
import { debounce } from 'lodash'
import { changeTask } from '@/store/slices/taskSlice'

export function TaskInfoEdit() {
  const dispatch = useAppDispatch()
  const task = useSelector((state: RootState) => state.tasks.activeTask)
  const cardInfo = `${task.assigneeName} · ${task.creationDate}`
  const [title, setTitle] = useState(task.title)
  const debounceFn = useCallback(debounce(handleDebounceFn, 1000), []);

  async function handleDebounceFn(title: string) {
    dispatch(changeTask({ id: task.id, title }))
  }

  function handleChange (event: any) {
      setTitle(event.target.value)
      debounceFn(event.target.value)
  }

  useEffect(() => {
    setTitle(task.title)
  }, [task.id])

  return (
    <Flex
      gap="24px"
      borderBottom="1px solid"
      borderBottomColor="rgba(152, 162, 179, 0.4)"
      pb="24px"
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
      <Box
        flexGrow={1}
      >
        <Input
          size="14px"
          fontWeight="bold"
          borderRadius="4px"
          mb="8px"
          border="none"
          outline="primary.1000"
          value={title}
          onChange={handleChange}
        />
        <Text
          textColor="secondary.500"
        >
          {cardInfo}
        </Text>
      </Box>
    </Flex>
  )
}
