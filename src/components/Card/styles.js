import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.void};
  border-radius: 4px;
  box-shadow: 0px -6px 2px -2px ${({ theme }) => theme.colors.secondary.surf};
  color: ${({ theme }) => theme.colors.primary.manga};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 28px;
  /* min-width: 35%; */

  ${({ gridArea }) => !!gridArea && css`
    grid-area: ${gridArea};
  `}
`
