import { Flex } from '@chakra-ui/react'
import styles from './styles.module.css'

export default function Loading() {
  return (
    <Flex justify="center">
      <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    </Flex>
  )
}
