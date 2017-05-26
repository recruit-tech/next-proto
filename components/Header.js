/* @flow */
import React from 'react'
import { Link } from '../routes'
// import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/"><a>Index</a></Link>
      /
      <Link route="page-1"><a>Page-1</a></Link>
      /
      <Link route="page-2"><a>Page-2</a></Link>
      /
      <Link route="scroll"><a>Scroll</a></Link>
      /
      <Link route="login"><a>Login</a></Link>
      <hr />

      <button
        onClick={async () => {
          const data = new FormData()
          data.append('username', 'mizchi')
          data.append('password', 'password')
          const res = await fetch('/auth/signin', {
            method: 'post',
            body: data
          })
          const text = await res.text()
          console.log(text)
        }}
      >
        sign in
      </button>
      <hr />

    </header>
  )
}
