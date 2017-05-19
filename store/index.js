/* @flow */
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default (initialState: any = undefined, ...additionalMiddleware: any) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, ...additionalMiddleware)
  )
