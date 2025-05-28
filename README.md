# All-in-One Catering Operations Platform

Unified platform for catering, revenue and HR — streamlined for real business.

## 🌟 Key Features

| **Version** | **Features**                                                                                           | **Focus**    |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------------ |
| **MVP**     | **[Admin]** Login System, Client & Catering Management                                                 | **Core**     |
| **v1.0.0**  | **[Client]** Meal Quantity Registration                                                                | **Client**   |
| **v2.0.0**  | **[Admin]** Transaction Statements, Revenue Overview <br/> **[Client]** Transaction Statement Issuance | **Finance**  |
| **v3.0.0**  | **[Admin]** Employee Management, Work Hours Tracking, Payroll Management                               | **HR**       |
| **v4.0.0**  | **[Admin]** Delivery Management System                                                                 | **Catering** |

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

## 📁 Monorepo & Architecture

### Monorepo

```tsx
monorepo/
├── apps/
│   ├── admin/           # Admin app
│   ├── client/          # Client app
│   ├── portal/          # Public entry point before login
├── packages/
│   ├── ui/              # UI library abstraction layer (e.g.,Button, Modal, etc.)
│   ├── utils/           # Shared utility functions
│   ├── types/           # Global TypeScript types (e.g.,domain models)
│   └── web/           	 # Common features (e.g.,layout, auth, invoice, etc.)
```

#### Why Monorepo?

- **Centralized Resources**: Makes it easier to reuse and update shared code and assets across all apps.
- **Unified Environment**: Minimizes dependency conflicts and compatibility issues between projects.

### Feature-Sliced Design (FSD)

```tsx
src/
├── app/         # Application setup (routing, global providers, styling, etc.)
├── pages/       # Route-level compositions (full screen, entry points per route)
├── widgets/     # Composed UI blocks made of multiple features and entities
├── features/    # Standalone feature modules focused on user interactions
├── entities/    # Domain models representing core business logic (DB schemas, APIs)
└── shared/      # Reusable utilities, UI components, hooks, types, etc.

```

#### Why Feature-Sliced Design(FSD)?

- **Maintainable**: Breaks the application into independent feature modules, minimizing cross-impact and simplifying updates.

- **Scalable**: Enables incremental growth and version updates (e.g., MVP → v1.0.0 → v2.0.0).

### Package Dependency Overview

<p align="center"><img src="https://github.com/user-attachments/assets/7b20e728-eab8-4fdd-ba00-610c47d6d7ac"/></p>

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm 9.x or higher

### Development

1. **Install dependencies**

```bash
pnpm install
```

2. **Initial TypeScript & CSS build**

```bash
pnpm tsc:build
```

3. **Start app development server**

```bash
# Start specific application
pnpm dev:admin
pnpm dev:client
```

This command will:

- Start TypeScript watch mode for shared libraries (`tsc -w`)
- Enable CSS file watching and copying (`cpx -w`)
- Launch the Vite development server with HMR

💡 Changes in shared libraries will be automatically reflected in the application through Vite's Hot Module Replacement (HMR).

📄 For detailed instructions on the monorepo development setup, refer to [Monorepo-live-reloading-setup](./docs/monorepo-live-reloading-setup.md).

## 🔄 Development to Production Pipeline

<p align="center"><img src="https://github.com/user-attachments/assets/9ddfe534-8a70-428f-8291-130639ef0572"/></p>

## 🌐 Browser / Mobile Compatibility

Older Versions: Support for legacy browsers (e.g., IE11) is limited, and users are encouraged to update for optimal experience.
