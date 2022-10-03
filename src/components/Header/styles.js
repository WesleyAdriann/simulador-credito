import styled from '@emotion/styled'

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.secondary.white};
  font-family: ${({ theme }) => theme.fontFamily.jetBrainsMono};
  text-transform: uppercase;
`
