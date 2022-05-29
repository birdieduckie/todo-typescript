import { useState } from "react"
import { Button } from "../../shared/Button/Button"
import { Container, Field } from './styled'

export const Control = ({ handleSetTask }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const setTask = () => {
    handleSetTask(inputValue);
    setInputValue('')
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      setTask()
    }
  }

  return (
    <Container>
      <Field placeholder='Введите задачу' value={inputValue} onChange={handleSetInputValue} onKeyDown={handleEnter} />
      <Button type='primary' onClick={setTask}>Сохранить</Button>
    </Container>
  )
}