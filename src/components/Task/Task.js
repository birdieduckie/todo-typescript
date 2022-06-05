import { Container, Close, Text, Check } from './styled'

export const Task = ({ id, value }) => {
  return (
    <Container>
      <Check></Check>
      <Text>{value}</Text>
      <Close type='danger'>Удалить</Close>
    </Container>
  )
}
