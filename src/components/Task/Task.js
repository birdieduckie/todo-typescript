import { Container, Close, Text, Check } from "./styled"

export const Task = ({ id, value, isChecked, handleDeleteTask, handleCompleteTask }) => {
  const deleteTask = () => {
    handleDeleteTask(id)
  }

  const changeStatus = () => {
    handleCompleteTask(id)
  }

  return (
    <Container>
      <Check checked={isChecked} onChange={changeStatus}></Check>
      <Text>{value}</Text>     
      <Close type='danger' onClick={deleteTask}>Удалить</Close>
    </Container>
  )
}