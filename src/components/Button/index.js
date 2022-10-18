import { memo } from 'react'

import { Container } from './styles'

const Component = ({ children, ...props }) => (
  <Container as='button'>{children}</Container>
)

export const Button = memo(Component)
