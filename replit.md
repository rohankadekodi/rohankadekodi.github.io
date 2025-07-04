# Academic Portfolio Website

## Overview

This is a full-stack academic portfolio website built for Rohan Kadekodi, showcasing his research, publications, projects, and professional experience. The application follows a modern full-stack architecture with a React frontend and Express.js backend, designed for academic professionals to present their work and achievements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **API Design**: RESTful API with `/api` prefix

### Development Environment
- **Bundler**: Vite with React plugin
- **TypeScript**: Strict mode enabled with path mapping
- **Hot Reload**: Vite HMR with runtime error overlay
- **Replit Integration**: Custom cartographer plugin for Replit environment

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized in `shared/schema.ts` for type sharing
- **Migrations**: Managed through Drizzle Kit
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Frontend Components
- **Layout**: Responsive design with sidebar navigation
- **Sections**: Modular components for About, Education, Publications, Projects, Teaching, Talks
- **UI Components**: Comprehensive set of shadcn/ui components
- **Theming**: Light/dark mode support with CSS custom properties

### Backend Services
- **Routes**: Modular route registration system
- **Storage**: Interface-based storage abstraction
- **Development Server**: Vite integration for SSR-like development experience
- **Error Handling**: Centralized error middleware

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Route Handling**: Express routes process requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client
5. **UI Updates**: TanStack Query manages cache and UI updates

### Academic Data Structure
- Personal information and contact details
- Educational background with advisor information
- Research publications and venues
- Project descriptions with current status
- Teaching experience and roles
- Technical talks and presentations
- Work experience with mentorship details

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Google Fonts**: Inter font family

### Data and State
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Full-stack hot reload with Vite middleware
- **Type Checking**: Continuous TypeScript checking
- **Database**: Development uses in-memory storage with fallback to PostgreSQL

### Production Build
- **Frontend**: Vite builds optimized React application
- **Backend**: ESBuild bundles Express server as ES module
- **Static Assets**: Frontend served from Express with proper caching
- **Database**: Production PostgreSQL via Neon Database
- **Environment**: NODE_ENV-based configuration

### Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Management**: PostgreSQL-backed sessions for production
- **Build Output**: Separate directories for frontend (`dist/public`) and backend (`dist`)

## Changelog
- July 04, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.