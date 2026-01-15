# Next.js Fullstack Monorepo Template

A robust, production-ready template for fullstack applications using **Next.js 15 (App Router)** and **NestJS**.

## 🚀 Features

- **Monorepo**: Powered by `pnpm` workspaces.
- **Frontend**: Next.js 15, React 19, TailwindCSS, Radix UI.
- **Backend**: NestJS, TypeScript.
- **Type Safety**: End-to-end type safety.

## 🛠 Prerequisites

- Node.js 20+
- pnpm 9+ (`corepack enable` is recommended)

## 🏁 Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Environment**
   - Copy `.env` to `.env.local` if needed and update variables.

   ```bash
   cp .env .env.local
   ```

4. **Start Development Server**
   Run both frontend and backend in parallel:

   ```bash
   pnpm dev
   ```

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:4000](http://localhost:4000)

## 📂 Project Structure

```
├── apps
│   ├── web/      # Next.js Frontend
│   └── server/   # NestJS Backend
├── packages/     # Shared libraries (UI, utils, tsconfig)
├── .env          # Global environment variables template
└── pnpm-workspace.yaml
```

## 📜 Scripts

| Command | Description |
|Col 1 | Col 2|
|---|---|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps for production |
| `pnpm lint` | Run ESLint across the workspace |
| `pnpm test` | Run tests (if configured) |

## 🤝 Contributing

1. Create a branch: `git checkout -b feat/amazing-feature`
2. Commit changes: `git commit -m 'feat: add amazing feature'`
3. Push to branch: `git push origin feat/amazing-feature`
4. Open a Pull Request
