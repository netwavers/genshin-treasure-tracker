# Genshin Treasure Tracker

原神の「宝箱」「仙霊」「雷霊」「時間制限挑戦」の収集状況を追跡するWebアプリケーションです。

## 機能
- 全エリア（モンド〜ナタ）の収集数管理
- 残数と進捗率の自動計算
- ブラウザへのデータ自動保存
- 画像保存機能

## 使用方法

### インストール
1. `setup.bat` をダウンロードし、任意のフォルダで実行してください。
2. GitやNode.jsがインストールされていない場合は、自動的にインストールが試みられます。
3. リポジトリがクローンされ、必要なライブラリがインストールされます。

### 起動
1. デスクトップに作成された `原神チェッカー起動` ショートカットをダブルクリックしてください。
2. 自動的にブラウザが立ち上がり、アプリが表示されます。
3. 更新が必要な場合は `原神チェッカー更新` ショートカットを実行してください。

## 手動での実行方法
もしバッチファイルが動かない場合は、以下のコマンドで実行できます。

```bash
# インストール
npm install

# 起動
npm run dev
```
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
