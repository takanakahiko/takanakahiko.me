# CLAUDE.md

このファイルはAIアシスタントがこのリポジトリを扱う際のガイダンスを提供します。

## プロジェクト概要

**takanakahiko.me** - takanakahiko（開発者/エンジニア）の個人ポートフォリオサイト。Nuxt.js 4.x（Vue 3、SPAモード）で構築。

## ディレクトリ構成

```
src/
├── assets/          # SCSS・画像（bulma-style.scss, fill-in.css）
├── components/      # Vueコンポーネント
│   ├── PageHead.vue   # ヒーローセクションヘッダー
│   ├── RotateBox.vue  # Three.js回転キューブ
│   ├── TimeLine.vue   # 経歴タイムライン
│   └── Work.vue       # 作品カード
├── layouts/         # default.vue（ナビバー付き）、blank.vue（トップページ用）
└── pages/           # index.vue, about.vue, works.vue
public/              # 静的アセット（images/, favicon.ico）
```

## コーディング規約

### Vueコンポーネント
- Options API（`export default {}`）とComposition API（`<script setup>`）が混在
- 必要に応じて`<style scoped>`を使用

### CSS/SCSS
- プライマリカラー: `$laala: #8c67ef`（プリパラのらぁらをイメージ）
- Bulma CSSクラスを使用（`is-primary`, `hero`, `section`, `columns`等）

### インポート
- `~/` でsrcディレクトリ（例: `~/components/PageHead`）
- `@/` でアセット（例: `@/assets/bulma-style.scss`）

### コードスタイル
- 2スペースインデント、LF改行、UTF-8

## 注意事項

- `ssr: false` でSPAとして動作
- ユニットテスト未設定
- ESLintはPRワークフローでコメントアウト中

## よくある作業

### 作品追加
`src/pages/works.vue` の `workInfos` 配列に追加

### 経歴更新
`src/pages/about.vue` の `timelineContent` 配列を編集（新しい順）

### テーマカラー変更
`src/assets/bulma-style.scss` の `$laala` 変数を変更
