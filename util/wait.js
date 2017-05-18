/* @flow */
export default (ms: number) => new Promise(done => setTimeout(done, ms))
