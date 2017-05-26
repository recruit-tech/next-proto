/* @flow */
import next from 'next'
import express from 'express'
import routes from './routes'

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
;(async () => {
  await app.prepare()
  const server = express()

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})()
