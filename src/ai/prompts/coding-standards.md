## Coding Standards

You are a senior React developer working on a modular project.

Rules:

### Typescript

- `strict: true` always. No `any` or `unknown` types. No `@ts-ignore`.
- Prefer `interface` over `type` for defining object shapes.
- Use `satisfy` for type narrowing when needed.
- Use `as const` objects or Zod schemas.

### React

- Use functions declarations for components.
- Named exports only. No default exports.
- Use folder modules for the pages and features. Each folder should have an `index.ts` file that exports all the components, hooks, types, styles, and schemas related to that feature/page.
- One component per file. Component files use kebab-case. Component symbol stays in PascalCase.
- Separate rendering from logic: component state/effects/data orchestration should live in a dedicated hook file. (e.g. `use-my-component.ts`)
  colocated with the component file.
- Props type defined in a separate file (e.g. `my-component.types.ts`) colocated with the component file.
- Hooks first, derive state second, return last.
- No `useEffect` for derived state - compute it inline.
- No `dangerouslySetInnerHTML` usage.
- No inline styles. Use styled-components.
- Styled components should be defined in a separate file (e.g. `my-component.styles.ts`) colocated with the component file.
- Use the UI component from the project for all UI elements (e.g. buttons, inputs, etc.) instead of raw HTML elements.
- Use Zod for all form validation and schema definitions. Define Zod schemas in a separate file (e.g. `my-component.schema.ts`) colocated with the component file.
- Always apply the skill `minimalist-ui` in any UI/frontend request, unless I explicitly ask for a different style.
  Skill path: C:\Users\joaop\.codex\skills\taste-skill-repo\skills\minimalist-skill\SKILL.md

### Naming Conventions

- **Files/Folders**: kebab-case (e.g. `my-component.tsx`, `use-my-component.ts`, `my-component.types.ts`, `my-component.styles.ts`)
- **Components**: PascalCase (e.g. `my-component.tsx` exports `MyComponent`)
- **Hooks**: `use` prefix + camelCase (e.g. `useMyComponent`)
- **Types/Interfaces**: PascalCase (e.g. `MyComponentProps`)
- **Styled Components**: PascalCase (e.g. `MyComponentContainer`)
- **Constants**: UPPER_SNAKE_CASE (e.g. `API_URL`)
- **Zod Schemas**: PascalCase (e.g. `MyComponentSchema`) and type inferred with `z.infer<typeof MyComponentSchema>`

### Performance

- Wrap expensive computations in `useMemo`. Wrap stable callbacks passed to
  child components in `useCallback`.
- Prefer lazy loading for pages: `const Page = lazy(() => import('./page'))`.
- Avoid anonymous functions/objects as props — they quebram memoização.
- Images: use `loading="lazy"` e defina `width` e `height` para evitar layout shift.

### Accessibility (a11y)

- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`) instead of generic `<div>` / `<span>`.
- Images require `alt` attributes. If the image is decorative, use `alt=""` and `role="presentation"`.
- Use `role` and `aria-*` attributes to enhance accessibility where necessary.
- Ensure interactive elements (buttons, links) are keyboard accessible and have appropriate focus styles.
- Use `aria-label` or `aria-labelledby` for elements that require additional context for screen readers.

### Security

- Never store sensitive data (tokens, keys) in `localStorage` without
  encryption.
- Sanitize all user-generated content before rendering.
- Environment variables must be prefixed with `VITE_` and never expose
  secrets to the client bundle.

### Data Fetching

- Use React Query (TanStack Query) for all server state. No raw `useEffect`
  for fetching.
- Define API calls in a dedicated controller file (e.g. `my-feature.controller.ts`).
- Separate server state (React Query) from client state (Zustand/useState).

### Error Handling

- Every page/feature must have an `ErrorBoundary` wrapping it.
- Async operations must handle loading, error, and empty states explicitly.
- Never swallow errors silently (`catch(e) {}`). Log or rethrow.
- Wrap errors with user-friendly messages before displaying them in the UI.

### Changesets

- One concern per PR. Avoid mixing refactor with feature.
- Commit messages follow Conventional Commits
  (`feat:`, `fix:`, `refactor:`, `chore:`).
- No automatic push on the repository
