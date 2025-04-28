## Web Architecture (Customized Feature-Sliced-Design)

This structure is designed to support building common UI modules for both `apps/admin` and `apps/client`.

```tsx
web/
├── public/
│   └── assets/     # Static assets like large images (e.g., background images)
├── src/
│   ├── app/         # Application setup (**no routing**)
│   ├── widgets/
│   ├── features/
│   ├── entities/
│   └── shared/
└──
```

### Design Notes

- Based on the Feature-Sliced Design (FSD) for large-scale UI modules like invoice and login system.
- Removed `pages/` layer, as routing is unnecessary.

Public Directory Usage

- Static assets (e.g.large images) are placed in `public/assets/` to reduce bundle size.
- Vite serves files directly from `public/`, mapping them to the root path, preventing bundling.
