import styled from '@emotion/styled'


export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.secondary.white};
  font-family: ${({ theme }) => theme.fontFamily.jetBrainsMono};
  text-transform: uppercase;
`

export const Title = styled(Text)`
  font-size: 24px;
  margin: 0 16px;
`
