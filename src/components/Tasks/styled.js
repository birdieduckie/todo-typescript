import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background: white;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`