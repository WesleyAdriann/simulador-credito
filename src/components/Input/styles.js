import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & > label {
    color: ${({ theme }) => theme.colors.secondary.gray};
    font-weight: bold;
    margin-bottom: 6px;
  }
`

export const TextInput = styled.input`
  color: ${({ theme }) => theme.colors.secondary.gray};
  border: 1px solid ${({ theme }) => theme.colors.secondary.gray};
  background-color: ${({ theme }) => theme.colors.secondary.white};
  border-radius: 4px;
  padding: 12px 6px;
  min-width: 150px;

  &:focus {
    outline: none;
  }
`

export const Select = styled(TextInput)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
`

export const Range = styled(TextInput)`
  transform: translateY(12px);
`

export const RangeValuesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-weight: 100;
    font-size: 12px;
  }
`
