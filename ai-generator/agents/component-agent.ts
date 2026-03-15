// Angular Component Generator Agent
// Author: Daniel Faustino <daniel.eng.dev@gmail.com>
// Description: Generates Angular components using templates

import { renderTemplate } from "../utils/template-engine"
import { writeFile } from "../utils/file-writer"

function toPascalCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

export function createComponent(path: string, name: string) {
  const className = toPascalCase(name)

  const code = renderTemplate("component.template.ts", {
    name: name,
    className,
  })

  writeFile(`${path}/${name}.component.ts`, code)
}
