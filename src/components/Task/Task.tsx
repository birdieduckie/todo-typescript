import { FC } from 'react'

import { useAppDispatch } from '../../hooks/store'
import { deleteTask } from '../../store/reducers/tasksSlice'

import { Container, Close, Text, Check } from './styled'

interface TaskProps {
  id: number | string
  text: string
  checked: boolean
}

export const Task: FC<TaskProps> = ({ id, text, checked }) => {
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => dispatch(deleteTask(id))

  return (
    <Container>
      <Check type="checkbox" />
      <Text>{text}</Text>
      <Close type="reset" onClick={handleDeleteTask}>
        Удалить
      </Close>
    </Container>
  )
}
