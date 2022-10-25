import { useState, useMemo, useCallback } from 'react'

import {
  Header,
  ContentWrapper,
  Input,
  Card,
  Button,
} from '../../components'

import database from '../../infra/database.json'
import {
  formatNumber,
  range2Value,
  value2Range,
  dot2Comma
} from '../../utils'

import {
  Title,
  Grid,
  QuotaWrapper,
  CardTextWrapper
} from './styles'

export const Home = () => {
  const [warranties, warrantiesId] = useMemo(() =>
    database.warranties.reduce((acc, value) => [[...acc[0], value.name], [...acc[1], value.id]], [[], []])
  , [])
  const [warranty, setWarranty] = useState(database.warranties[0])
  const [formValues, setFormValues] = useState({
    warrantyRange: 0.5,
    warranty: range2Value(warranty.warranty_range, 0.5),
    loanRange: 0.5,
    loan: range2Value(warranty.loan_range, 0.5),
    installments: warranty.installments[0]
  })

  const handleChangeWarrantyType = useCallback((event) => {
    const id = event.target.value
    setWarranty(database.warranties[id])
  }, [])

  const handleChangeRange = useCallback((type) => (event) => {
    const floatValue = parseInt(event.target.value) / 100
    const value = range2Value(warranty[`${type}_range`], floatValue)
    setFormValues((prev) => ({
      ...prev,
      [`${type}Range`]: floatValue,
      [type]: value
    }))
  }, [warranty])

  const handleChangeAmount = useCallback((type) => (event) => {
    const inputValue = event.target.value.replace(/\D/g) || '0'
    const value = parseInt(inputValue, '')
    const floatValue = value2Range(warranty[`${type}_range`], value)
    setFormValues((prev) => ({
      ...prev,
      [`${type}Range`]: floatValue,
      [type]: value
    }))
  }, [warranty])

  const handleChangeInstallments = useCallback((event) => {
    setFormValues((prev) => ({
      ...prev,
      installments: parseInt(event.target.value)
    }))
  }, [])

  const totalValue = (database.iof + database.interest_rate + formValues.installments + 1) * formValues.loan
  const installmentValue = totalValue / formValues.installments

  return (
    <div>
      <Header />
      <ContentWrapper
        as='section'
        backgroundColor='manga'
        flexDirection='column'
      >
        <Title>
          Realize uma simulação de crédito utilizando seu bem como garantia.
        </Title>
        <Grid>
          <Input
            as='select'
            gridArea='installments'
            label='Número de parcelas'
            onChange={handleChangeInstallments}
            selectOptions={warranty.installments}
          />
          <Input
            gridArea='warranty'
            as='select'
            label='Garantia'
            onChange={handleChangeWarrantyType}
            selectOptions={warranties}
            selectOptionsValue={warrantiesId}
          />
          <Input
            gridArea='warranty-value'
            label='Valor da Garantia'
            onChange={handleChangeAmount('warranty')}
            value={formValues.warranty}
          />
          <Input
            as='range'
            gridArea='warranty-range'
            onChange={handleChangeRange('warranty')}
            range={{
              min: 0,
              max: 100,
              value: formValues.warrantyRange * 100,
              step: 10,
              helper: warranty.warranty_range.map(formatNumber)
            }}
          />
          <Input
            gridArea='loan'
            label='Valor do Empréstimo'
            onChange={handleChangeAmount('loan')}
            value={formValues.loan}
          />
          <Input
            as='range'
            gridArea='loan-range'
            onChange={handleChangeRange('loan')}
            range={{
              min: 0,
              max: 100,
              value: formValues.loanRange * 100,
              step: 10,
              helper: warranty.loan_range.map(formatNumber)
            }}
          />
          <Card gridArea='card'>
            <QuotaWrapper>
              <h4>Valor da Parcela</h4>
              <div>
                <strong>R$ </strong>
                <span>{formatNumber(installmentValue, true)}</span>
              </div>
            </QuotaWrapper>
            <CardTextWrapper>
              <h4>Total a pagar</h4>
              <p>R$ {formatNumber(totalValue, true)}</p>
            </CardTextWrapper>
            <CardTextWrapper>
              <h4>Taxa de juros (mês)</h4>
              <p>{dot2Comma((database.iof + database.interest_rate) * 100)}%</p>
            </CardTextWrapper>
            <Button>Solicitar</Button>
          </Card>
        </Grid>
      </ContentWrapper>
    </div>
  )
}
