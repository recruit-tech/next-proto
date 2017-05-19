/* @flow */
import React from 'react'
import { Link } from '../routes'

export default function Header() {
  return (
    <header>
      <Link href="/"><a>Index</a></Link>
      /
      <Link route="about"><a>About</a></Link>
      /
      <Link route="async"><a>Async</a></Link>
      /
      <Link route="scroll"><a>Scroll</a></Link>
      /
      <Link route="article" params={{ id: 0 }}><a>Arcticle:0</a></Link>
      /
      <Link route="redux-with-wrapper"><a>ReduxWithWrapper</a></Link>
      /
      <Link route="redux"><a>Redux</a></Link>
      <hr />
    </header>
  )
}
