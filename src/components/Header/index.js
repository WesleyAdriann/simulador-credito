import { ReactComponent as Logo } from '../../assets/images/Hfest-Badge-Manga.svg'

import { Wrapper ,Container, Text  } from './styles'

export const Header = () => (
  <Wrapper>
    <Container>
      <Logo width={80} height={80}/>
      <Text>ajuda</Text>
    </Container>
  </Wrapper>
)
