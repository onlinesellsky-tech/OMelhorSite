# Livroteca Landing Page

## Overview

Livroteca is a high-conversion landing page designed to sell a digital collection of +35 best-selling ebooks and an optional VIP package with +20 audiobooks and a planner. The project is built as a modern React-based landing page with a focus on conversion optimization, featuring clean design principles, strategic color usage, and smooth scroll animations to create a premium user experience.

The application targets individuals seeking personal and professional development through curated content from world-renowned authors covering topics like finance, productivity, habits, and business strategy. The pricing strategy includes a primary offer at R$10 for ebooks and an upsell VIP package at R$17 for the complete experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system implementing the Livroteca brand colors and spacing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Animations**: Framer Motion for scroll-triggered animations and smooth page transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store
- **API Structure**: RESTful endpoints with `/api` prefix routing

### Design System Implementation
- **Color Palette**: Light mode primary with neutral backgrounds (248 10% 97%), orange accent (#FF8C00) for CTAs
- **Typography**: Montserrat/Poppins for headings, Open Sans/Roboto for body text
- **Layout System**: Mobile-first responsive design with Tailwind's utility classes
- **Component Architecture**: Modular section-based components (Hero, Offer, Testimonials, etc.) for maintainability

### Database Schema
- **User Management**: Basic user table with username/password authentication
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for scalability

### Development Workflow
- **Hot Module Replacement**: Vite dev server with instant updates
- **Type Checking**: Full TypeScript coverage across frontend, backend, and shared code
- **Path Aliases**: Clean imports using `@/` for client code and `@shared/` for common utilities

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with auto-scaling capabilities
- **Connection**: `@neondatabase/serverless` driver for optimized serverless connections

### UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including accordion, dialog, dropdown menus, and form controls
- **Lucide React**: Modern icon library for consistent iconography
- **Framer Motion**: Animation library for scroll-triggered effects and micro-interactions
- **Embla Carousel**: Lightweight carousel component for content presentation

### Development and Build Tools
- **shadcn/ui**: Pre-built component system with Tailwind CSS integration
- **TanStack Query**: Server state management for efficient data fetching and caching
- **Wouter**: Minimalist routing solution for single-page application navigation
- **React Hook Form**: Form handling with validation integration
- **Zod**: Schema validation for forms and API endpoints

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **PostCSS**: CSS processing with autoprefixer for browser compatibility
- **Google Fonts**: Web fonts integration for Montserrat, Poppins, and supporting typefaces

### Server and Session Management
- **Express.js**: Web framework for API endpoints and middleware
- **connect-pg-simple**: PostgreSQL session store for user authentication persistence
- **CORS and Security**: Basic security middleware for API protection