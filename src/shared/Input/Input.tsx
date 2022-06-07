import { FC } from 'react'
import { StyledInput } from './styled'

export const Input = ({ children, ...props }) => {
  return <StyledInput {...props} />
}
