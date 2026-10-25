import { useSyncExternalStore } from 'react'
const subscribe = (callback) => {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}
const snapshot = () => window.location.hash.slice(1) || '/'
export function useRoute() {
  return useSyncExternalStore(subscribe, snapshot, () => '/')
}
