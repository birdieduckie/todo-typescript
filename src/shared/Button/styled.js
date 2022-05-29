import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  min-width: 110px;
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-size: 15px;
  cursor: pointer;

  ${p => p.type === 'primary' && css`
    background: #4375F8;
    &:hover {
      background: #2156E4;      
    };
    &:active {     
      background: #2156E4;
      color: #90ABF1;
    }
  `};

  ${p => p.type === 'danger' && css`
    background: #F9674E;
    &:hover {
      background: #F45034;
    };
    &:active {     
      background: #F45034;
      color: #F9A799;
    }
  `};
`