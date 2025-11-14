# Shift Turborepo Monorepo

## Structure

```
Shift/
├── apps/
│   ├── marketing/          # Marketing website (port 3000)
│   └── web/                # Delivery app (port 3001)
├── packages/
│   ├── api/                # tRPC API routes
│   ├── auth/               # Better Auth configuration
│   ├── db/                 # Drizzle ORM & database
│   └── ui/                 # Shared shadcn/ui components
```

## Apps

### Marketing (`apps/marketing`)
- **Port**: 3000
- **Purpose**: Public-facing marketing website
- **Dependencies**: `@shift/ui`
- **Tech**: Next.js 16, React 19, Tailwind CSS 4
- **Routes**: `/` (home), `/about`
- **Note**: Lightweight, no auth or API dependencies

### Web (`apps/web`)
- **Port**: 3001
- **Purpose**: Core delivery application
- **Dependencies**: `@Shift/api`, `@Shift/auth`, `@Shift/ui`
- **Tech**: Next.js 16, React 19, tRPC, Better Auth, Cloudflare

## Packages

### UI (`@shift/ui`)
Shared UI components using shadcn/ui with Radix UI primitives.

**Available Components**:
- Button
- Card
- Input
- Label

**Usage**:
```tsx
import { Button } from "@shift/ui/components/ui/button";
```

### API (`@Shift/api`)
tRPC API routes shared across applications.

### Auth (`@Shift/auth`)
Better Auth configuration and utilities.

### DB (`@Shift/db`)
Drizzle ORM schema and database utilities.

## Development

### Run all apps
```bash
pnpm dev
```

### Run specific app
```bash
pnpm dev:marketing  # Marketing site on port 3000
pnpm dev:web        # Delivery app on port 3001
```

### Build all apps
```bash
pnpm build
```

### Build specific app
```bash
pnpm build:marketing
pnpm build:web
```

### Type checking
```bash
pnpm check-types
```

## Database Commands

```bash
pnpm db:start      # Start PostgreSQL container
pnpm db:push       # Push schema changes
pnpm db:studio     # Open Drizzle Studio
pnpm db:generate   # Generate migrations
pnpm db:migrate    # Run migrations
pnpm db:stop       # Stop container
pnpm db:down       # Remove container
```

## Adding UI Components

Add shadcn/ui components to the shared UI package:

```bash
cd packages/ui
pnpm dlx shadcn@latest add [component-name]
```

## CI/CD Pipeline Structure

### Separate Deployments
- **Marketing**: Can be deployed independently
- **Web App**: Can be deployed independently
- **Shared Packages**: Automatically built as dependencies

### Turbo Caching
Turborepo intelligently caches builds, so unchanged packages won't rebuild.

## Key Features

✅ Shared UI components across apps
✅ Independent app deployments
✅ Shared authentication & database
✅ Type-safe API with tRPC
✅ Optimized builds with Turborepo
✅ Hot module reloading across packages
