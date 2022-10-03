import { ContentWrapper } from '../ContentWrapper'

import { ReactComponent as Logo } from '../../assets/images/Hfest-Badge-Manga.svg'

import { Text } from './styles'

export const Header = () => (
  <ContentWrapper as='header'>
    <Logo width={80} height={80}/>
    <Text>ajuda</Text>
  </ContentWrapper>
)
