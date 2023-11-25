import styles from './styles.module.css'
import Image from 'next/image'
import { Flex, Select } from '@chakra-ui/react'
import { Task } from '../../prisma/generated'
import { useAppDispatch } from '@/store'
import { changeStatus } from '@/store/slices/taskSlice'

interface Props {
  task: Task
}

export function TaskStatus({ task }: Props) {
  const dispatch = useAppDispatch()
  function showStatuses(e: any) {
    e.stopPropagation()
  }

  function statusHander(e: any) {
    dispatch(changeStatus({ id: task.id, status: e.target.value }))
  }

  return (
    <Flex
      alignItems="center"
      borderLeft="1px solid"
      borderLeftColor="rgba(223, 227, 235, 0.4)"
      pl="32px"
      gap="25px"
    >
      <Select
        className={styles.select}
        border="1px"
        borderColor="secondary.200"
        borderRadius="6px"
        fontSize="12px"
        lineHeight="20px"
        w="100px"
        h="32px"
        pl="0"
        textAlign='center'
        onClick={showStatuses}
        onChange={statusHander}
        defaultValue={task.status}
        id="status"
        _focusVisible={{ outline: "none" }} 
      >
        <option value="Open">Open</option>
        <option value="In Porgress">In Progress</option>
        <option value="Done">Done</option>
      </Select>
      <Image
        src="/arrowLeft.svg" alt="left arrow" width={6} height={12}
      />
    </Flex>
  )
}
