"use client"

import { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { TaskList } from '../components/TaskList'
import { useAppDispatch, RootState } from '../store'
import { getTasks } from '../store/slices/taskSlice'
import { TaskForm } from '../components/TaskForm'
import { Header } from '../components/MainPageHead'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Task } from '@/prisma/generated'

export default function HomePage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [creation, setCreation] = useState(false)
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const loading = useSelector((state: RootState) => state.tasks.loading)

  function openTask(task: Task) {
    router.push(`task/${task.id}`)
  }

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <VStack 
      spacing={5}
      align="stretch"
    >
      <Header 
        creation={creation}
        setCreation={setCreation}
      />
      { creation && <TaskForm setCreation={setCreation} /> }
      <TaskList 
        tasks={tasks}
        clickOnTask={openTask}
        loading={loading}
      />
    </VStack>
  )
}
