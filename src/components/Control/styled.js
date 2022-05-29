import styled from "styled-components";

import { Input } from "../../shared/Input/Input";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Field = styled(Input)`
  margin: 0 10px 0 0;
`
