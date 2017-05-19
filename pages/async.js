/* @flow */
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default class Async extends React.Component {
  props: {
    stargazers_count: number
  }

  static async getInitialProps() {
    console.log('getInitialProps on Async')
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const data = await res.json()
    return data
  }

  render() {
    return (
      <Layout>
        Welcome to next.js! {this.props.stargazers_count}
        <div>Hello World. <Link href="/about"><a>About</a></Link></div>
      </Layout>
    )
  }
}
