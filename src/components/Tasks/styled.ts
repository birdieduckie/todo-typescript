import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
