import { Wrapper, Container } from './styles'

export const ContentWrapper = ({ children, backgroundColor, as = 'div' }) => (
  <Wrapper backgroundColor={backgroundColor} as={as}>
    <Container>
      {children}
    </Container>
  </Wrapper>
)
