/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import Header from './Header'

// const rootReducer = (state = { foo: '' }, action) => {
//   // console.log('Reduce', action)
//   switch (action.type) {
//     case 'FOO':
//       return { ...state, foo: action.payload }
//     default:
//       return state
//   }
// }
//
// const store = createStore(rootReducer, applyMiddleware(logger))

export default function Layout(props: { children?: any }) {
  return (
    <div>
      <Header />
      <div className="container">
        {/* <Provider store={store}> */}
        {props.children}
        {/* </Provider> */}
      </div>
    </div>
  )
}
