# ComponentX: Reusable UI Components (Work in Progress)

## Project Overview

ComponentX aims to solve the problem of **UI component duplication and inconsistency** across projects. It provides a centralized, well-documented, and easily customizable library of React UI components built with modern technologies.

**Target Audience:** This project is for developers who want to:

- Quickly prototype and build user interfaces.
- Maintain a consistent look and feel across their applications.
- Leverage pre-built, accessible, and performant UI components.
- Contribute to an open-source component library.

**What makes ComponentX unique?**

- **Modern Tech Stack:** Built with Next.js, TypeScript, Radix UI, Tailwind CSS, and Framer Motion for a fast, flexible, and type-safe development experience.
- **Radix UI Primitives:** Leverages unstyled Radix UI components, providing maximum flexibility in styling and customization.
- **Tailwind CSS Styling:** Uses Tailwind CSS and `class-variance-authority` for consistent and maintainable styling.
- **Focus on Accessibility:** Components are built with accessibility in mind, following best practices for ARIA attributes and keyboard navigation.
- **Showcase and Documentation:** Includes a showcase of component usage and a documentation section (work in progress) to help developers get started quickly.

## Key Features

- **Core UI Components:**
  - **Button:** Customizable button component with various styles and sizes.
  - **Card:** A container component for structuring content.
  - **Input:** Styled form input field.
  - **Alert:** Displays alert messages with different variants (e.g., default, destructive).
  - **Badge:** Displays small status indicators or labels.
  - **Separator:** Visually separates content sections.
  - **Tabs:** A tabbed interface for organizing content.
  - **Accordion:** Collapsible panels for displaying content in a compact way.
  - **Collapsible:** Base component for creating collapsible sections.
  - **ScrollArea:** Provides custom scrollable content areas.
  - **Sheet:** A modal-like interface that slides in from the side.
- **Advanced UI Components & Patterns:**
  - **Dialog:** A modal dialog component with animation support.
  - **NotificationInput:** A form input for email addresses with validation and toast notifications.
  - **Toast:** Displays toast notifications using Sonner.
- **Background Effects:**
  - **ConicBackground:** Renders a conic gradient background.
  - **EllipseBackground:** Renders a radial gradient background.
  - **GridBackground:** Renders a subtle grid background.
  - **LampBackground:** Creates a background with a gradient effect resembling a lamp.
  - **MaskedGridBackground:** Creates a grid-like background using masking techniques.
  - **MovingBackground:** Creates a subtly animated background with a shifting gradient effect.
  - **MovingBorder:** Creates a dynamic, animated border effect using a conic gradient.
  - **RadialBackground:** Generates a radial gradient background.
- **Navigation:**
  - **FloatingNavbar:** A floating navigation bar component.
  - **DocsSidebar:** A sidebar navigation for documentation pages.
- **Animations & Transitions:**
  - Uses Framer Motion for smooth UI transitions and animations.
  - Predefined animation variants (blur-in, scale-in, fade-in, slide-up) for easy use.
- **Showcase:**
  - Showcases various component examples and usage patterns.
  - Includes showcases for AuthModal, DialogBoilerPlate, and Gradient styles.
- **Documentation (Work in Progress):**
  - Configured sidebar navigation for documentation.
  - Table of Contents generation from Markdown content.

## Architecture & Code Organization

ComponentX follows a component-based architecture, leveraging React's composability to create reusable UI elements.

- **Component-Driven:** The core of the project is built around individual, self-contained components.
- **Radix UI as a Foundation:** Radix UI primitives provide the basic structure and accessibility features, while ComponentX adds styling and customization.
- **Tailwind CSS for Styling:** Tailwind CSS is used for consistent and maintainable styling across all components.
- **Next.js for Routing and Structure:** Next.js provides the routing, build process, and overall project structure.

**Key Components Interaction:**

1.  The `app` directory defines the routes and pages of the application.
2.  `components/ui` contains the core UI components, built on Radix UI primitives.
3.  `components/providers` sets up context providers for things like toast notifications and themes.
4.  `app/ui` contains background components and other UI elements specific to the application.
5.  `lib` contains utility functions and helper functions.
6.  `config` contains configuration files for the site and documentation.

**Directory Structure:**

```
.
├── app                  # Next.js application routes and pages
├── components           # Reusable React components
│   ├── layout           # Layout components (e.g., DocsSidebar)
│   ├── providers        # Context providers (e.g., ToastProvider)
│   └── ui               # Core UI components (e.g., Button, Card, Input)
├── config               # Configuration files (e.g., site.ts, docs.ts)
├── interfaces           # TypeScript interface definitions
├── lib                  # Utility functions
├── public               # Static assets
├── styles               # Global CSS styles
├── types                # TypeScript type definitions
└── ...
```

**Key Design Decisions:**

- **Radix UI:** Chosen for its unstyled primitives, accessibility features, and flexibility.
- **Tailwind CSS:** Chosen for its utility-first approach, ease of customization, and consistency.
- **TypeScript:** Chosen for its type safety, improved code maintainability, and developer experience.

## Technology Stack

- **Next.js:** A React framework for building performant and scalable web applications. Chosen for its routing, server-side rendering capabilities, and developer experience.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static typing. Chosen for improved code maintainability and developer experience.
- **Radix UI:** A set of unstyled, accessible UI primitives. Chosen for its flexibility and accessibility features.
- **Tailwind CSS:** A utility-first CSS framework. Chosen for its ease of customization and consistency.
- **Framer Motion:** A motion library for React. Chosen for its ease of use and powerful animation capabilities.
- **clsx & tailwind-merge:** Utilities for conditionally applying class names and merging Tailwind CSS classes.
- **ESLint:** A JavaScript linter for enforcing code style and best practices.
- **Sonner:** A library for displaying toast notifications.

## Getting Started

1.  **Prerequisites:**

    - Node.js (version 18 or later)
    - npm or yarn

2.  **Installation:**

    ```bash
    git clone <repository_url>
    cd ComponentX
    npm install  # or yarn install
    ```

3.  **Development:**

    ```bash
    npm run dev  # or yarn dev
    ```

    This will start the development server at `http://localhost:3000`.

4.  **Build & Production:**

    ```bash
    npm run build  # or yarn build
    npm run start  # or yarn start
    ```

5.  **Basic Usage:**

    ```jsx
    import { Button } from "@/components/ui/button";

    function MyComponent() {
      return <Button variant="primary">Click me</Button>;
    }
    ```

**Common Development Commands:**

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code style issues.
- `npm run type-check`: Runs the TypeScript compiler to check for type errors.

## Project Structure

```
.
├── app                  # Next.js application routes and pages
│   ├── background       # Background component showcase
│   ├── docs             # Documentation pages
│   ├── showcase         # Component showcase pages
│   ├── ui               # Application-specific UI components
│   ├── globals.css      # Global CSS styles
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page component
│   └── ...
├── components           # Reusable React components
│   ├── layout           # Layout components (e.g., DocsSidebar)
│   ├── providers        # Context providers (e.g., ToastProvider)
│   └── ui               # Core UI components (e.g., Button, Card, Input)
├── config               # Configuration files
│   ├── site.ts          # Site configuration
│   └── docs.ts          # Documentation configuration
├── interfaces           # TypeScript interface definitions
│   └── site.ts          # Site configuration interface
├── lib                  # Utility functions
│   ├── utils.ts         # Utility functions (e.g., cn)
│   └── toc.ts           # Table of contents generation
├── public               # Static assets
├── styles               # Global CSS styles
├── types                # TypeScript type definitions
│   ├── heading.ts       # Heading type definition
│   └── nav.ts           # Navigation type definition
├── .eslintrc.json       # ESLint configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

**Important Files:**

- `app/page.tsx`: The main entry point for the application's home page.
- `components/ui/*`: The core UI components.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `config/site.ts`: Site-wide configuration data.
- `lib/utils.ts`: Utility functions, including the `cn` function for class name merging.

We welcome contributions! Please see the contributing guidelines for more information.
