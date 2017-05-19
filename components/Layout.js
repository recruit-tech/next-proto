/* @flow */
import React from 'react'
import Router from 'next/router'
import applyScrollRestore from 'next-scroll-restore'
import Header from './Header'

applyScrollRestore({ addTransitionHook: Router.onRouteChangeComplete })

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
