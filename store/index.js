/* @flow */
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = { foo: 'bar' }, action) => {
  console.log('Reduce', action)
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

export default () => createStore(reducer, applyMiddleware(logger))
