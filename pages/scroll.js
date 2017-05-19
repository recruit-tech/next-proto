/* @flow */
import React from 'react'
import range from 'lodash.range'
import Layout from '../components/Layout'

export default function Scroll() {
  return (
    <Layout>
      <ul>
        {range(50).map(i => {
          return (
            <li key={i}>
              item: {i}
            </li>
          )
        })}
      </ul>

    </Layout>
  )
}
