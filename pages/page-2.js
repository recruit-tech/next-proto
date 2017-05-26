/* @flow */
import 'isomorphic-fetch'
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import redirect from 'next-redirect'
import Layout from '../components/Layout'
import getInitialProps from '../components/hoc/getInitialProps'
import withDefaultProvider from '../components/hoc/withProvider'

export default compose(
  getInitialProps(async (ctx: any) => {
    console.log('page 2 getInitialProps with', ctx.req && ctx.req.user)
    const res = await fetch('/auth/logged_in', {
      method: 'post',
      ContentType: 'application/json'
    })
    const data = await res.json()
    if (!data.logged_in) {
      redirect(ctx, '/login')
      return { logged_in: false }
    }

    return { a: 2 }
  }),
  withDefaultProvider,
  connect(root => root)
)(function Page2(props: { a: number, foo: string, dispatch: any }) {
  // if (!props.logged_in) {
  //   return <span>aaa</span>
  // }
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
