import { ThemeProvider } from '@emotion/react'

import { Home } from './pages'
import { Theme, GlobalStyle } from './styles'

export const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
)

