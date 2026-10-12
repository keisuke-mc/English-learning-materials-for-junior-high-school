'use client'

import { useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { getUnitsByGrade } from '@/data'
import { CategoryIcon, gradeThemes } from '@/data/grade-themes'

interface GradeViewProps {
  grade: 1 | 2 | 3
  completed: Set<string>
  onOpenUnit: (unitId: string) => void
  onBack: () => void
}

export function GradeView({ grade, completed, onOpenUnit, onBack }: GradeViewProps) {
  const theme = gradeThemes[grade]
  const units = useMemo(() => getUnitsByGrade(grade), [grade])
  const done = units.filter((u) => completed.has(u.id)).length
  const pct = Math.round((done / units.length) * 100)

  // カテゴリごとにグループ化（登場順を維持）
  const groups = useMemo(() => {
    const map = new Map<string, typeof units>()
    for (const u of units) {
      const list = map.get(u.category) ?? []
      list.push(u)
      map.set(u.category, list)
    }
    return Array.from(map.entries())
  }, [units])

  return (
    <div>
      {/* 学年ヘッダー */}
      <section className={`bg-gradient-to-r ${theme.gradient} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            ホームへもどる
          </button>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white/80">{theme.tagline}</p>
              <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{theme.label}の単元一覧</h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {theme.description}
              </p>
            </div>
            <div className="w-full max-w-xs">
              <div className="flex items-center justify-between text-xs text-white/85">
                <span>
                  学習済み {done} / {units.length} 単元
                </span>
                <span>{pct}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/25">
                <div
                  className="h-full rounded-full bg-white transition-all"
                  style={{ width: `${pct}%` }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {groups.map(([category, groupUnits]) => {
          return (
            <section key={category} className="mb-10" aria-label={`${category}の単元`}>
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${theme.bg} ${theme.text}`}>
                  <CategoryIcon category={category} className="h-5 w-5" />
                </span>
                {category}
                <span className="text-sm font-normal text-muted-foreground">（{groupUnits.length}単元）</span>
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {groupUnits.map((unit, i) => {
                  const isDone = completed.has(unit.id)
                  return (
                    <li key={unit.id}>
                      <button
                        type="button"
                        onClick={() => onOpenUnit(unit.id)}
                        className="group flex h-full w-full items-start gap-3 rounded-xl border bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            isDone ? 'bg-emerald-100 text-emerald-700' : `${theme.bg} ${theme.text}`
                          }`}
                        >
                          {isDone ? <CheckCircle2 className="h-5 w-5" aria-label="学習済み" /> : i + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold leading-snug">{unit.title}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">{unit.subtitle}</span>
                          <span className="mt-2 flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              例文 {countExamples(unit)} つ
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              練習 {unit.quiz.length} 問
                            </Badge>
                          </span>
                        </span>
                        <ArrowRight
                          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        {/* 次の学年への導線 */}
        {grade < 3 && (
          <section className="rounded-2xl border border-dashed p-6 text-center">
            <p className="text-sm text-muted-foreground">{theme.label}の範囲は以上です。</p>
            <p className="mt-2 text-lg font-bold">
              次は
              <span className={gradeThemes[(grade + 1) as 1 | 2 | 3].text}>
                {gradeThemes[(grade + 1) as 1 | 2 | 3].label}
              </span>
              の単元へ進みましょう。
            </p>
          </section>
        )}
        {grade === 3 && (
          <section className="rounded-2xl border border-dashed p-6 text-center">
            <p className="text-sm text-muted-foreground">中学3年間の範囲は以上です。</p>
            <p className="mt-2 text-lg font-bold">ここまで来たら、高校英語の準備は万全です。</p>
          </section>
        )}
      </div>
    </div>
  )
}

function countExamples(unit: { sections: { examples?: unknown[] }[] }) {
  return unit.sections.reduce((sum, s) => sum + (s.examples?.length ?? 0), 0)
}
