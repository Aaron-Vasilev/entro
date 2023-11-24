"use client"

import { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { TaskList } from '../components/TaskList'
import { useAppDispatch, RootState } from '../store'
import { getTasks, setRelatedTasks, setTasks } from '../store/slices/taskSlice'
import { TaskForm } from '../components/TaskForm'
import { Header } from '../components/MainPageHead'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const [creation, setCreation] = useState(false)
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

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
        clickOnTask={() => {}}
      />
    </VStack>
  )
}
