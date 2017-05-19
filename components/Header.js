/* @flow */
import React from 'react'
import { Link } from '../routes'

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
    </header>
  )
}
