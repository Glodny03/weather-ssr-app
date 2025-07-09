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

const PORT = process.env.PORT || 3000
const app = express()

const CLIENT_DIST_PATH = path.resolve(__dirname, '../../client/dist')

// Serve static files
app.use(express.static(CLIENT_DIST_PATH))

// SSR route
app.get('/{*path}', (req, res) => {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const appMarkup = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={req.url}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StaticRouter>
    </CacheProvider>
  )

  const emotionChunks = extractCriticalToChunks(appMarkup)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)

  const indexHtmlPath = path.join(CLIENT_DIST_PATH, 'index.html')

  fs.readFile(indexHtmlPath, 'utf8', (err, template) => {
    if (err) {
      console.error('Failed to read index.html:', err)
      return res.status(500).send('Internal server error')
    }

    const html = template
      .replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`)
      .replace('</head>', `${emotionCss}</head>`)

    res.status(200).send(html)
  })
})

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`)
})
