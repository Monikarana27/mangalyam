import { useSyncExternalStore } from 'react'
import { venues } from '../data/catalog'

const key = 'mangalyam-shortlist-v1'
const changed = 'mangalyam-shortlist-change'
let fallback = '[]'
let storageUnavailable = false
function snapshot() {
  if (storageUnavailable) return fallback
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}
function subscribe(callback) {
  window.addEventListener('storage', callback)
  window.addEventListener(changed, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(changed, callback)
  }
}
function read(raw) {
  try {
    const value = JSON.parse(raw)
    return Array.isArray(value)
      ? value.filter((id) => venues.some((v) => v.id === id))
      : []
  } catch {
    return []
  }
}
export default function useShortlist() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => '[]')
  const saved = read(raw)
  function toggle(id) {
    const current = read(snapshot())
    fallback = JSON.stringify(
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    )
    try {
      localStorage.setItem(key, fallback)
    } catch {
      storageUnavailable = true
    }
    window.dispatchEvent(new Event(changed))
  }
  return { saved, toggle }
}
