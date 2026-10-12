import type { LucideIcon } from 'lucide-react'
import { createElement } from 'react'
import {
  BookOpenText,
  BookA,
  BookCheck,
  CircleHelp,
  MessageCircleQuestion,
  MapPin,
  Quote,
  GitCompareArrows,
  Link2,
  Repeat2,
  Boxes,
  Trophy,
  Sparkles,
} from 'lucide-react'

export interface GradeTheme {
  grade: 1 | 2 | 3
  label: string
  tagline: string
  description: string
  /** ヘッダー背景（グラデーション） */
  gradient: string
  /** 濃いアクセント（テキスト） */
  text: string
  /** 薄い背景 */
  bg: string
  /** ボーダー */
  border: string
  /** バッジ */
  badge: string
}

export const gradeThemes: Record<1 | 2 | 3, GradeTheme> = {
  1: {
    grade: 1,
    label: '中学1年生',
    tagline: '土台をつくる年',
    description: 'be動詞・一般動詞・疑問詞・過去形など、英語の土台となる単元を学びます。',
    gradient: 'from-emerald-600 to-teal-500',
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  2: {
    grade: 2,
    label: '中学2年生',
    tagline: '表現が広がる年',
    description: '不定詞・動名詞・比較・受動態など、英語の表現力が一気に広がる単元を学びます。',
    gradient: 'from-amber-500 to-orange-500',
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
  },
  3: {
    grade: 3,
    label: '中学3年生',
    tagline: '仕上げの年',
    description: '現在完了・関係代名詞・間接疑問文など、入試と高校につながる単元を仕上げます。',
    gradient: 'from-rose-500 to-pink-500',
    text: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-800',
  },
}

/** カテゴリ名からアイコンを引くマップ */
export const categoryIcons: Record<string, LucideIcon> = {
  きほん: BookOpenText,
  動詞: BookA,
  名詞: Boxes,
  代名詞: Quote,
  疑問詞: CircleHelp,
  前置詞: MapPin,
  助動詞: Sparkles,
  不定詞: BookCheck,
  動名詞: BookCheck,
  比較: GitCompareArrows,
  接続詞: Link2,
  受動態: Repeat2,
  文構造: Boxes,
  現在完了: Trophy,
  関係代名詞: Quote,
  分詞: BookA,
  発展: Sparkles,
}

export function getCategoryIcon(category: string): LucideIcon {
  return categoryIcons[category] ?? MessageCircleQuestion
}

/** カテゴリ名からアイコン要素を描画するコンポーネント */
export function CategoryIcon({
  category,
  className,
}: {
  category: string
  className?: string
}) {
  const icon = categoryIcons[category] ?? MessageCircleQuestion
  return createElement(icon, { className, 'aria-hidden': true })
}
