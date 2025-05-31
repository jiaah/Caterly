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
│    ├── admin/           # Admin application
│    ├── client/          # End-user application
│    └── portal/          # Unauthenticated entry point (e.g., marketing site, login page)
└── packages/
│    ├── ui/              # Design system & shared UI components (e.g., Button, Modal)
│    ├── utils/           # Common utility functions used across apps
│    └── web/             # Cross-cutting features (e.g., layout, auth)
└── tools/
     └── tailwind/        # Tailwind configuration and theme
```

#### Why Monorepo?

- **Centralized Resources**: Makes it easier to reuse and update shared code and assets across all apps.
- **Unified Environment**: Minimizes dependency conflicts and compatibility issues between projects.

### Feature-Sliced Design (FSD)

<p align="center"><img src="https://github.com/user-attachments/assets/7d4c4c01-71c2-43ea-b5d3-67b33910e3cd"/></p>

#### Layers

- **app**: Application setup and global configurations
- **pages**: Full-page views tied to specific routes
- **widgets**: Non-reusable UI units composed of features and entities
- **features**: Reusable implementations with user interaction–based C.U.D (Create, Update, Delete) logic
- **entities**: Core business models with read-focused logic

📄 Refer to [the official documentation for details on Segments](https://feature-sliced.github.io/documentation/docs/get-started/overview#segments).

#### Rules

- No usage of modules within the same or higher layers
- Access only via index.ts to enforce encapsulation

#### Why Feature-Sliced Design(FSD)?

- **Maintainability**: High cohesion and low coupling enable isolated changes without impacting the entire app.
- **Scalability**: Supports incremental growth and seamless version updates (e.g., MVP → v1.0.0 → v2.0.0).

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
