import path from "path"
import { createComponent } from "./component-agent"
import { createService } from "./service-agent"
import { createStore } from "./store-agent"
import { createFeatureRoutes } from "./routes-agent"
import { updateRoutes } from "../ast/routes-editor"

export function generateFeature(name: string, projectRoot: string = process.cwd()) {
  const base = path.join(projectRoot, "src", "app", "features", name)

  createComponent(base, `${name}-page`)
  createComponent(base, `${name}-form`)

  createService(base, `${name}.service`)

  createStore(base, `${name}.store`)

  createFeatureRoutes(base, name)

  updateRoutes(name, projectRoot)

  console.log("Feature generated:", name)
}
