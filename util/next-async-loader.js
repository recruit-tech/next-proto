/* @flow */
import React from 'react'
// Inspired by https://github.com/recruit-tech/redux-async-loader
// TODO: This code works on single Provider
const _registeredAsyncLoaders: any = []
export function asyncLoader(loader: any) {
  _registeredAsyncLoaders.push(loader)
  return (Component: any) => {
    return Component
  }
}

export function deferLoader(loader: any) {
  return (WrappedComponent: any) => {
    return class WrapperComponent extends React.Component {
      static contextTypes = {
        store: React.PropTypes.object.isRequired
      }
      componentDidMount(_nextProps: any) {
        const { store } = this.context
        loader(store.getState(), store)
      }
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}

export const loadOnServer = async (store: any) => {
  store.dispatch({
    type: 'LOAD_ASYNC:START:SERVER'
  })
  await Promise.all(
    _registeredAsyncLoaders.map(loader => loader(store.getState(), store))
  )
  store.dispatch({
    type: 'LOAD_ASYNC:END:SERVER'
  })
}
