# vite-react-hono-vercel-starter

Viteで構築したReact + TypeScriptのフロントエンドと、Honoで構築したバックエンドAPIを統合したVercel向けのスタータープロジェクトです。

## プロジェクト構成

- **フロントエンド**: Vite + React + TypeScript
- **バックエンド**: Hono (Node.js/Edge Runtime対応)
- **デプロイ**: Vercel

## 開発環境の構築

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

開発環境では、フロントエンドとバックエンドを別々に起動します。

#### バックエンドサーバーの起動

```bash
npm run server:hono
```

バックエンドサーバーは `http://localhost:3001` で起動します。

#### フロントエンド開発サーバーの起動

別のターミナルで以下を実行します。

```bash
npm run dev
```

フロントエンド開発サーバーは `http://localhost:5173` で起動します。

### 3. Vercelでのローカル開発

Vercelの開発環境で実行する場合：

```bash
npm install -g vercel
```

```bash
npm run server:vercel
```

SPAの場合は下記のように `vercel.json` にsourceを追加してください


```diff:
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    },
+    {
+      "source": "/(.*)",
+      "destination": "/index.html"
+    }
  ]
}

```
