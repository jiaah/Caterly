# All-in-One Catering Operations Platform

It brings together recurring and catering management, meal planning, HR, payroll, and revenue tracking into one unified system, customized for internal use within a real-world business environment.

## 🌟 Key Features

| **Version** | **Features**                                                                                                      | **Focus**      |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | -------------- |
| **MVP**     | **[Admin]** Integrated Login System <br/>Client & Meal Price Management <br/> Regular & Event Catering Management | **Core**       |
| **v1.0.0**  | **[Client]** Meal Quantity Registration                                                                           | **Client**     |
| **v2.0.0**  | **[Admin]** Transaction Statements, Revenue Overview <br/> **[Client]** Transaction Statement Issuance            | **Finance**    |
| **v3.0.0**  | **[Admin]** Employee Management, Work Hours Tracking, Payroll Management                                          | **HR**         |
| **v4.0.0**  | **[Admin]** Delivery Management System                                                                            | **Catering**   |
| **v5.0.0**  | **[Admin]** Operations Settings, Client Notices                                                                   | **Operations** |

## 🛠️ Tech Stack

| **Category**        | **Stack**       | **Reason**                                                      |
| ------------------- | --------------- | --------------------------------------------------------------- |
| **Frontend**        | **React**       | Dynamic UI, SEO not required                                    |
| **CSS**             | **TailwindCSS** | Fast prototyping, easy maintenance                              |
| **UI**              | **shadcn/ui**   | Accessible, Tailwind-compatible                                 |
| **Backend**         | **Supabase**    | Auth, DB, API in one                                            |
| **Task Runner**     | **Turborepo**   | Parallel execution & smart caching                              |
| **Package Manager** | **pnpm**        | Fast installs & disk-efficient with strict dependency isolation |
| **Bundler**         | **Vite**        | Fast HMR & minimal config                                       |
| **Hosting**         | **Vercel**      | Free tier, Seamless Git deploys & edge speed deploy             |
| **Docs**            | **Markdown**    | History management & document safety                            |

## 📁 Monorepo & App Architecture

Monorepo Architecture

```tsx
monorepo/
├── apps/                # Standalone apps
│   ├── web/             # Common UI (no routing)
│   ├── admin/           # Admin app
│   ├── client/          # Client app
├── packages/            # Reusable shared modules (Global)
│   ├── ui-kit/          # UI library abstraction layer (Button, Modal, etc.)
│   ├── hooks/           # Common React hooks
│   ├── types/           # Global types (API, domain models)
│   └── utils/           # Common utility functions
```

App Architecture (Feature-Sliced-Design)

```tsx
src/
├── app/         # Application setup (routing, global providers, styling, etc.)
├── pages/       # Route-level compositions (full screen, entry points per route)
├── widgets/     # Composed UI blocks made of multiple features and entities
├── features/    # Standalone feature modules focused on user interactions
├── entities/    # Domain models representing core business logic (DB schemas, APIs)
└── shared/      # Reusable utilities, UI components, hooks, types, etc.

```

Package Dependency Overview

<p align="center"><img src="https://github.com/user-attachments/assets/46ae96d8-6fa0-41c2-9951-dbef9d93939e"/></p>

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm 9.x or higher

1. Install dependencies

```bash
pnpm install
```

2. Set up environment variables

```bash
cp .env.dev
#
```

### Development

Start the development server

```bash
# Start specific application
pnpm dev:admin
pnpm dev:client
```

### Build

```bash
# Build all packages and applications
pnpm build

# Build specific application
pnpm build:admin
pnpm build:client
```

After building, production files will be in the `apps/**/dist/` folder, ready for deployment.

## 🔄 Development to Production Pipeline

<p align="center"><img src="https://github.com/user-attachments/assets/9ddfe534-8a70-428f-8291-130639ef0572"/></p>

## 🌐 Browser / Mobile Compatibility

| Environment                           | Support Status                                         |
| ------------------------------------- | ------------------------------------------------------ |
| **Windows / macOS + Latest Browsers** | ✅ Fully Supported                                     |
| **iOS 13+ / Android 7+**              | ✅ Fully Supported                                     |
| **Older Versions**                    | <span style="color: yellow;">⚠️</span> Limited Support |
| **IE11 and below**                    | ❌ Not Supported                                       |
