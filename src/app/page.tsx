'use client'

import { useCallback, useEffect, useState } from 'react'
import { useProgress } from '@/hooks/use-progress'
import { HomeView } from '@/components/study/home-view'
import { GradeView } from '@/components/study/grade-view'
import { UnitView } from '@/components/study/unit-view'
import { totalUnits } from '@/data'
import { BookOpenText, CheckCircle2 } from 'lucide-react'

type View =
  | { name: 'home' }
  | { name: 'grade'; grade: 1 | 2 | 3 }
  | { name: 'unit'; unitId: string }

export default function Home() {
  const [view, setView] = useState<View>({ name: 'home' })
  const { completed, loaded, toggle, markDone } = useProgress()

  // ビューが変わったらページ上部へスクロール
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [view])

  const openGrade = useCallback((grade: 1 | 2 | 3) => setView({ name: 'grade', grade }), [])
  const openUnit = useCallback((unitId: string) => setView({ name: 'unit', unitId }), [])

  return (
    <div className="flex min-h-screen flex-col bg-[#f8faf9]">
      <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setView({ name: 'home' })}
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="ホームへ戻る"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white">
              <BookOpenText className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-base font-bold leading-tight">中学英語のきほん</span>
              <span className="block text-[11px] leading-tight text-muted-foreground">
                中1〜中3の基礎 まとめサイト
              </span>
            </span>
          </button>
          {loaded && (
            <div
              className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700"
              aria-live="polite"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              {completed.size} / {totalUnits}
              <span className="hidden sm:inline">単元</span>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {view.name === 'home' && (
          <HomeView completed={completed} onOpenGrade={openGrade} onOpenUnit={openUnit} />
        )}
        {view.name === 'grade' && (
          <GradeView
            grade={view.grade}
            completed={completed}
            onOpenUnit={openUnit}
            onBack={() => setView({ name: 'home' })}
          />
        )}
        {view.name === 'unit' && (
          <UnitView
            unitId={view.unitId}
            completed={completed}
            onOpenUnit={openUnit}
            onBackToGrade={openGrade}
            onToggleComplete={toggle}
            onMarkDone={markDone}
          />
        )}
      </main>

      <footer className="mt-auto border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm leading-relaxed text-muted-foreground">
            中学英語のきほん ― 中学1年生から3年生までの英語の基礎を、範囲ごとにやさしく解説する学習サイト。
          </p>
          <p className="mt-2 text-center text-xs text-muted-foreground/70">
            ※ 学習進捗はこのブラウザの中にのみ保存されます。
          </p>
        </div>
      </footer>
    </div>
  )
}
