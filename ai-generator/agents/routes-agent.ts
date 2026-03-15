import { renderTemplate } from "../utils/template-engine"
import { writeFile } from "../utils/file-writer"

function toPascalCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

export function createFeatureRoutes(path: string, name: string) {
  const className = toPascalCase(`${name}-page`)
  const code = renderTemplate("feature.routes.template.ts", {
    name,
    className,
  })

  writeFile(`${path}/${name}.routes.ts`, code)
}
