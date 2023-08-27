import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}></ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </React.StrictMode>,
)
