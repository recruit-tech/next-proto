/* @flow */
import next from 'next'
import express from 'express'
import session from 'express-session'
// import cookieParser from 'cookie-parser'
import Cookie from 'universal-cookie'
import cookieMiddleware from 'universal-cookie-express'
import bodyParser from 'body-parser'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import routes from './routes'

const server = express()
// server.use(universalCookieExpress())
server.use(cookieMiddleware())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(
  session({
    secret: 'mysecretkey',
    resave: true,
    saveUninitialized: false
  })
)
passport.serializeUser((user, cb) => {
  console.log('serializeUser', user)
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  console.log('deserializeUser', id)
  cb(null, { id })
})

passport.use(
  new LocalStrategy((username, password, done) => {
    // pass all
    console.log('local strategy passed')
    return done(null, { id: Date.now() })
  })
)

server.use(passport.initialize())
server.use(passport.session())

const app = next({ dev: process.env.NODE_ENV !== 'production' })
;(async () => {
  await app.prepare()

  server.post('/auth/logged_in', (req, res) => {
    res.status(200)
    res.send({ logged_in: !!req.user })
    res.end()
    return
  })

  server.post(
    '/auth/signin',
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
      // console.log(Object.keys(req))
      // console.log('login passed')
      res.redirect('/')
    }
  )

  const handler = routes.getRequestHandler(app)
  server.get('*', (req, res) => {
    // console.log(req.user)
    // if (req.headers.cookie) {
    //   const cookies = new Cookie(req.headers.cookie)
    // cookies.set('v', '1')
    // console.log(cookies)
    // }

    // console.log('handle by next')
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})()
