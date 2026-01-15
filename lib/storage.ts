export function getData<T = unknown>(key: string): T[] {
  if (typeof window === 'undefined') return []

  const raw = localStorage.getItem(key)
  return raw ? (JSON.parse(raw) as T[]) : []
}

export function saveData<T = unknown>(key: string, data: T[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(data))
}
