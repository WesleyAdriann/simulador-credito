import { Header, ContentWrapper, Input } from '../../components'

import { Title } from './styles'

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
      <Input
        as='select'
        label='Número de parcelas'
        selectOptions={['24', '36', '48']}
      />
      <Input
        as='select'
        label='Garantia'
        selectOptions={['Veículo', 'Imóvel']}
      />
      <Input label='Valor da Garantia'/>
      <Input
        as='range'
        range={{
          min: '0',
          max: '100',
          // value: '20',
          step: '10',
          helper: ['12.000', '24.000']
        }}
      />
      <Input label='Valor do Empréstimo'/>
      <Input
        as='range'
        range={{
          min: '0',
          max: '100',
          // value: '20',
          step: '10',
          helper: ['30.000', '60.000']
        }}
      />
    </ContentWrapper>
  </div>
)
