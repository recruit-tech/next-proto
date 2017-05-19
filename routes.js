/* eslint-disable */
const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index', '/index')
routes.add('about', '/about')
routes.add('async', '/async')
routes.add('article', '/article/:id')
routes.add('scroll', '/scroll')
routes.add('redux-with-wrapper', '/redux-with-wrapper')
routes.add('redux', '/redux')
