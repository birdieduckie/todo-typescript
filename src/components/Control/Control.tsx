import { ChangeEvent, FC, useState } from 'react'

import { addTask } from '../../store/reducers/tasksSlice'
import { useAppDispatch } from '../../hooks/store'

import { Button } from '../../shared/Button/Button'

import { Container, Field } from './styled'

interface ControlProps {}

export const Control: FC<ControlProps> = () => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const setTask = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTask(inputValue))
    }
  }
  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setTask()
      setInputValue('')
    }
  }

  return (
    <Container>
      <Field
        placeholder="Введите задачу"
        onChange={handleSetInputValue}
        value={inputValue}
        onKeyDown={handleEnter}
      />
      <Button type="button" onClick={setTask}>
        Сохранить
      </Button>
    </Container>
  )
}
