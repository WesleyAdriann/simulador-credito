import styled from '@emotion/styled'

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.gray};
  font-size: 32px;
  line-height: 32px;
  margin: 36px 0 48px;
  max-width: 600px;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(2, 1fr) 1.5fr;
  grid-template-areas:
    "installments warranty card"
    "warranty-value warranty-range card"
    "loan loan-range card";
  width: 80%;
`

export const QuotaWrapper = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 300;
    line-height: 40px;
  }

  strong {
    color: var(--dove-gray);
    font-size: 22px;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary.surf};
    font-size: 28px;
    font-weight: bold;
  }
`

export const CardTextWrapper = styled.div`
  text-align: center;

h4 {
  font-weight: bold;
  line-height: 32px;
}
`
