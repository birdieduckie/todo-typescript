import { FC } from 'react'
import { idText } from 'typescript'

import { useAppDispatch } from '../../hooks/store'
import { deleteTask, toggleTask } from '../../store/reducers/tasksSlice'

import { Container, Close, Text, Check } from './styled'

interface TaskProps {
  id: string
  text: string
  checked: boolean
}

export const Task: FC<TaskProps> = ({ id, text, checked }) => {
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => dispatch(deleteTask(id))
  const handleToggleTask = () => dispatch(toggleTask(id))
  return (
    <Container>
      <Check type="checkbox" onClick={handleToggleTask} />
      <Text>{text}</Text>
      <Close type="reset" onClick={handleDeleteTask}>
        Удалить
      </Close>
    </Container>
  )
}
