"use client"

import { Flex, Box, Heading } from '@chakra-ui/react'
import { Task } from '@/prisma/generated/'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { TaskInfo } from '@/components/TaskInfo'
import { TaskDetail } from '@/components/TaskDetail'
import { RelatedWatchers } from '@/components/RelatedWatchers'
import { getTask } from '@/store/slices/taskSlice'
import { RootState, useAppDispatch } from '@/store'
import { Button } from '@/components/Button'
import { useSelector } from 'react-redux'
import Loading from '@/components/TaskList/loading'


export default function TaskPage({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch()
  const activeTask = useSelector((state: RootState) => state.tasks.activeTask)
  const router = useRouter()
  const goHome = () => { router.push('/') }

  function clickOnTask(task: Task) {
    router.push(`/task/${task.id}`)
  }

  useEffect(() => {
    dispatch(getTask(+params.id))
  }, [activeTask])

  if (!activeTask?.id) return <Loading/>

  return (
    <>
      <Flex
        gap="20px"
        align="center"
        mb="20px"
      >
        <Heading
          fontSize="22"
        >
          Tasks
        </Heading>
        <Button
          value='Home'
          handler={goHome}
          type='secondary'
          alignTextCenter
        />
      </Flex>
    <Box
      py="32px"
      px="28px"
      bg="secondary.50"
    >
      <Box
        borderBottom="1px solid"
        borderBottomColor="rgba(152, 162, 179, 0.4)"
        pb="24px"
      >
        <TaskInfo
          task={activeTask}
        />
      </Box>
      <TaskDetail
        task={activeTask}
      />
      <Box
        mt="74px"
      >
        <RelatedWatchers clickOnTask={clickOnTask}/>
      </Box>
    </Box>
    </>
  )
}
