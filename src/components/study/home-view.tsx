'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
  BookOpenText,
  Search,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  ListChecks,
  Sparkles,
} from 'lucide-react'
import { getUnitsByGrade, searchUnits, totalUnits } from '@/data'
import { gradeThemes } from '@/data/grade-themes'
import type { Unit } from '@/data/types'

interface HomeViewProps {
  completed: Set<string>
  onOpenGrade: (grade: 1 | 2 | 3) => void
  onOpenUnit: (unitId: string) => void
}

export function HomeView({ completed, onOpenGrade, onOpenUnit }: HomeViewProps) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchUnits(query), [query])
  const doneCount = completed.size
  const percent = Math.round((doneCount / totalUnits) * 100)

  return (
    <div>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 70% 60%, white 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px, 45px 45px',
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 text-emerald-100">
            <GraduationCap className="h-5 w-5" aria-hidden />
            <span className="text-sm font-medium tracking-wide">中学1年生〜3年生 / 英語の基礎 まとめサイト</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            中学英語の<span className="text-amber-300">きほん</span>を
            <br className="sm:hidden" />
            すべてマスター
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-50 sm:text-lg">
            be動詞から現在完了・関係代名詞まで、中学3年間の英語の基礎を範囲ごとにやさしく解説。
            例文と練習問題つきなので、順番に学んでも、苦手な単元だけつぶしても大丈夫です。
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-amber-300" aria-hidden />
              <div>
                <dt className="sr-only">単元数</dt>
                <dd className="font-semibold">{totalUnits} 単元</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpenText className="h-5 w-5 text-amber-300" aria-hidden />
              <div>
                <dt className="sr-only">例文・問題</dt>
                <dd className="font-semibold">例文と練習問題つき</dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-300" aria-hidden />
              <div>
                <dt className="sr-only">対象</dt>
                <dd className="font-semibold">基礎の総復習に最適</dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* 検索 */}
        <section aria-label="単元を検索">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="単元を検索（例：不定詞、受動態、過去形…）"
              className="h-12 pl-11 text-base"
              aria-label="単元を検索"
            />
          </div>
          {query.trim() !== '' && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                「{query}」の検索結果：{results.length}件
              </p>
              {results.length === 0 ? (
                <p className="mt-6 rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                  該当する単元が見つかりませんでした。別のキーワードでお試しください。
                </p>
              ) : (
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {results.slice(0, 8).map((unit) => (
                    <UnitRow key={unit.id} unit={unit} onOpen={onOpenUnit} done={completed.has(unit.id)} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>

        {/* 学年カード */}
        <section className="mt-12" aria-label="学年別にさがす">
          <h2 className="text-xl font-bold sm:text-2xl">学年別にまなぶ</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            学校の授業の進み方に合わせて、中1・中2・中3の範囲ごとに分かれています。
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {([1, 2, 3] as const).map((grade) => {
              const theme = gradeThemes[grade]
              const units = getUnitsByGrade(grade)
              const done = units.filter((u) => completed.has(u.id)).length
              const pct = Math.round((done / units.length) * 100)
              return (
                <button
                  key={grade}
                  type="button"
                  onClick={() => onOpenGrade(grade)}
                  className={`group rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 ${theme.border}`}
                >
                  <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${theme.badge}`}>
                    {theme.label}
                  </div>
                  <p className={`mt-3 text-lg font-bold ${theme.text}`}>{theme.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        学習済み {done} / {units.length} 単元
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <Progress value={pct} className="mt-1.5 h-2" />
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-foreground">
                    単元一覧へ
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        {/* 進捗 */}
        <section className="mt-12" aria-label="全体の進捗">
          <Card className="border-emerald-200 bg-emerald-50/60">
            <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="w-full sm:max-w-sm">
                <p className="text-sm font-semibold text-emerald-800">全体の進捗</p>
                <p className="mt-1 text-2xl font-bold text-emerald-900">
                  {doneCount} <span className="text-base font-medium text-emerald-700">/ {totalUnits} 単元完了</span>
                </p>
                <Progress value={percent} className="mt-3 h-2.5" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => onOpenGrade(1)}
                  variant="outline"
                  className="border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100"
                >
                  中1から始める
                </Button>
                <Button
                  onClick={() => onOpenGrade(3)}
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  中3の仕上げへ
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

function UnitRow({
  unit,
  onOpen,
  done,
}: {
  unit: Unit
  onOpen: (id: string) => void
  done: boolean
}) {
  const theme = gradeThemes[unit.grade]
  return (
    <li>
      <button
        type="button"
        onClick={() => onOpen(unit.id)}
        className="flex w-full items-center gap-3 rounded-xl border bg-white p-4 text-left shadow-sm transition-colors hover:bg-muted/60"
      >
        {done ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-label="学習済み" />
        ) : (
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${unit.grade === 1 ? 'bg-emerald-400' : unit.grade === 2 ? 'bg-amber-400' : 'bg-rose-400'}`} aria-hidden />
        )}
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <Badge variant="secondary" className={`shrink-0 ${theme.badge} border-0`}>
              中{unit.grade}
            </Badge>
            <span className="truncate font-semibold">{unit.title}</span>
          </span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      </button>
    </li>
  )
}
