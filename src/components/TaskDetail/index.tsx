import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'
import { debounce } from 'lodash'
import { changeStatus } from '@/store/slices/taskSlice'
import { useCallback, useState } from 'react'
import { Box, Grid, Text, Textarea } from '@chakra-ui/react'

export function TaskDetail() {
  const dispatch = useAppDispatch()
  const task = useSelector((state: RootState) => state.tasks.activeTask)
  const [description, setDescription] = useState(task.description)
  const debounceFn = useCallback(debounce(handleDebounceFn, 1500), []);

  async function handleDebounceFn(description: string) {
    dispatch(changeStatus({ id: task.id, description }))
  }

  function handleChange (event: any) {
      setDescription(event.target.value)
      debounceFn(event.target.value)
  }

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      justifyItems="start"
    >
      <Detail
        label="Status"
        value={task.status}
      />
      <Detail
        label="Date Created"
        value={task.creationDate.toString()}
      />
      <Detail
        label="Assignee"
        value={task.assigneeName}
      />
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
  value: string
}

function Detail({ label, value }: Props) {
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
        w="fit-content"
        px="12px"
        py="2px"
        borderRadius="16px"
        minHeight="auto"
        bg="primary.200"
        fontSize="13px"
      >
        {value}
      </Box>
    </Box>
  )
}
