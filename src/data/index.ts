import { grade1Units } from './grade1-units'
import { grade2Units } from './grade2-units'
import { grade3Units } from './grade3-units'
import type { Unit } from './types'

export const allUnits: Unit[] = [...grade1Units, ...grade2Units, ...grade3Units]

export function getUnitsByGrade(grade: 1 | 2 | 3): Unit[] {
  return allUnits.filter((u) => u.grade === grade)
}

export function getUnit(id: string): Unit | undefined {
  return allUnits.find((u) => u.id === id)
}

export function searchUnits(query: string): Unit[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return allUnits.filter(
    (u) =>
      u.title.toLowerCase().includes(q) ||
      u.subtitle.toLowerCase().includes(q) ||
      u.category.toLowerCase().includes(q) ||
      u.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(q) ||
          s.body.some((b) => b.toLowerCase().includes(q))
      )
  )
}

export function getCategories(grade: 1 | 2 | 3): string[] {
  const units = getUnitsByGrade(grade)
  return Array.from(new Set(units.map((u) => u.category)))
}

export const totalUnits = allUnits.length
export const totalQuizzes = allUnits.reduce((sum, u) => sum + u.quiz.length, 0)

export * from './types'
