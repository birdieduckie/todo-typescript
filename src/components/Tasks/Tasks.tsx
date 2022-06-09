import { FC, useEffect } from 'react'

import { useAppSelector } from '../../hooks/store'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import {
  setTasks,
  Task as TaskType,
  TASKS_SLICE,
} from '../../store/reducers/tasksSlice'

import { Task } from '../Task/Task'

import { Container } from './styled'

interface TasksProps {}

export const Tasks: FC<TasksProps> = () => {
  const tasks = useAppSelector((state) => state.tasks)

  useLocalStorage<TaskType>(tasks, TASKS_SLICE, setTasks)

  return (
    <Container>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          checked={task.checked}
          text={task.text}
        />
      ))}
    </Container>
  )
}
