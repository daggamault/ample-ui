# Ample UI

## Project Vision

Ample UI is a cohesive and clean React-based UI library designed for building modern, elegant, and performant applications. The core philosophy is to provide beautiful, unstyled components that are highly customizable and have zero runtime dependencies, except for Tailwind CSS.

## Guiding Principles

1.  **Zero-Dependency Components**: The components themselves will have no dependencies, giving developers complete freedom and avoiding dependency bloat.
2.  **Developer Experience**: The library should be a pleasure to use, with a clean, declarative, and flexible API. We prefer **compound components** to give developers maximum control over structure and behavior.
3.  **Headless & Unstyled by Default**: Components will ship with a clean, minimal, and accessible structure, with styling applied via Tailwind CSS utility classes.
4.  **Aesthetic Goals**: We are inspired by the simplicity, look, and feel of libraries like **shadcn/ui**, **DaisyUI**, and **Material Design**, but we explicitly avoid their implementation pitfalls:
    *   **No Copy/Paste**: Unlike shadcn, this will be a versioned, importable library.
    *   **JS-Friendly**: Unlike DaisyUI's CSS-only approach, we embrace JavaScript/TypeScript for state management and interactivity.
    *   **Framework Agnostic API**: Unlike Material, our components will not have framework-specific APIs that create lock-in.

## Technical Details & Conventions

-   **Framework**: React
-   **Styling**: Tailwind CSS v4
-   **Theming**:
    -   Fully themeable via CSS Custom Properties (variables).
    -   Colors are defined in the **OKLCH** color space for perceptual uniformity and consistency.
    -   The default theme includes palettes for `primary`, `secondary`, `success`, `warn`, `error`, and `info`.
-   **Animation**:
    -   All components should have clean, smooth, and consistent transitions.
    -   We will primarily use Tailwind's built-in transition utilities. The option to introduce a library like `Framer Motion` for more complex animations is reserved for the future if needed.
-   **File Naming Convention**: All directories and files must be **lowercase** and **kebab-cased** (e.g., `src/components/side-nav/side-nav.tsx`).
-   **Icons**: The library itself does not ship with an icon set. End-users are free to use any icon library they choose. For internal development and showcasing in Storybook, we use `lucide-react`.

## Showcasing & Documentation

Our documentation and showcase are managed within Storybook and have two main parts:

1.  **Component Stories**: Each individual component will have its own story for isolated development, testing, and documentation.
2.  **Dashboard Showcase**: A single, comprehensive "Dashboard" story will be built progressively. It will use all of our library's components together to form a functional, responsive, and animated mock-up of a complete application layout. This serves as the primary real-world example and showcase for the library.
