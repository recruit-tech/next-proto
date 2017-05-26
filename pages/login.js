/* @flow */
import React from 'react'
import Layout from '../components/Layout'

export default function Login() {
  return (
    <Layout>
      Login
      <form action="/auth/signin" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username" defaultValue="aaa" /><br />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" defaultValue="bbb" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </Layout>
  )
}
