import { Flex } from "@chakra-ui/react"
import { Task } from '../../prisma/generated'
import { TaskCard } from "../TaskCard"
import Loading from "./loading"

interface Props {
  tasks: Task[]
  clickOnTask: Function
  loading?: boolean
}

export function TaskList({ tasks, clickOnTask, loading }: Props) {

  if (loading) return <Loading />

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

