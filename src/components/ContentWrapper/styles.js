import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background-color: ${({theme, backgroundColor = 'void'}) => theme.colors.primary[backgroundColor]};
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  padding: 24px 32px;
  width: 100%;
`
