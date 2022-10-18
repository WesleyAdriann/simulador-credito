import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.manga};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary.void};
  cursor: pointer;
  clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px);
  font-family: ${({ theme }) => theme.fontFamily.jetBrainsMono};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 8px 18px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  width: 100%;

  /* &:hover {
    filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
  } */

  &:active {
    transform: scale(0.95);
  }
`
