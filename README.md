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

The AI agent can generate complete features for your Angular projects, including components, services, stores, and routing. This follows **Spec Driven Development (SDD)** principles, where features are defined in specifications before code generation.

### Prerequisites

- Angular project created in `apps/` with `src/app/app.routes.ts` (for routing updates).
- AI generator built (`npm run build` in `ai-generator/`).

### Feature Creation Process

1. **Define the feature spec**: Create or update specifications in `specs/features/` (e.g., `payments.spec.md`).
2. **Run the generator**: Use the CLI to generate the feature code.
3. **Customize as needed**: Modify generated code to fit specific requirements.

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

### CLI Usage Examples

Here are practical examples of how to use the CLI to generate features:

#### Basic feature generation
```bash
# Generate a payments feature for a project in apps/my-app
node ai-generator/dist/cli.js generate feature payments --root apps/my-app
```

#### Using ts-node for development
```bash
# From the ai-generator directory
cd ai-generator
npm run dev -- generate feature dashboard --root ../apps/admin-portal
```

#### Generating multiple features
```bash
# Generate auth feature
node ai-generator/dist/cli.js generate feature auth --root apps/my-app

# Generate user management feature
node ai-generator/dist/cli.js generate feature users --root apps/my-app

# Generate product catalog feature
node ai-generator/dist/cli.js generate feature products --root apps/my-app
```

#### Full workflow example
```bash
# 1. Navigate to ai-generator and build
cd ai-generator
npm install
npm run build

# 2. Create a new Angular project
cd ../apps
ng new ecommerce-app --routing=true --style=scss --standalone
cd ecommerce-app
npm install

# 3. Generate features
cd ../../ai-generator
node dist/cli.js generate feature auth --root ../apps/ecommerce-app
node dist/cli.js generate feature products --root ../apps/ecommerce-app
node dist/cli.js generate feature cart --root ../apps/ecommerce-app

# 4. Start the application
cd ../apps/ecommerce-app
ng serve
```

#### Command structure
```
angular-agent generate feature <feature-name> [--root <project-path>]
```

- `feature-name`: The name of the feature to generate (e.g., payments, auth, dashboard)
- `--root`: Path to the Angular project root (defaults to current directory if not specified)

## Feature Versioning and Evolution

### Versioning Strategy

Each feature follows semantic versioning in its specifications:
- **Major**: Breaking changes to API or behavior
- **Minor**: New functionality added
- **Patch**: Bug fixes and improvements

Version information is tracked in the feature's spec file (e.g., `specs/features/payments.spec.md`).

### Evolving Features

To evolve an existing feature following SDD:

1. **Update the specification**: Modify the feature spec in `specs/features/` to include new requirements.
2. **Version the changes**: Update the version number in the spec according to semantic versioning.
3. **Regenerate the code**: Run the generator again to update the feature code.
4. **Test and validate**: Ensure the changes work as expected.
5. **Document changes**: Update any related documentation.

### Adding New Features

When adding new features:

1. **Create feature spec**: Write a new `.spec.md` file in `specs/features/` describing the feature requirements.
2. **Follow the template**: Use the existing specs as templates for consistency.
3. **Generate the feature**: Use the CLI to create the initial code structure.
4. **Iterate and refine**: Update specs and regenerate as needed during development.

### Best Practices for Feature Evolution

- Always update specs before code changes.
- Use descriptive commit messages referencing the spec version.
- Test generated code thoroughly before committing.
- Keep specs in sync with the actual implementation.
- Use the feature-driven architecture to maintain separation of concerns.

## Author

**Daniel Faustino**  
Email: [daniel.eng.dev@gmail.com](mailto:daniel.eng.dev@gmail.com)

This project was created to streamline Angular development using AI-powered code generation.

# angular-enterprise-agent
