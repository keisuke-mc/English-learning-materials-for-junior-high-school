'use client'

import { useCallback, useMemo, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'junior-english-basics-progress-v1'
const EMPTY: string[] = []

/** localStorage を外部ストアとして扱う（複数フック間で共有） */
let cache: string[] | null = null
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot(): string[] {
  if (cache === null) {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      cache = raw ? (JSON.parse(raw) as string[]) : EMPTY
    } catch {
      cache = EMPTY
    }
  }
  return cache
}

function getServerSnapshot(): string[] {
  return EMPTY
}

function setStore(next: string[]) {
  cache = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // 保存失敗は無視
  }
  listeners.forEach((l) => l())
}

/** 学習済み単元のIDリストを localStorage で管理するフック */
export function useProgress() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const completed = useMemo(() => new Set(stored), [stored])

  const toggle = useCallback((unitId: string) => {
    const next = new Set(getSnapshot())
    if (next.has(unitId)) {
      next.delete(unitId)
    } else {
      next.add(unitId)
    }
    setStore(Array.from(next))
  }, [])

  const markDone = useCallback((unitId: string) => {
    const current = getSnapshot()
    if (current.includes(unitId)) return
    setStore([...current, unitId])
  }, [])

  const reset = useCallback(() => {
    setStore([])
  }, [])

  return { completed, loaded: true, toggle, markDone, reset }
}
