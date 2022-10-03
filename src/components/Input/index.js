import { memo, useId, useMemo } from 'react'

import {
  Container,
  Label,
  TextInput
} from './styles'

const Component = ({ label, component = 'text', ...props }) => {
  const id = useId()

  const Component = useMemo(() => {

    return <TextInput {...props} id={id} />
  }, [id, props])

  return (
    <Container>
      <Label htmlFor={id}>
        {label}
      </Label>
      {Component}
    </Container>
  )
}

export const Input = memo(Component)
