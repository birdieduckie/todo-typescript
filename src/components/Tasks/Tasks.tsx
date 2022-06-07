import { FC, useEffect } from 'react'

import { useAppSelector } from '../../hooks/store'
import { useSave } from '../../hooks/useSave'

import { setTasks, Task as TaskType } from '../../store/reducers/tasksSlice'

import { Task } from '../Task/Task'

import { Container } from './styled'

interface TasksProps {}

const TASKS_NAME = 'tasks'

export const Tasks: FC<TasksProps> = () => {
  const tasks = useAppSelector((state) => state.tasks)

  useSave<TaskType>(tasks, TASKS_NAME, setTasks)

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
