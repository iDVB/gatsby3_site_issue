import React from 'react'
import {
  ModalProvider,
} from 'react-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider as ScThemeProvider } from 'styled-components'

const theme = createMuiTheme()

export const WrapRootElement = ({ element }) => {
  return (
    <ModalProvider>
      <MuiThemeProvider theme={theme}>
        <ScThemeProvider theme={theme}>{element}</ScThemeProvider>
      </MuiThemeProvider>
    </ModalProvider>
  )
}

export const WrapPageElement = ({ element }) => (
  <>
    <CssBaseline />
    {element}
  </>
)
