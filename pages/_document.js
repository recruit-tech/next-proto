/* @flow */
import React from 'react'
require('isomorphic-fetch')
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

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
