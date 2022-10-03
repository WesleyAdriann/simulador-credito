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
      <Input label='Número de parcelas'/>
      <Input label='Garantia'/>
      <Input label='Valor da Garantia'/>
      <Input label='Valor do Empréstimo'/>
      <Input label='Valor do Empréstimo'/>
      <Input label='Valor do Empréstimo'/>
    </ContentWrapper>
  </div>
)
