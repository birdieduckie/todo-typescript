import styled from "styled-components";

export const StyledInput = styled.input`
  min-width: 240px;
  padding: 10px 14px;
  font-size: 15px;
  background: #FFFFFF;
  border: 2px solid #DEDEE3;
  border-radius: 4px;
  color: #0A0D1F;
  &:focus {
    outline: none;
    border: 2px solid #4375F8;
    color: #0A0D1F; 
  };
  &::placeholder {
    color: #DEDEE3; 
  }
`