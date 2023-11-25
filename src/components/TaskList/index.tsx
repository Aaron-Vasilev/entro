import { useSelector } from "react-redux"
import { Flex } from "@chakra-ui/react"
import { Task } from '../../prisma/generated'
import { TaskCard } from "../TaskCard"
import { RootState } from "@/store"
import Loading from "./loading"

interface Props {
  tasks: Task[]
  clickOnTask: Function
}

export function TaskList({ tasks, clickOnTask }: Props) {
  const loading = useSelector((state: RootState) => state.tasks.loading)

  if (loading)
    return <Loading/>

  return (
    <>
      <Flex
        gap="16px"
        flexDirection="column"
      >
        {tasks.map(task =>  <TaskCard key={task.id} task={task} clickOnTask={clickOnTask} />)}
      </Flex>
    </>
  )
}

