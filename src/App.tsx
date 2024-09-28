import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/Default"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

