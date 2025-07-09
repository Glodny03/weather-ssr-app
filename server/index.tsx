import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionServer from '@emotion/server/create-instance'
import { CacheProvider } from '@emotion/react'
import App from '../client/src/App'
import theme from '../client/src/theme/theme'
import createEmotionCache from '../client/src/theme/createEmotionCache'
import { Provider } from 'react-redux'
import { createStore } from '../client/src/store/weather/store/store'
import { setWeather, setWeatherError } from '../client/src/store/weather/weatherSlice'
import { fetchWeatherData, fetchWeatherComparisonData } from './utils/fetchWeatherData'
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()
const CLIENT_DIST_PATH = path.resolve(__dirname, '../../client/dist')
const API_KEY = process.env.OPENWEATHER_API_KEY || ''

// Serve static frontend assets
app.use(express.static(CLIENT_DIST_PATH))

// Default route → redirect to main city
app.get('/', (req, res) => {
  res.redirect('/warszawa')
})

// SSR for dynamic city routes
app.get('/:city', async (req, res) => {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const city = decodeURIComponent(req.params.city || 'warszawa')
  const store = createStore()

  // Fetch weather data for current city
  const weather = await fetchWeatherData(city, API_KEY)

  if (weather.error) {
    // Set error if city not found
    store.dispatch(setWeatherError(weather.error))
  } else {
    // Fetch comparison data for other cities
    const comparison = await fetchWeatherComparisonData(city, API_KEY)
    store.dispatch(setWeather({ ...weather, comparison, error: null }))
  }

  const preloadedState = store.getState()

  // Render React app to string (SSR)
  const appMarkup = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={req.url}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Provider>
      </StaticRouter>
    </CacheProvider>
  )

  // Extract Emotion CSS styles
  const emotionChunks = extractCriticalToChunks(appMarkup)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)

  const indexHtmlPath = path.join(CLIENT_DIST_PATH, 'index.html')

  // Inject rendered app and state into HTML
  fs.readFile(indexHtmlPath, 'utf8', (err, template) => {
    if (err) {
      console.error('Failed to read index.html:', err)
      return res.status(500).send('Internal server error')
    }

    const html = template
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appMarkup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>`
      )
      .replace('</head>', `${emotionCss}</head>`)

    res.status(200).send(html)
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
