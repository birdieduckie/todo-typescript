import { FC } from 'react'

import { StyledButton } from './styled'

interface ButtonProps {
  type: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: any
}

export const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  )
}
