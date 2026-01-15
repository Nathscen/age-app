export const saveData = (key: string, value: any) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  export const getData = (key: string) => {
    if (typeof window === 'undefined') return []
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  }
  