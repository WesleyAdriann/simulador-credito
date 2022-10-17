import {
  Header,
  ContentWrapper,
  Input,
  Card,
  Button,
} from '../../components'

import {
  Title,
  Grid,
  QuotaWrapper,
  AmountWrapper,
  TaxWrapper
} from './styles'

export const Home = () => (
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
          selectOptions={['24', '36', '48']}
        />
        <Input
          gridArea='warranty'
          as='select'
          label='Garantia'
          selectOptions={['Veículo', 'Imóvel']}
        />
        <Input
          gridArea='warranty-value'
          label='Valor da Garantia'
        />
        <Input
          as='range'
          gridArea='warranty-range'
          range={{
            min: '0',
            max: '100',
            // value: '20',
            step: '10',
            helper: ['12.000', '24.000']
          }}
        />
        <Input
          gridArea='loan'
          label='Valor do Empréstimo'
        />
        <Input
          as='range'
          gridArea='loan-range'
          range={{
            min: '0',
            max: '100',
            // value: '20',
            step: '10',
            helper: ['30.000', '60.000']
          }}
        />
        <Card gridArea='card'>
          <QuotaWrapper>
            <h4>Valor da Parcela</h4>
            <div>
              <strong>R$</strong>
              <span>465,00</span>
            </div>
          </QuotaWrapper>
          <AmountWrapper>
            <h4>Total a pagar</h4>
            <p>R$ 11.112,00</p>
          </AmountWrapper>
          <TaxWrapper>
            <h4>Taxa de juros (mês)</h4>
            <p>111,12%</p>
          </TaxWrapper>
          <Button>Solicitar</Button>
        </Card>
      </Grid>
    </ContentWrapper>
  </div>
)
