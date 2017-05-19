/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Provider } from 'react-redux'

let _store: any = null
export default function withReduxProvider<P>(
  initStore: Function
): Class<React$Component<*, P, *>> => Class<React$Component<*, P, *>> {
  return Wrapped =>
    class ReduxProvider extends React.Component {
      props: P
      constructor(props: P, context: any) {
        if (!_store) {
          _store = initStore()
        }
        super(props, context)
      }
      render() {
        const props: any = this.props
        return (
          <Provider store={_store}>
            <Wrapped {...props} />
          </Provider>
        )
      }
    }
}
