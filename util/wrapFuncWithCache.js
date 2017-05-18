/* @flow */
export default (fn: Function, { createCacheKey, storage }: any) => {
  const cache = storage || new Map()
  return async (obj: any) => {
    const key = await createCacheKey(obj)
    if (await cache.has(key)) {
      console.log('[HIT CACHE]', key)
      return cache.get(key)
    } else {
      console.log('[MISS CACHE]', key)
      const newData = await fn(obj)
      await cache.set(key, newData)
      return newData
    }
  }
}
