/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Provider } from 'react-redux'

let _store: any = null
export default function withReduxProvider<P>(
  initStore: () => any
): Class<React$Component<*, P, *>> => Class<React$Component<*, P, *>> {
  return Wrapped =>
    class ReduxProvider extends React.Component {
      props: P
      render() {
        _store = initStore()
        const props: any = this.props
        return (
          <Provider store={_store}>
            <Wrapped {...props} />
          </Provider>
        )
      }
    }
}
