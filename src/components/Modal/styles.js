import styled from '@emotion/styled'

import { ReactComponent as CloseSvg } from '../../assets/images/close_FILL.svg'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ isVisible }) => `#000000${isVisible ? '44' : '00'}`};
  cursor: pointer;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: absolute;
  transition: all 0.2s ease 0s;
  width: 100vw;
  z-index: ${({ isVisible }) => isVisible ? '2' : '-1'};
`
export const ModalCard = styled.div`
  background-color: white;
  border-radius: 4px;
  cursor: default;
  max-height: 360px;
  max-width: 360px;
  min-height: 340px;
  min-width: 340px;
  padding: 16px;
`

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`

export const Title = styled.p`
  flex: 1;
  font-size: 24px;
`

export const CloseIcon = styled(CloseSvg)`
  cursor: pointer;
`

export const DescriptionWrapper = styled.div``

export const Description = styled.p`
  line-height: 1.4;
  white-space: pre-line;
  word-wrap: break-word;
`
