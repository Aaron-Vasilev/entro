import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'
import { debounce } from 'lodash'
import { changeTask } from '@/store/slices/taskSlice'
import { useCallback, useEffect, useState } from 'react'
import { Box, Grid, Select, Text, Textarea } from '@chakra-ui/react'

export function TaskDetail() {
  const dispatch = useAppDispatch()
  const task = useSelector((state: RootState) => state.tasks.activeTask)
  const [description, setDescription] = useState(task.description)
  const debounceFn = useCallback(debounce(handleDebounceFn, 1500), []);

  async function handleDebounceFn(description: string) {
    dispatch(changeTask({ id: task.id, description }))
  }

  function handleChange (event: any) {
      setDescription(event.target.value)
      debounceFn(event.target.value)
  }

  function statusHander(e: any) {
    dispatch(changeTask({ id: task.id, status: e.target.value }))
  }

  function assigneeHandler(e: any) {
    dispatch(changeTask({ id: task.id, assigneeName: e.target.value }))
  }

  useEffect(() => {
    setDescription(task.description)
  }, [task.id])

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      justifyItems="start"
    >
      <Detail
        label="Status"
      >
        <Select
          h="18px"
          py="2px"
          borderRadius="16px"
          minHeight="auto"
          bg="primary.200"
          fontSize="13px"
          border="none"
          onChange={statusHander}
          defaultValue={task.status}
          _focusVisible={{ outline: "none" }} 
        >
          <option value="Open">Open</option>
          <option value="In Porgress">In Progress</option>
          <option value="Done">Done</option>
        </Select>
      </Detail>
      <Detail
        label="Date Created"
        value={task.creationDate.toString()}
      />
      <Detail
        label="Assignee"
      >
        <Select
          h="18px"
          py="2px"
          borderRadius="16px"
          minHeight="auto"
          bg="primary.200"
          fontSize="13px"
          border="none"
          onChange={assigneeHandler}
          defaultValue={task.assigneeName}
          _focusVisible={{ outline: "none" }} 
        >
          <option value="Unassigned">Unassigned</option>
          <option value="Beth">Beth</option>
          <option value="Dave">Dave</option>
          <option value="Emily">Emily</option>
        </Select>
      </Detail>
      <Box
        gridColumn="span 3"
        justifySelf="normal"
        p="16px"
      >
        <Box
        >
          <Text
            textColor="secondary.500"
            fontSize="13px"
            lineHeight="18px"
            mb="8px"
          >
            Description
          </Text>
          <Textarea
            w="576px"
            h="134px"
            px="16px"
            py="16px"
            borderRadius="10px"
            minHeight="auto"
            bg="primary.200"
            fontSize="13px"
            draggable="false"
            value={description}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Grid>
  )
}

interface Props {
  label: string
  value?: string
  children?: React.ReactNode
}

function Detail({ label, value, children }: Props) {
  return (
    <Box
      p="16px"
    >
      <Text
        textColor="secondary.500"
        fontSize="13px"
        lineHeight="18px"
        mb="8px"
      >
        {label}
      </Text>
      <Box
        px={value && "13px"}
        w="fit-content"
        borderRadius="16px"
        minHeight="auto"
        bg="primary.200"
        fontSize="13px"
      >
        {value || children}
      </Box>
    </Box>
  )
}
