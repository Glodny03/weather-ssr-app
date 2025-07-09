import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'

import App from './App'
import theme from './theme/theme'
import { createStore } from './store/weather/store/store'

const preloadedState = (window as any).__PRELOADED_STATE__ || {}
const store = createStore(preloadedState)

hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
