/* @flow */
import React from 'react'

type NextRootProps = {
  pathname: string,
  query: any,
  req?: any,
  res?: any,
  jsonPageRes?: any,
  err?: any
}

export default function getInitialProps<P>(
  func: NextRootProps => P
): Class<React$Component<*, P, *>> => Class<React$Component<*, P, *>> {
  return Wrapped =>
    class NextGetInitialPropsWrapper extends React.Component {
      static getInitialProps(p: NextRootProps) {
        return func(p)
      }
      render() {
        const props: any = this.props
        return <Wrapped {...props} />
      }
    }
}
