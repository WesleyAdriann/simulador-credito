import { useState, useMemo, useCallback } from 'react'

import {
  Header,
  ContentWrapper,
  Input,
  Card,
  Button,
  Modal,
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

const initialForm = (guarantee) => ({
  guaranteeRange: 0.2,
  guarantee: range2Value(guarantee.guarantee_range, 0.5),
  loanRange: 0.5,
  loan: range2Value(guarantee.loan_range, 0.5),
  installments: guarantee.installments[0]
})

export const Home = () => {
  const [guarantees, guaranteesId] = useMemo(() =>
    database.guarantees.reduce((acc, value) => [[...acc[0], value.name], [...acc[1], value.id]], [[], []])
  , [])
  const [guarantee, setQuarantee] = useState(database.guarantees[0])
  const [formValues, setFormValues] = useState(initialForm(guarantee))
  const [modal, setModal] = useState({
    isVisible: false,
    title: '',
    description: '',
  })

  const totalValue = (database.iof + database.interest_rate + formValues.installments + 1) * formValues.loan
  const installmentValue = totalValue / formValues.installments

  const handleChangeQuaranteeType = useCallback((event) => {
    const dataQuarantee = database.guarantees[event.target.value]
    setQuarantee(dataQuarantee)
    setFormValues(initialForm(dataQuarantee))
  }, [])

  const handleChangeRange = useCallback((type) => (event) => {
    const floatValue = parseInt(event.target.value) / 100
    const value = range2Value(guarantee[`${type}_range`], floatValue)
    setFormValues((prev) => ({
      ...prev,
      [`${type}Range`]: floatValue,
      [type]: value
    }))
  }, [guarantee])

  const handleChangeAmount = useCallback((type) => (event) => {
    const inputValue = event.target.value.replace(/\D/g) || '0'
    const value = parseInt(inputValue, '')
    const floatValue = value2Range(guarantee[`${type}_range`], value)
    setFormValues((prev) => ({
      ...prev,
      [`${type}Range`]: floatValue,
      [type]: value
    }))
  }, [guarantee])

  const handleChangeInstallments = useCallback((event) => {
    setFormValues((prev) => ({
      ...prev,
      installments: parseInt(event.target.value)
    }))
  }, [])

  const handleSubmit = useCallback(() => {
    const formatWrapper = (value) => formatNumber(value, true)
    const description = `Número de parcelas: ${formValues.installments}
      Garantia: ${guarantee.name}
      Valor da Garantia: ${formatWrapper(formValues.guarantee)}
      Valor do Empréstimo: ${formatWrapper(formValues.loan)}
      Total: ${formatWrapper(totalValue)}
    `
    setModal({
      title: 'Sucesso',
      description,
      isVisible: true
    })
  }, [formValues.guarantee, formValues.installments, formValues.loan, guarantee.name, totalValue])

  const onCloseModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isVisible: false }))
  }, [])

  return (
    <div>
      <Modal
        {...modal}
        onClose={onCloseModal}
      />
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
            selectOptions={guarantee.installments}
          />
          <Input
            gridArea='guarantee'
            as='select'
            label='Garantia'
            onChange={handleChangeQuaranteeType}
            selectOptions={guarantees}
            selectOptionsValue={guaranteesId}
          />
          <Input
            gridArea='guarantee-value'
            label='Valor da Garantia'
            onChange={handleChangeAmount('guarantee')}
            value={formValues.guarantee}
          />
          <Input
            as='range'
            gridArea='guarantee-range'
            onChange={handleChangeRange('guarantee')}
            range={{
              min: 0,
              max: 100,
              value: formValues.guaranteeRange * 100,
              step: 10,
              helper: guarantee.guarantee_range.map(formatNumber)
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
              helper: guarantee.loan_range.map(formatNumber)
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
            <Button onClick={handleSubmit}>Solicitar</Button>
          </Card>
        </Grid>
      </ContentWrapper>
    </div>
  )
}
