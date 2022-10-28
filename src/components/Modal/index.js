import { memo } from 'react'

import {
  Wrapper,
  ModalCard,
  TitleWrapper,
  Title,
  CloseIcon,
  DescriptionWrapper,
  Description
} from './styles'

const Component = ({ isVisible, onClose, title, description }) => (
  <Wrapper onClick={onClose} isVisible={isVisible}>
    {isVisible &&
      <ModalCard>
        <TitleWrapper>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} width={24} height={24} />
        </TitleWrapper>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </ModalCard>
    }
  </Wrapper>
)

export const Modal = memo(Component)
