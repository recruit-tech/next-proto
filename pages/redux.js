/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import getInitialProps from '../components/hoc/getInitialProps'
import withReduxProvider from '../components/hoc/withReduxProvider'
import initStore from '../store'

export default compose(
  getInitialProps(() => ({ a: 1 })),
  withReduxProvider(initStore),
  connect(root => root)
)(function Redux(props: { foo: string }) {
  return (
    <Layout>
      <h1>Redux</h1>
      <p>{props.foo || 'none'}</p>
    </Layout>
  )
})
