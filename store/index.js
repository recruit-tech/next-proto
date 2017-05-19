/* @flow */
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = { foo: 'bar' }, action) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

export default (initialState: any = undefined, ...additionalMiddleware: any) =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(logger, ...additionalMiddleware)
  )
