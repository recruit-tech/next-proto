/* @flow */
import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Welcome to next.js! {this.props.stargazers_count}
      </div>
    )
  }
}
