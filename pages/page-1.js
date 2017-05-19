/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import getInitialProps from '../components/hoc/getInitialProps'
// import withDefaultProvider from '../components/hoc/withProvider'
import { withProvider } from '../components/hoc/withProvider'
import initStore from '../store'

type PageInitialProps = {
  a: number
}

type RootReducerProps = {
  foo: string,
  dispatch: any
}

// const res = await fetch('https://api.github.com/repos/zeit/next.js')
export default compose(
  getInitialProps((() => ({ a: 1 }): () => PageInitialProps)),
  withProvider(_initialProps => initStore()),
  // withDefaultProvider,
  connect(root => root)
)(function Page1(props: PageInitialProps & RootReducerProps) {
  return (
    <Layout>
      <h1>Page 1</h1>
      <p>{props.a}</p>
      <p>{props.foo}</p>
      <button onClick={() => props.dispatch({ type: 'FOO', payload: 'foo' })}>
        set foo
      </button>
    </Layout>
  )
})
