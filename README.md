# Angular Enterprise AI Agent + SDD

Advanced starter for building Angular 21+ applications using:

- Spec Driven Development (SDD)
- AI Agents for code generation
- Signals state management
- Standalone Components
- Feature Driven Architecture

## Repository layout

- `ai-generator/` → AI tool components
  - `agents/`        → intelligent code generators
  - `templates/`     → Angular code blueprints
  - `specs/`         → architecture and feature specifications
  - `ast/`           → code manipulation using AST
  - `cli/`           → command line interface
  - `utils/`         → helper utilities
- `apps/`           → Angular projects (each with its own package.json)

## Getting started

1. Ensure you have **Node.js** installed.
2. Install dependencies for the AI generator:

```bash
cd ai-generator
npm install
```

3. Create your Angular projects inside `apps/`. Each project should have its own `package.json` and be a standard Angular CLI project.

4. Build the generator:

```bash
cd ai-generator
npm run build
```

## Generating a feature

### Using the built output

```bash
node ai-generator/dist/cli.js generate feature payments --root apps/your-project
```

### Using ts-node (dev)

```bash
cd ai-generator
npm run dev -- generate feature payments --root ../apps/your-project
```

> ✅ The agent will generate:
> - `src/app/features/<feature>` (components, store, service, routes)
> - updates to `src/app/app.routes.ts` (if present)

# angular-enterprise-agent
