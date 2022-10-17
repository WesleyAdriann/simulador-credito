import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  justify-content: center;

  ${({ gridArea }) => !!gridArea && css`
    grid-area: ${gridArea};
  `}

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
  transform: translateY(6px);
  background: transparent;
  border: none;
  -webkit-appearance: none;
  margin-top: 14px;


  &::-webkit-slider-runnable-track {
    height: 6px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary.white};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.secondary.gray};
  }

  &::-webkit-slider-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary.surf};
    -webkit-appearance: none;
    margin-top: -6px;
  }
`

export const RangeValuesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-weight: 100;
    font-size: 12px;
  }
`
