# All-in-One Catering Operations Platform

It brings together recurring and catering management, meal planning, HR, payroll, and revenue tracking into one unified system, customized for internal use within a real-world business environment.

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
| **Docs**            | **Markdown**    | History management & document safety                            |

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

A monorepo centralizes code and resources, making it easier to manage and update shared components.

- **Centralized Resources**: Shared code and assets are easier to reuse and update across all apps.
- **Unified Environment**: Reduces dependency conflicts and compatibility issues between projects.

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

#### Why Feature-Sliced Design?

Feature-Sliced Design (FSD) breaks the application into independent, feature-specific modules, making complex features easier to manage.

- **Modular Structure**: Isolates features into reusable modules, simplifying maintenance and collaboration.
- **Scalable Design**: Supports incremental growth and versioning (e.g., MVP → v1.0.0 → v2.0.0) without disrupting existing features.

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

2. **Set up environment variables**

```bash
cp .env.dev
```

3. **Initial TypeScript & CSS build**

```bash
pnpm tsc:build
```

4. **Start TypeScript & CSS watch mode for libraries**

```bash
pnpm predev
```

5. **Start app development server**

```bash
# Start specific application
pnpm dev:admin
pnpm dev:client
```

💡 Run both commands together to enable real-time updates via Vite's HMR (Hot Module Replacement), which instantly reflects changes without a full page reload.

📄 For detailed instructions on setting up real-time TypeScript and CSS updates with tsc -w, cpx -w, and Vite HMR in a monorepo, refer to [Monorepo-live-reloading-setup](./docs/monorepo-live-reloading-setup.md).

## 🔄 Development to Production Pipeline

<p align="center"><img src="https://github.com/user-attachments/assets/9ddfe534-8a70-428f-8291-130639ef0572"/></p>

## 🌐 Browser / Mobile Compatibility

Older Versions: Support for legacy browsers (e.g., IE11) is limited, and users are encouraged to update for optimal experience.
