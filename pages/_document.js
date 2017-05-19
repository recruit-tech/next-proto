/* @flow */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import flush from 'styled-jsx/server'
import Router from 'next/router'
import applyScrollRestore from 'next-scroll-restore'

// Wrap original onRouteChangeComplete
applyScrollRestore({ addTransitionHook: Router.onRouteChangeComplete })

export default class MyDocument extends Document {
  // static async getInitialProps ({ renderPage }) {
  // console.log('getInitialProps on MyDocument')
  // const {html, head} = renderPage()
  // const styles = flush()
  // await wait(150)
  // return { html, head, styles }
  // }

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
