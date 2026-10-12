'use client'

import { useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ListChecks,
  BookOpenText,
} from 'lucide-react'
import { allUnits, getUnit } from '@/data'
import { CategoryIcon, gradeThemes } from '@/data/grade-themes'
import { QuizComponent } from './quiz-component'

interface UnitViewProps {
  unitId: string
  completed: Set<string>
  onOpenUnit: (unitId: string) => void
  onBackToGrade: (grade: 1 | 2 | 3) => void
  onToggleComplete: (unitId: string) => void
  onMarkDone: (unitId: string) => void
}

export function UnitView({
  unitId,
  completed,
  onOpenUnit,
  onBackToGrade,
  onToggleComplete,
  onMarkDone,
}: UnitViewProps) {
  const unit = useMemo(() => getUnit(unitId), [unitId])

  const { prevUnit, nextUnit } = useMemo(() => {
    const idx = allUnits.findIndex((u) => u.id === unitId)
    return {
      prevUnit: idx > 0 ? allUnits[idx - 1] : undefined,
      nextUnit: idx >= 0 && idx < allUnits.length - 1 ? allUnits[idx + 1] : undefined,
    }
  }, [unitId])

  if (!unit) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-lg font-semibold">単元が見つかりませんでした。</p>
        <Button className="mt-4" onClick={() => onBackToGrade(1)}>
          ホームへ戻る
        </Button>
      </div>
    )
  }

  const theme = gradeThemes[unit.grade]
  const isDone = completed.has(unit.id)

  return (
    <div>
      {/* 単元ヘッダー */}
      <section className={`bg-gradient-to-r ${theme.gradient} text-white`}>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <nav aria-label="パンくずリスト" className="text-sm">
            <button
              type="button"
              onClick={() => onBackToGrade(unit.grade)}
              className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 font-medium text-white transition-colors hover:bg-white/25"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {theme.label}の単元一覧
            </button>
          </nav>
          <div className="mt-4 flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <CategoryIcon category={unit.category} className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">
                  {theme.label}
                </span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">
                  {unit.category}
                </span>
                {isDone && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    学習済み
                  </span>
                )}
              </div>
              <h1 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">{unit.title}</h1>
              <p className="mt-1 text-sm text-white/85 sm:text-base">{unit.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* 解説セクション */}
        {unit.sections.map((section, i) => (
          <section key={i} className="mb-10" aria-labelledby={`section-${i}`}>
            <h2 id={`section-${i}`} className="flex items-center gap-2 text-xl font-bold">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${theme.badge} text-sm font-bold`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((p, j) => (
                <p key={j} className="leading-loose text-foreground/90">
                  {p}
                </p>
              ))}
            </div>

            {section.table && (
              <div className="mt-5 overflow-x-auto rounded-xl border bg-white">
                <Table>
                  {section.table.caption && (
                    <caption className="border-b bg-muted/50 px-4 py-2 text-left text-sm font-semibold text-muted-foreground">
                      {section.table.caption}
                    </caption>
                  )}
                  <TableHeader>
                    <TableRow>
                      {section.table.headers.map((h, k) => (
                        <TableHead key={k} className="whitespace-nowrap">
                          {h}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.table.rows.map((row, k) => (
                      <TableRow key={k}>
                        {row.map((cell, m) => (
                          <TableCell key={m} className={m === 0 ? 'font-medium' : undefined}>
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {section.examples && section.examples.length > 0 && (
              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <BookOpenText className="h-4 w-4" aria-hidden />
                  例文で確認
                </p>
                <ul className="space-y-3">
                  {section.examples.map((ex, j) => (
                    <li key={j} className="rounded-xl border bg-white p-4 shadow-sm">
                      <p className="text-base font-semibold leading-relaxed">{ex.en}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ex.ja}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.tip && (
              <aside
                className={`mt-5 rounded-xl border p-4 ${theme.border} ${theme.bg}`}
                aria-label="覚え方のコツ"
              >
                <p className={`flex items-center gap-2 text-sm font-bold ${theme.text}`}>
                  <Lightbulb className="h-4 w-4" aria-hidden />
                  覚え方のコツ
                </p>
                <p className="mt-1.5 text-sm leading-relaxed">{section.tip}</p>
              </aside>
            )}
          </section>
        ))}

        {/* ここが大事 */}
        <section
          className="mb-10 rounded-2xl border-2 border-emerald-200 bg-emerald-50/70 p-5 sm:p-6"
          aria-label="ここが大事"
        >
          <h2 className="flex items-center gap-2 text-lg font-bold text-emerald-800">
            <ListChecks className="h-5 w-5" aria-hidden />
            ここが大事
          </h2>
          <ul className="mt-3 space-y-2.5">
            {unit.keyPoints.map((kp, i) => (
              <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                <span>{kp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 練習問題 */}
        <section className="mb-10" aria-label="練習問題">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              Q
            </span>
            練習問題（{unit.quiz.length}問）
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            学んだ内容を確認しましょう。選択肢をタップすると、すぐに答えと解説が表示されます。
          </p>
          <div className="mt-5">
            <QuizComponent questions={unit.quiz} onFinishAllCorrect={() => onMarkDone(unit.id)} />
          </div>
        </section>

        {/* 完了ボタン */}
        <div className="mb-10 flex justify-center">
          <Button
            size="lg"
            variant={isDone ? 'outline' : 'default'}
            onClick={() => onToggleComplete(unit.id)}
            className={
              isDone
                ? 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }
          >
            <CheckCircle2 className="mr-2 h-5 w-5" aria-hidden />
            {isDone ? '学習済みを解除する' : 'この単元を学習済みにする'}
          </Button>
        </div>

        {/* 前後の単元 */}
        <nav aria-label="前後の単元" className="grid gap-3 border-t pt-6 sm:grid-cols-2">
          {prevUnit ? (
            <button
              type="button"
              onClick={() => onOpenUnit(prevUnit.id)}
              className="group flex items-center gap-3 rounded-xl border bg-white p-4 text-left transition-all hover:shadow-md"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" aria-hidden />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">前の単元</span>
                <span className="block truncate text-sm font-semibold">{prevUnit.title}</span>
              </span>
            </button>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}
          {nextUnit && (
            <button
              type="button"
              onClick={() => onOpenUnit(nextUnit.id)}
              className="group flex items-center justify-end gap-3 rounded-xl border bg-white p-4 text-right transition-all hover:shadow-md sm:col-start-2"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">次の単元</span>
                <span className="block truncate text-sm font-semibold">{nextUnit.title}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}
