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

## Creating a new Angular project

To create a new Angular project manually in the `apps/` directory:

1. Navigate to the `apps/` folder:
   ```bash
   cd apps
   ```

2. Use Angular CLI to create a new project:
   ```bash
   ng new your-project-name --routing=true --style=scss --standalone
   ```

3. This will create `apps/your-project-name/` with its own `package.json`, `angular.json`, and standard Angular structure.

4. Install dependencies for the new project:
   ```bash
   cd your-project-name
   npm install
   ```

> **Note**: Each project in `apps/` is independent and should follow Angular best practices.

## Generating a feature

The AI agent can generate complete features for your Angular projects, including components, services, stores, and routing.

### Prerequisites

- Angular project created in `apps/` with `src/app/app.routes.ts` (for routing updates).
- AI generator built (`npm run build` in `ai-generator/`).

### What gets generated

For a feature named `payments`, the agent creates:
- `src/app/features/payments/` directory
- `payments-page.component.ts` (main page component)
- `payments-form.component.ts` (form component)
- `payments.service.ts` (service for API calls)
- `payments.store.ts` (signals-based state management)
- `payments.routes.ts` (feature routes)
- Updates `src/app/app.routes.ts` to include the new feature route

### Using the built output

```bash
node ai-generator/dist/cli.js generate feature payments --root apps/your-project
```

### Using ts-node (dev)

```bash
cd ai-generator
npm run dev -- generate feature payments --root ../apps/your-project
```

> ✅ After generation, the feature is ready to use. You can customize the generated code as needed.

# angular-enterprise-agent
