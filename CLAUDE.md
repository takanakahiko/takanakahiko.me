# CLAUDE.md

このファイルはAIアシスタントがこのリポジトリを扱う際のガイダンスを提供します。

## プロジェクト概要

**takanakahiko.me** - takanakahiko（開発者/エンジニア）の個人ポートフォリオサイトです。経歴、プロジェクト、SNSリンクなどを紹介しています。

**公開URL**: https://takanakahiko.me

## 技術スタック

- **フレームワーク**: Nuxt.js 4.x（Vue 3ベース、SPAモード `ssr: false`）
- **CSSフレームワーク**: Bulma 1.x + SCSSカスタマイズ
- **3Dグラフィック**: Three.js（Aboutページの回転キューブ）
- **アイコン**: Material Design Icons (@mdi/font) と Bootstrap Icons
- **言語**: JavaScript/TypeScript（Vue SFC、Options APIとComposition API混在）
- **パッケージマネージャ**: npm
- **Node.js バージョン**: 25.2.1（`.node-version`と`.tool-versions`で指定）

## ディレクトリ構成

```
takanakahiko.me/
├── src/                    # ソースディレクトリ（nuxt.config.tsのsrcDirで設定）
│   ├── assets/            # SCSSスタイルと画像
│   │   ├── bulma-style.scss  # Bulmaカスタマイズ（紫テーマ #8c67ef）
│   │   ├── fill-in.css       # テキスト表示アニメーション
│   │   └── icon.jpg          # プロフィールアイコン
│   ├── components/        # Vueコンポーネント
│   │   ├── PageHead.vue   # ヒーローセクションヘッダー
│   │   ├── RotateBox.vue  # Three.js回転キューブ
│   │   ├── TimeLine.vue   # 経歴タイムライン（bulma-timeline使用）
│   │   ├── Work.vue       # 作品/プロジェクトカード
│   │   └── Logo.vue       # アニメーションNuxtロゴ
│   ├── layouts/           # ページレイアウト
│   │   ├── default.vue    # メインレイアウト（ナビバー+フッター）
│   │   └── blank.vue      # 空レイアウト（トップページ用）
│   └── pages/             # ページルート
│       ├── index.vue      # トップページ（blankレイアウト使用）
│       ├── about.vue      # 自己紹介ページ（タイムラインとリンク）
│       └── works.vue      # 作品一覧ページ
├── public/                # 静的アセット
│   ├── images/            # プロジェクトのスクリーンショット
│   ├── favicon.ico        # ファビコン
│   ├── CNAME              # GitHub Pagesカスタムドメイン
│   └── api.json           # 静的APIデータ
├── .github/workflows/     # CI/CD
│   ├── pr.yml             # PR時のビルドチェック
│   └── auto-label-merge-conflicts.yml  # コンフリクトPRの自動ラベル付け
├── nuxt.config.ts         # Nuxt設定
└── package.json           # 依存関係とスクリプト
```

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build

# 静的サイト生成
npm run generate

# ESLint実行
npm run lint
```

## コーディング規約

### Vueコンポーネント
- Options API（`export default {}`）とComposition API（`<script setup>`）が混在
- 単一ファイルコンポーネント（`<template>`, `<script>`, `<style>`構成）
- 必要に応じてスコープ付きスタイル（`<style scoped>`）を使用

### CSS/SCSS
- プライマリカラーは紫（`$laala: #8c67ef`） - プリパラのらぁらをイメージ
- Bulma CSSクラスを使用（例: `is-primary`, `hero`, `section`, `columns`）
- カスタムアニメーションは`fill-in.css`とコンポーネントスタイルで定義

### インポート
- `~/` エイリアスでsrcディレクトリからインポート（例: `import PageHead from '~/components/PageHead'`）
- `@/` エイリアスでアセットをインポート（例: `@/assets/bulma-style.scss`）

### コードスタイル（.editorconfig）
- インデント: 2スペース
- 改行コード: LF
- 文字コード: UTF-8
- ファイル末尾に改行を入れる

### データパターン
- 経歴タイムラインやプロジェクトデータはページコンポーネント内にインラインで定義
- SNSリンクや興味関心はコンポーネントの`setup()`関数内の配列として保持

## CI/CD

### PRワークフロー（`.github/workflows/pr.yml`）
- 全てのプルリクエストで実行
- チェック内容: `npm ci` → `npm run build`
- `.tool-versions`のNode.jsバージョンを使用

### 依存関係管理
- Renovate Botで毎週末に自動更新（`renovate.json`）
- マージコンフリクトのあるPRに自動ラベル付け

## 注意事項

1. **クライアントサイドのみ**: `ssr: false`でSPAとして動作（サーバーサイドレンダリングなし）
2. **Three.jsトランスパイル**: `three/examples/jsm/controls/OrbitControls.js`をトランスパイル対象に設定
3. **テストなし**: 現在ユニットテストフレームワークは未設定
4. **ESLint無効**: PRワークフローでlintがコメントアウト中（将来的に再有効化予定）

## よくある作業

### Worksページに新しいプロジェクトを追加
`src/pages/works.vue`を編集し、`workInfos`配列にオブジェクトを追加:
```javascript
{
  title: 'プロジェクト名',
  image: '/images/project.png',  // または外部URL
  tags: ['タグ1', 'タグ2'],
  comment: 'プロジェクトの説明',
  url: 'https://project-url.com'
}
```

### 経歴タイムラインの更新
`src/pages/about.vue`の`timelineContent`配列を編集（エントリは新しい順）

### テーマカラーの変更
`src/assets/bulma-style.scss`の`$laala`変数を変更
