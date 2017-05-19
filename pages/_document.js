/* @flow */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Router from 'next/router'
import applyScrollRestore from 'next-scroll-restore'

applyScrollRestore({ addTransitionHook: Router.onRouteChangeComplete })

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
