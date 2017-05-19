/* @flow */
import React from 'react'
import Header from './Header'

export default function Layout(props: { children?: any }) {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}
