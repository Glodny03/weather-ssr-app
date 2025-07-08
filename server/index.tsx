import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../client/src/App'

const PORT = process.env.PORT || 3000
const app = express()

const CLIENT_DIST_PATH = path.resolve(__dirname, '../../client/dist')

// Serve static assets from client build
app.use(express.static(CLIENT_DIST_PATH))

// Server-side rendering for all routes
app.get('/{*path}', (req, res) => {
  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  const indexHtmlPath = path.join(CLIENT_DIST_PATH, 'index.html')

  fs.readFile(indexHtmlPath, 'utf8', (err, template) => {
    if (err) {
      console.error('Failed to read index.html:', err)
      return res.status(500).send('Internal server error')
    }

    const html = template.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`)
    res.status(200).send(html)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
