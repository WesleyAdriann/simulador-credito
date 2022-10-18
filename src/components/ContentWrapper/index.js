import { Wrapper, Container } from './styles'

export const ContentWrapper = ({ children, backgroundColor, as = 'div', flexDirection = 'row' }) => (
  <Wrapper
    as={as}
    backgroundColor={backgroundColor}
  >
    <Container flexDirection={flexDirection}>
      {children}
    </Container>
  </Wrapper>
)
