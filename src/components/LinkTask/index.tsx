import { Button, Box, Heading, Input, Flex } from "@chakra-ui/react"
import { Task } from '../../prisma/generated'
import { useSelector } from "react-redux"
import Image from "next/image"
import { RootState, useAppDispatch } from "../../store"
import { useCallback, useState } from "react"
import { TaskList } from "../TaskList"
import { addRelation } from "@/store/slices/taskSlice"
import { debounce } from "lodash"

export function LinkTask() {
  const dispatch = useAppDispatch()
  const activeTask = useSelector((state: RootState) => state.tasks.activeTask)
  const [searchTasks, setSearchTasks] = useState<Task[]>([])
  const [inputIsShown, setInputIsShown] = useState(false)
  const [searchWord, setSearchWord] = useState('')
  const [loading, setLoading] = useState(false)
  const debounceFn = useCallback(debounce(handleDebounceFn, 1000), []);


  async function handleDebounceFn(value: string) {
    const res = await fetch(`/api/tasks?query=${value}&task=${activeTask.id}`)
    const tasksResult = await res.json()
    setLoading(false)
    setSearchTasks(tasksResult)
  }

  async function handleInput(e: any) {
    const value = e.target.value

    if (value === '') {
      setSearchTasks([])
      setSearchWord('')
      return
    }

    setLoading(true)
    setSearchWord(value)
    debounceFn(value)
  }

  function hide() {
    setInputIsShown(false)
    setSearchTasks([])
  }

  async function handleClick (task: Task) {
    const result = await dispatch(addRelation(task.id))

    if (result.meta.requestStatus === 'fulfilled') {
      setInputIsShown(false)
      setSearchWord('')
    }
  }

  if (inputIsShown) {
    return (
      <Flex
        direction="column"
        py="27px"
      >
        <Input 
          value={searchWord}
          onChange={handleInput}
        />
          <TaskList 
            tasks={searchTasks}
            clickOnTask={handleClick}
            loading={loading}
          />
        <Button
          mt="12px"
          bg="none"
          onClick={hide}
        >
          <Heading
            fontSize="md"
            display="flex"
            gap="11px"
          >
            Hide
          </Heading>
        </Button>
      </Flex>
    )
  }

  return (
      <Box
        py="27px"
      >
        <Button
          bg="none"
          onClick={() => setInputIsShown(true)}
        >
          <Heading
            fontSize="md"
            display="flex"
            gap="11px"
          >
            <Image
              src="/cross.svg" alt="left arrow" width={14} height={14}
            />
            Link to other tasks
          </Heading>
        </Button>
      </Box>
  )
}
