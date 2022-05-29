import styled from "styled-components";
import { Button } from "../../shared/Button/Button";

export const Check = styled.input.attrs({ type: "checkbox" })`
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 15px;
  height: 100%;
  padding: 12px 16px;
  border: 2px solid #DEDEE3;
  border-radius: 4px;
`

export const Close = styled(Button)`
  margin: 0 0 0 15px;
  height: 50px;
`

export const Text = styled.div`
  word-break: break-word;
`