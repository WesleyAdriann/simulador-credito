import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.white};
  border-radius: 4px;
  box-shadow: 0px -6px 2px -2px ${({ theme }) => theme.colors.secondary.surf};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  /* min-width: 35%; */
`
