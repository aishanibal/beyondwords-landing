# BeyondWords - AI-Powered Content Platform

## Overview

BeyondWords is a full-stack web application designed as an AI-powered content creation platform specifically tailored for heritage speakers and diaspora communities. The application features a modern landing page with waitlist functionality, built using a React frontend with Express.js backend architecture.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using cream, rose, and blue color palette
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **API Design**: RESTful endpoints with proper error handling and logging

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Development**: Hot Module Replacement (HMR) with Vite dev server
- **Production Build**: Static asset generation with server-side bundling
- **TypeScript**: Strict mode enabled with path mapping for clean imports

## Key Components

### Landing Page Features
1. **Hero Section**: Compelling introduction with call-to-action buttons
2. **Language Support**: Visual representation of supported heritage languages with flag emojis
3. **Features Section**: Detailed feature cards with animations and color-coded categories
4. **Testimonials**: Rotating testimonials with automatic slideshow
5. **Waitlist Signup**: Email collection with heritage language selection
6. **Navigation**: Smooth scrolling navigation with floating contact widget
7. **Footer**: Comprehensive links and social media integration

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Waitlist Emails Table**: Email collection with heritage language tracking and timestamps
- **Schema Validation**: Zod schemas for runtime type safety and API validation

### UI Component System
- **Design System**: Custom CSS variables for consistent theming
- **Typography**: Google Fonts integration (Grandstander, Montserrat, AR One Sans)
- **Interactive Elements**: Hover effects, animations, and responsive design
- **Accessibility**: ARIA labels and semantic HTML structure

## Data Flow

### Waitlist Registration Flow
1. User fills out email and selects heritage language
2. Frontend validates data using Zod schema
3. API checks for duplicate emails in database
4. New entry created in waitlist_emails table
5. Success confirmation displayed to user
6. Waitlist count updated in real-time

### Content Management
- Static content managed through React components
- Dynamic content (waitlist count) fetched via API
- Real-time updates using React Query's caching system

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Library**: Radix UI primitives for accessible components
- **Validation**: Zod for schema validation and type safety
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion for interactive animations

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with Express middleware integration
- **Database**: Environment-based DATABASE_URL configuration
- **Error Handling**: Development-specific error overlays and logging

### Production Build
- **Frontend**: Static assets built to `dist/public` directory
- **Backend**: Server bundled using ESBuild with external dependencies
- **Deployment**: Single build command creates both client and server bundles
- **Environment**: Production mode with optimized assets and error handling

### Database Management
- **Migrations**: Drizzle migrations stored in `./migrations` directory
- **Schema Updates**: `db:push` command for development schema updates
- **Connection**: Pooled connections using Neon's serverless driver

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```