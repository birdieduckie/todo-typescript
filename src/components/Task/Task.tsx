import { useAppDispatch } from '../../hooks/hooks';
import { Container, Close, Text, Check } from './styled'

const dispatch = useAppDispatch();

const deleteTask = () => 
}

type TaskProps = {
  id: number;
  value: string;
  checked: boolean;
};

export const Task = ({ id, value }: TaskProps) => {
  return (
    <Container>
      <Check></Check>
      <Text>{value}</Text>
      <Close type='danger' onClick>Удалить</Close>
    </Container>
  )
}
