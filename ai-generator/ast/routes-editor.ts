// Routes Editor AST Utility
// Author: Daniel Faustino <daniel.eng.dev@gmail.com>
// Description: Updates Angular app.routes.ts with new feature routes

import fs from "fs"
import path from "path"

export function updateRoutes(feature: string, projectRoot: string = process.cwd()) {
  const routesFile = path.join(projectRoot, "src", "app", "app.routes.ts")

  if (!fs.existsSync(routesFile)) return

  const content = fs.readFileSync(routesFile, "utf8")

  const route = `
{
 path:'${feature}',
 loadChildren:()=>import('./features/${feature}/${feature}.routes')
}
`

  const updated = content + route

  fs.writeFileSync(routesFile, updated)
}
