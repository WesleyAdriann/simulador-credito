import { Header, ContentWrapper } from '../../components'

import { Title } from './styles'

export const Home = () => (
  <div>
    <Header />
    <ContentWrapper backgroundColor='manga' as='section'>
      <Title>
        Realize uma simulação de crédito utilizando seu bem como garantia
      </Title>
    </ContentWrapper>
  </div>
)
