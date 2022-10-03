import { memo, useId, useMemo } from 'react'

import { normalize } from '../../utils'

import {
  Container,
  TextInput,
  Select,
  Range,
  RangeValuesWrapper
} from './styles'

const Component = ({ label, as, selectOptions = [], range = {}, ...props }) => {
  const id = useId()

  const Component = useMemo(() => {
    if(as === 'range') return (
      <>
        <Range type='range' {...props} {...range} id={id} />
        <RangeValuesWrapper>
          {
            range.helper.map((value) =>
              <span key={value}>{value}</span>
            )
          }
        </RangeValuesWrapper>
      </>
    )

    if(as === 'select') return (
      <Select as='select' {...props} id={id}>
        {
          selectOptions.map((option) =>
            <option
              key={normalize(option)}
              value={normalize(option)}
            >
              {option}
            </option>
          )
        }
      </Select>
    )
    return <TextInput type='text' {...props} id={id} />
  }, [as, id, props, range, selectOptions])

  return (
    <Container>
      {!!label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      {Component}
    </Container>
  )
}

export const Input = memo(Component)
