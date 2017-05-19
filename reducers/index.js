/* @flow */

export type State = {
  foo: string
}

const initialState = Object.freeze({ foo: 'bar' })

export default (state: State = initialState, action: any) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}
