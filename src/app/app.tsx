import { ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
