# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for a sweet soup shop called "甜蜜糖水铺" (Sweet Soup Shop). The project uses Vite as the build tool with React and Tailwind CSS for styling. It features a single-page application with routing for different sections.

## Architecture and Structure

- **Framework**: React with Vite
- **Routing**: React Router (HashRouter)
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Custom UI library based on Radix UI and Tailwind
- **Animations**: Framer Motion
- **State Management**: React hooks and React Query for data fetching

### Key Directories and Files

- `src/App.jsx` - Main application component with routing
- `src/main.jsx` - Application entry point
- `src/nav-items.jsx` - Navigation configuration
- `src/pages/` - Page components (Index.jsx, Menu.jsx)
- `src/components/ui/` - Reusable UI components
- `src/lib/utils.js` - Utility functions (cn function for class merging)

### Routing Structure

The application uses hash-based routing with two main pages:
- `/` - Home page (Index.jsx)
- `/menu` - Menu page (Menu.jsx)

## Common Development Tasks

### Starting the Development Server

```bash
npm run dev
```

This starts the Vite development server with hot module replacement.

### Building for Production

```bash
npm run build
```

This creates a production build in the `dist` directory.

### Linting

```bash
npm run lint
```

This runs ESLint to check for code quality issues.

### Previewing Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## Component Structure

UI components follow a modular structure:
- Components are built using Radix UI primitives
- Styled with Tailwind CSS
- Use the `cn` utility function for merging class names
- Variants are managed with `class-variance-authority`

## Navigation

Navigation is handled through:
1. React Router for page-level navigation
2. Anchor scrolling for section-level navigation within pages
3. A centralized `navItems` configuration in `src/nav-items.jsx`

## Image Handling

Images are loaded from the public directory with paths like `/banner/slide-1.jpg`.

## Key Features

1. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
2. **Animations** - Page transitions and interactive elements using Framer Motion
3. **Image Carousel** - Custom implementation on the home page
4. **Interactive Navigation** - Smooth scrolling to sections
5. **Dynamic Content** - Menu items and product data managed in component state

## Development Notes

- The project uses absolute imports with `@` alias pointing to the `src` directory
- Components follow a consistent structure with motion animations
- Button components support different variants and sizes through props
- The site is built as a single-page application with client-side routing