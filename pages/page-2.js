/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import getInitialProps from '../components/hoc/getInitialProps'
import withDefaultProvider from '../components/hoc/withProvider'

export default compose(
  getInitialProps(() => ({ a: 2 })),
  withDefaultProvider,
  connect(root => root)
)(function Page2(props: { a: number, foo: string, dispatch: any }) {
  return (
    <Layout>
      <h1>Page 2</h1>
      <p>{props.a}</p>
      <p>{props.foo}</p>
      <button onClick={() => props.dispatch({ type: 'FOO', payload: 'bar' })}>
        set bar
      </button>
    </Layout>
  )
})
