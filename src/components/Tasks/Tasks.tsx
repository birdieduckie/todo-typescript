import { Task } from '../Task/Task'

import { Container } from './styled'

export const Tasks = ({ tasks, handleDeleteTask, handleCompleteTask }) => {
  return (
    <Container>
      {tasks.map(task => 
        <Task
          key={task.id}
          id={task.id}
          isChecked={task.isChecked}
          value={task.value}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      )}
    </Container>
  )
}