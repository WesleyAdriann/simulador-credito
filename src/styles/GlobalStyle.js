import { Global, css } from '@emotion/react'

import { Theme } from './Theme'

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto&display=swap');

  body {
    background-color: ${Theme.colors.primary.manga};
  }

  * {
    box-sizing: border-box;
    font-family: ${Theme.fontFamily.roboto}, sans-serif;
    margin: 0;
    padding: 0;
  }
`

export const GlobalStyle = () => <Global styles={style}/>

