'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react'
import type { QuizQuestion } from '@/data/types'

interface QuizComponentProps {
  questions: QuizQuestion[]
  onFinishAllCorrect?: () => void
}

export function QuizComponent({ questions, onFinishAllCorrect }: QuizComponentProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [finished, setFinished] = useState(false)

  const q = questions[current]
  const total = questions.length
  const correctCount = useMemo(
    () => answers.filter((a, i) => a === questions[i].answer).length,
    [answers, questions]
  )

  function selectOption(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    setAnswers((prev) => {
      const next = [...prev]
      next[current] = idx
      return next
    })
  }

  function goNext() {
    if (current + 1 < total) {
      setCurrent(current + 1)
      setSelected(answers[current + 1])
    } else {
      setFinished(true)
    }
  }

  function restart() {
    setCurrent(0)
    setSelected(null)
    setAnswers(questions.map(() => null))
    setFinished(false)
  }

  if (finished) {
    const allCorrect = correctCount === total
    return (
      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8">
        <Trophy
          className={cn('mx-auto h-12 w-12', allCorrect ? 'text-amber-400' : 'text-muted-foreground')}
          aria-hidden
        />
        <p className="mt-3 text-2xl font-bold">
          {correctCount} / {total} 問正解
        </p>
        {allCorrect ? (
          <p className="mt-2 text-muted-foreground">全問正解！この単元はばっちりです。</p>
        ) : (
          <p className="mt-2 text-muted-foreground">
            まちがえた問題の解説をもう一度読んで、もう一度挑戦してみましょう。
          </p>
        )}
        <div className="mt-4 space-y-2 text-left">
          {questions.map((question, i) => {
            const ok = answers[i] === question.answer
            return (
              <div
                key={i}
                className={cn(
                  'rounded-lg border p-3 text-sm',
                  ok ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'
                )}
              >
                <p className="flex items-start gap-2 font-medium">
                  {ok ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-hidden />
                  )}
                  問{String(i + 1).padStart(2, '0')}：{ok ? '正解' : '不正解'}
                </p>
                {!ok && (
                  <p className="mt-1 pl-6 text-muted-foreground">
                    正解：{question.options[question.answer]} ／ {question.explanation}
                  </p>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="outline" onClick={restart}>
            <RotateCcw className="mr-1 h-4 w-4" aria-hidden />
            もう一度挑戦
          </Button>
          {allCorrect && onFinishAllCorrect && (
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={onFinishAllCorrect}>
              この単元を完了にする
            </Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="font-medium">
          問 {current + 1} / {total}
        </span>
        <span>正解数：{answers.filter((a, i) => a === questions[i].answer).length}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-emerald-500 transition-all"
          style={{ width: `${((current + (selected !== null ? 1 : 0)) / total) * 100}%` }}
          aria-hidden
        />
      </div>

      <p className="mt-5 text-lg font-semibold leading-relaxed">{q.q}</p>

      <div className="mt-5 space-y-3" role="group" aria-label="選択肢">
        {q.options.map((opt, idx) => {
          const isSelected = selected === idx
          const isCorrect = idx === q.answer
          const revealed = selected !== null
          return (
            <button
              key={idx}
              type="button"
              onClick={() => selectOption(idx)}
              disabled={revealed}
              className={cn(
                'flex w-full items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 text-left text-base transition-colors',
                !revealed && 'border-muted hover:border-emerald-400 hover:bg-emerald-50/50',
                revealed && isCorrect && 'border-emerald-400 bg-emerald-50',
                revealed && isSelected && !isCorrect && 'border-rose-400 bg-rose-50',
                revealed && !isSelected && !isCorrect && 'border-muted opacity-50'
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold',
                    revealed && isCorrect && 'border-emerald-500 bg-emerald-500 text-white',
                    revealed && isSelected && !isCorrect && 'border-rose-500 bg-rose-500 text-white',
                    !revealed && 'border-muted-foreground/30'
                  )}
                  aria-hidden
                >
                  {['A', 'B', 'C', 'D'][idx] ?? idx + 1}
                </span>
                {opt}
              </span>
              {revealed && isCorrect && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-label="正解" />
              )}
              {revealed && isSelected && !isCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-rose-600" aria-label="不正解" />
              )}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div
          className={cn(
            'mt-5 rounded-xl border p-4 text-sm leading-relaxed',
            selected === q.answer ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'
          )}
          role="status"
        >
          <p className="font-semibold">
            {selected === q.answer ? '正解！' : `まちがいです。正解は「${q.options[q.answer]}」`}
          </p>
          <p className="mt-1 text-muted-foreground">{q.explanation}</p>
          <Button onClick={goNext} className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700">
            {current + 1 < total ? '次の問題へ' : '結果を見る'}
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
          </Button>
        </div>
      )}
    </div>
  )
}
