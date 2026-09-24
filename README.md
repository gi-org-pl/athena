![Athena header](https://raw.githubusercontent.com/gi-org-pl/athena/main/.github/image/header.png)

# Athena

Athena is a component library used by Generacja Innowacja's front-end projects.

## Repository contents

Repository contains project made using Vite with library mode.

Project is using tools in versions listed below:

| Technology | Version |
| ---------- | ------- |
| Node.js    | ^24.x   |
| TypeScript | ^5.9    |
| Yarn       | ^1.22   |

Project's main dependencies are listed below.

| Dependency   | Version |
| -------      | ------- |
| Vite         | ^7.2    |
| React        | ^19.x   |
| Tailwind CSS | ^4.x    |
| Vitest       | ^4.x    |
| Storybook    | ^10.x   |

External dependencies:

| Dependency   | Version |
| -------      | ------- |
| shadcn       | latest  |

### Package descriptions

- **Vite** - Next-generation frontend build tool providing fast development experience with instant HMR and optimized production builds
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vitest** - Fast unit testing framework powered by Vite
- **Storybook** - UI development environment and playground for building, previewing, and testing isolated components interactively
- **shadcn** - Toolkit for extracting and managing component code patterns, used for generating modern React components

### Meet the standards

Before you start, make sure you have read and understood the following documents:

- [GI Tech Standards](https://github.com/Generacja-Innowacja/gi-tech-standards)
- [Before start GitHub configuration](https://github.com/Generacja-Innowacja/gi-tech-standards/blob/main/docs/github/INDEX.md)

## Infrastructure

This is a frontend-only library that runs locally using Vite development server.

## Setting project up

This app uses Node.js and Yarn package manager. In order to set up project, follow these steps:

1. Install Node.js (v24.x or higher):
   - Download from [nodejs.org](https://nodejs.org/)
   - Use a version manager like [nvm](https://github.com/nvm-sh/nvm)

2. Install Yarn globally:

   ```shell
   npm install --global yarn@^1.22
   ```

3. Clone project by running:

   ```shell
   git clone <your-repository-url>
   ```

4. Navigate to the project directory:

   ```shell
   cd athena
   ```

5. Install dependencies using Yarn:

   ```shell
   yarn install
   ```

## Running the project

To start storybook development server:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Available scripts

```bash
yarn build            # Build for production
yarn typecheck        # Type-check the project with TypeScript (tsc -b)
yarn test             # Run unit tests with Vitest
yarn test:coverage    # Run tests with coverage report
yarn lint             # Run Biome linter
yarn lint:fix         # Fix lint, formatting and import order automatically
yarn lint:ci          # Check lint, formatting and import order (read-only, used in CI)
yarn format           # Format files with Biome
yarn format:check     # Check formatting without writing
yarn storybook        # Run Storybook in development mode
yarn storybook:build  # Build Storybook for production
```

## How to create new components?

1. Find a matching `shadcn` component in the [shadcn components library](https://ui.shadcn.com/docs/components)

2. Create a new component with use of `shadcn` and `npx`

    Example: `npx shadcn@latest add button`

3. Adjust component structure to [the standard](https://github.com/Generacja-Innowacja/gi-tech-standards/blob/main/docs/frontend/conventions/COMPONENT_STRUCTURE.md)

4. Add unit tests and storybook stories

5. Export new component in the [main.ts file](src\main.ts)

## Build

This project uses Vite in library mode. `yarn build` generates the `dist` directory:

| File               | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `dist/athena.js`   | ES module with all components. Dependencies are not bundled.                   |
| `dist/index.d.ts`  | TypeScript declarations                                                        |
| `dist/athena.css`  | Theme and Tailwind entry, compiled by the consuming app's Tailwind (see below)  |

Only `dist` is included in the package (`files` in `package.json`).

## Using Athena in an app

### Installation

Athena is published to npm as [`@gi-org-pl/athena`](https://www.npmjs.com/package/@gi-org-pl/athena). It's a public package, so no registry configuration or token is needed:

```shell
yarn add @gi-org-pl/athena
```

### Requirements

The app provides these peer dependencies:

| Dependency   | Version |
| ------------ | ------- |
| React        | ^19     |
| React DOM    | ^19     |
| Tailwind CSS | ^4      |

The app must build its CSS with Tailwind CSS v4 (e.g. `@tailwindcss/vite` or `@tailwindcss/postcss`).

### Styles

Import Athena's CSS in the app's main CSS file, **instead of** `@import "tailwindcss";`:

```css
@import "@gi-org-pl/athena/athena.css";
```

`athena.css` imports Tailwind, defines Athena's theme and tells Tailwind to scan `dist/athena.js`, so the app's Tailwind generates every utility class Athena's components use.

### Components

```tsx
import { Button } from "@gi-org-pl/athena";

export const Example = () => <Button>Click me</Button>;
```

### Testing the package locally

To try local changes in an app before they are released:

```shell
yarn build
yarn pack --filename athena.tgz
# in the app
yarn add file:/path/to/athena/athena.tgz
```

## Releases

Releases are fully automated with [semantic-release](https://semantic-release.gitbook.io/). Every push to `main` runs the `release` workflow, which:

1. determines the next version from the commit messages since the last release,
2. builds the package and publishes it to [npm](https://www.npmjs.com/package/@gi-org-pl/athena) with [provenance](https://docs.npmjs.com/generating-provenance-statements),
3. creates a `vX.Y.Z` git tag and a GitHub Release with generated release notes.

The version is derived from [Conventional Commits](https://www.conventionalcommits.org/). Pull requests are squash-merged, so **the PR title** becomes the commit message on `main`. The `pr-title` workflow fails for PR titles that don't follow the format:

| PR title                                                  | Release         |
| --------------------------------------------------------- | --------------- |
| `fix: ...`, `perf: ...`, `refactor: ...`, `revert: ...`   | patch (`1.0.x`) |
| `feat: ...`                                               | minor (`1.x.0`) |
| `feat!: ...`, `fix(button)!: ...` (any type with `!`)     | major (`x.0.0`) |
| `chore: ...`, `ci: ...`, `docs: ...`, `test: ...`, ...    | no release      |

A scope is optional: `feat(button): add loading state`.

The `version` field in `package.json` is not updated in the repository; semantic-release sets it only in the published package.

Publishing uses [npm trusted publishing](https://docs.npmjs.com/trusted-publishers): GitHub Actions authenticates to npm with a short-lived OIDC token, so no npm token is stored in the repository. The trusted publisher is configured in the package settings on npmjs.com (organization `gi-org-pl`, repository `gi-org-pl/athena`, workflow `release.yml`).

## Testing

This library uses Vitest with React Testing Library for component and utility testing

Run tests with:

```bash
yarn test              # Run unit tests
yarn test:coverage     # Run tests with coverage
```

## Linting

This library uses BiomeJS for code linting and formatting. Biome is a fast, all-in-one toolchain that replaces ESLint, Prettier, and other tools.

- **Linter**: BiomeJS provides fast linting with TypeScript support
- **Formatter**: Built-in code formatter with consistent style
- **Import Organization**: Automatic import sorting and organization

Run linting with:

```bash
yarn lint              # Check for linting issues
yarn lint:fix          # Automatically fix linting, formatting and import order
yarn lint:ci           # Check linting, formatting and import order without writing (same as CI)
yarn format            # Format files
yarn format:check      # Check formatting without writing
```

All scripts use the Biome version locked in `yarn.lock`, so local runs and CI always use the same Biome binary.

The project is configured with custom linting rules in `biome.json`, including complexity checks, style rules, and correctness validations for TypeScript files.

## Visual testing

This library uses Storybook for visual testing and component development. Storybook provides an isolated environment to develop, test, and document UI components independently.

- **Component Development**: Build and test components in isolation
- **Visual Testing**: Preview components with different props and states
- **Documentation**: Auto-generate component documentation from stories
- **Addons**: Includes accessibility, docs, and Vitest integration addons

Run Storybook with:

```bash
yarn storybook        # Start Storybook development server (http://localhost:6006)
yarn storybook:build  # Build Storybook for production deployment
```

## Resources

- [Vite Documentation](https://vite.dev/) - Vite build tool documentation
- [React Router Documentation](https://reactrouter.com/) - React Router framework documentation
- [React Documentation](https://react.dev/reference/react) - React.js reference
- [Learn React](https://react.dev/learn) - an interactive React.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/) - Tailwind CSS documentation
- [Vitest Documentation](https://vitest.dev/) - Vitest testing framework documentation
- [BiomeJS Documentation](https://biomejs.dev/) - BiomeJS linter and formatter documentation
- [Storybook Documentation](https://storybook.js.org/) - Storybook component development and visual testing documentation
