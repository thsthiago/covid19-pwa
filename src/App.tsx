import React from 'react'
import GlobalStyle from 'commons/styles/global'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Main from 'pages/Main'

/* O injectFirst aplica primeiro os estilos do material ui pra depois aplicar a minha */

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  )
}

export default App
