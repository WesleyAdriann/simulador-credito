import { ContentWrapper } from '../ContentWrapper'

import { ReactComponent as Logo } from '../../assets/images/Hfest-Badge-Manga.svg'

import { LogoWrapper, Title ,Text } from './styles'

export const Header = () => (
  <ContentWrapper as='header'>
    <LogoWrapper>
      <Logo width={80} height={80} />
      <Title as='h1'>Simulador de Crédito</Title>
    </LogoWrapper>
    <Text>ajuda</Text>
  </ContentWrapper>
)
