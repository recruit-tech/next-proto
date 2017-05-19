/* @flow */
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import logger from 'redux-logger'
import Layout from '../components/Layout'
import {
  loadOnServer,
  asyncLoader,
  deferLoader
} from '../util/next-async-loader'

const reducer = (state = { foo: '' }, action) => {
  console.log('Reduce', action)
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

@withRedux(
  initialState => createStore(reducer, initialState, applyMiddleware(logger)),
  state => ({ foo: state.foo })
)
export default class Redux extends React.Component {
  props: {
    foo: string
  }
  static async getInitialProps({ store, isServer }: any) {
    if (isServer) {
      await loadOnServer(store)
    }
    return store.getState()
  }
  render() {
    return (
      <Layout>
        <h1>Redux</h1>
        <p>{this.props.foo}</p>
        <Child />
      </Layout>
    )
  }
}

@asyncLoader(async (props, store) =>
  store.dispatch({ type: 'FOO', payload: 'Init on Child' })
)
@deferLoader(async (props, store) =>
  store.dispatch({ type: 'FOO', payload: 'Init on Child defer' })
)
@connect()
class Child extends React.Component {
  props: {
    // dispatch: any
  }
  render() {
    return (
      <span
        onClick={_ev => {}}
        // this.props.dispatch({ type: 'FOO', payload: 'clicked' })}
      >
        Child
      </span>
    )
  }
}
