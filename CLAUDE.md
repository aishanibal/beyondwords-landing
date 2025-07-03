# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Type checking
npm run check

# Production build
npm run build

# Preview production build
npm run preview

# Install client dependencies
npm run install-client
```

## Project Architecture

This is a frontend-only React application for BeyondWords, an AI-powered content platform for heritage speakers and diaspora communities. It uses Supabase as the backend.

### Stack Overview
- **Frontend**: React 18 + TypeScript, Vite bundler, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **UI**: Radix UI primitives with shadcn/ui components
- **State**: TanStack Query for server state
- **Routing**: Wouter (client-side)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion

### Key Directories
- `client/` - React frontend application (main project)
- `client/src/components/ui/` - Reusable UI components
- `client/src/pages/` - Page components
- `client/src/lib/` - Utility functions and configurations

### Database Configuration
- Uses Supabase client SDK directly from frontend
- No backend server required
- Schema: `waitlist_emails` table with email, heritage_language, and created_at columns

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Static assets built for deployment to any static host
- **TypeScript**: Strict mode with path mapping configured

### Environment Variables (client/.env)
```bash
VITE_SUPABASE_URL=     # Supabase project URL
VITE_SUPABASE_ANON_KEY= # Supabase anon key
```

### Component System
- Design system using cream, rose, and blue color palette
- Google Fonts: Grandstander, Montserrat, AR One Sans
- Responsive design with mobile-first approach
- Accessibility with ARIA labels and semantic HTML

## Important Notes

- This is a frontend-only application - no backend server needed
- All database operations go directly through Supabase client
- All commands should be run from the root directory (they automatically cd to client/)
- Frontend uses ESM imports and Vite's path resolution
- Can be deployed to any static hosting service (Netlify, Vercel, etc.)