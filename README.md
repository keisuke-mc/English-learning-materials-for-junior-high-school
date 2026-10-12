# 中学英語のきほん ／ 中学3年生までの英語の基礎学習サイト

日本の中学1年生〜3年生までの英語の基礎がすべてわかる学習サイトです。
基礎を中心に、範囲（学年・単元）ごとに分けて収録しています。

## 収録内容

| 学年 | 単元数 | 主な範囲 |
|------|--------|----------|
| 中学1年生 | 15単元 | 英語のきほん（文のしくみ・語順）、be動詞、一般動詞、do/does、三単現のs、複数形、冠詞、人称代名詞、疑問詞、前置詞、can、現在進行形、過去形（be動詞・一般動詞）、未来形 |
| 中学2年生 | 14単元 | must / have to、should / may / could、不定詞（3用法）、動名詞、比較級・最上級、接続詞 that / if、when / because、受動態、There is / are、some / any、第4・第5文型 |
| 中学3年生 | 12単元 | 現在完了（継続・経験・完了）、関係代名詞、間接疑問文、不定詞・動名詞の発展、分詞、if / when の時制、時制の一致、受動態の発展、仮定法の基礎 |

各単元には以下が含まれます：

- やさしい解説（2〜3節）
- 例文（英語＋日本語訳）
- 整理表
- 覚え方のコツ
- 大事なポイント
- 練習問題（3問・即時採点・解説付き）

## 機能

- 学年別ナビゲーション（学年ごとの色テーマ：中1=緑 / 中2=オレンジ / 中3=ローズ）
- カテゴリ別の単元グループ表示
- 単元の横断検索
- 3問式クイズ（全問正解で「学習完了」）
- 学習済み進捗の自動保存（ブラウザの localStorage）※アカウント登録不要・DB不要

## セットアップと起動（ローカル）

```bash
# 1. 依存パッケージのインストール（Node.js 20 以上推奨）
npm install

# 2. 開発サーバーの起動（http://localhost:3000）
npm run dev

# 3. 静的ファイルの書き出し（out/ ディレクトリに生成）
npm run build

# 4. 書き出した静的サイトのローカル確認（http://localhost:3000）
npm start
```

## GitHub Pages での公開手順

このプロジェクトは静的エクスポート（`output: "export"`）に対応済みで、
Push すると自動で GitHub Pages にデプロイされる GitHub Actions ワークフロー
（`.github/workflows/deploy.yml`）が同梱されています。

### 1. GitHub にリポジトリを作成

- https://github.com/new を開く
- Repository name を入力（例： `chuugaku-eigo-site`）
- **Public** を選択（GitHub Pages は無料プランでは Public リポジトリのみ無料公開）
- 「Create repository」をクリック（README の初期化は不要。同梱の README.md を使うため）

### 2. ローカルで Push

```bash
cd chuugaku-eigo-site
git init
git add .
git commit -m "中学英語の基礎学習サイト"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

### 3. GitHub Pages を有効化

- リポジトリの 「Settings」 → 「Pages」 を開く
- 「Build and deployment」の **Source** を **GitHub Actions** に変更
- Push 時にワークフローが自動実行され、1〜2分で公開される

### 4. 公開URLを確認

- `https://<ユーザー名>.github.io/<リポジトリ名>/` でアクセス
  （例： `https://yourname.github.io/chuugaku-eigo-site/`）
- リポジトリの「Actions」タブでビルドの進行状況が確認できる
- デプロイ完了後、Pages 設定画面の上部にもURLが表示される

### 仕組み（あわせて知っておくと良いこと）

- **basePath 自動判定**：GitHub Pages は `https://<user>.github.io/<リポジトリ名>/` 配下で公開されるため、ワークフローがリポジトリ名を `NEXT_PUBLIC_BASE_PATH` に渡してビルドします。リポジトリ名を変えても `.github/workflows/deploy.yml` の編集は不要です。
- **`<ユーザー名>.github.io` という名前のリポジトリ**にした場合はルート直下（`https://<ユーザー名>.github.io/`）で公開されるため、basePath は自動的に空になります。
- 404 が出る場合は、リポジトリ名と URL の階層が一致しているか確認してください。
- 独自ドメインを使う場合は Pages 設定の「Custom domain」に設定します（その場合も basePath の自動判定が空になるよう `NEXT_PUBLIC_BASE_PATH` を空にする必要はありません。ルート配下で公開されるためです）。

### よくあるトラブル

| 症状 | 対処 |
|------|------|
| 404 Not Found | URL が `/<リポジトリ名>/` 付きか確認。Actions タブでデプロイ成功しているか確認 |
| CSS が崩れる／画像が出ない | basePath が効いていない。ワークフローのビルドログで `NEXT_PUBLIC_BASE_PATH` にリポジトリ名が入っているか確認 |
| デプロイされない | Settings → Pages の Source が「GitHub Actions」になっているか、push 先が `main` ブランチかを確認 |

## 補足

- このサイトはデータベースを使用しません（学習進捗はブラウザ側の localStorage に保存されます）。`src/lib/db.ts` は雛形として同梱していますが、サイトの動作には不要です。GitHub Pages は静的ファイルのみ配信するため、API サーバーも不要なこの構成と相性が良いです。
- SQLite（Prisma）をローカルで利用したい場合は、`.env` の `DATABASE_URL` が `db/custom.db` を指すようにしています。必要に応じて `npm run db:generate` → `npm run db:push` を実行してください。
- 依存パッケージは `package.json` の記載のとおりです（Next.js 16・React 19・Tailwind CSS 4・shadcn/ui）。

## ディレクトリ構成

```
chuugaku-eigo-site/
├── .github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
├── src/
│   ├── app/                # ページ本体（単一ルート "/" の SPA）
│   │   ├── layout.tsx      # 全体レイアウト・メタデータ
│   │   ├── page.tsx        # ホーム／学年／単元のビュー切替
│   │   └── globals.css     # グローバルスタイル
│   ├── components/
│   │   ├── study/          # 学習サイト専用コンポーネント
│   │   │   ├── home-view.tsx      # トップ（ヒーロー・検索・進捗）
│   │   │   ├── grade-view.tsx     # 学年別の単元一覧
│   │   │   ├── unit-view.tsx      # 単元の解説ページ
│   │   │   └── quiz-component.tsx # 練習問題
│   │   └── ui/              # shadcn/ui の汎用コンポーネント
│   ├── data/               # 学習コンテンツ（41単元・123問）
│   │   ├── types.ts         # 型定義
│   │   ├── grade1-units.ts  # 中1：15単元
│   │   ├── grade2-units.ts  # 中2：14単元
│   │   ├── grade3-units.ts  # 中3：12単元
│   │   ├── grade-themes.ts  # 学年テーマ（色・アイコン）
│   │   └── index.ts         # データ取得・検索ユーティリティ
│   ├── hooks/
│   │   └── use-progress.ts # 学習進捗管理（localStorage）
│   └── lib/                # 汎用ユーティリティ
├── public/                 # 静的ファイル
├── prisma/                 # Prismaスキーマ（雛形）
├── db/                     # SQLiteファイル（雛形）
└── 各種設定ファイル
```

## コンテンツの追加方法

`src/data/grade1-units.ts`（中1）、`grade2-units.ts`（中2）、`grade3-units.ts`（中3）に
Unit 型（`src/data/types.ts` 参照）に沿ったオブジェクトを追加するだけで、
新しい単元がサイトに自動反映されます。Push すれば GitHub Pages にも自動反映されます。

---

学習のすすめ方：中1 → 中2 → 中3 の順で、各単元の解説を読み、例文を声に出して読み、
練習問題で3問正解できたら次の単元へ進む、という流れがおすすめです。
