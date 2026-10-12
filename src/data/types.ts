export interface Example {
  /** 英文 */
  en: string
  /** 日本語訳 */
  ja: string
}

export interface TableData {
  /** 表の説明 */
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface Section {
  /** セクション見出し */
  heading: string
  /** 解説段落 */
  body: string[]
  /** 例文 */
  examples?: Example[]
  /** 補足表 */
  table?: TableData
  /** 覚え方のコツ */
  tip?: string
}

export interface QuizQuestion {
  /** 問題文 */
  q: string
  /** 選択肢 */
  options: string[]
  /** 正解のインデックス */
  answer: number
  /** 解説 */
  explanation: string
}

export interface Unit {
  id: string
  grade: 1 | 2 | 3
  title: string
  subtitle: string
  category: string
  sections: Section[]
  keyPoints: string[]
  quiz: QuizQuestion[]
}

export const GRADE_LABELS: Record<1 | 2 | 3, string> = {
  1: '中学1年生',
  2: '中学2年生',
  3: '中学3年生',
}
