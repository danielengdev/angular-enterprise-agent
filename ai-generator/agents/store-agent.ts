// Angular Store Generator Agent
// Author: Daniel Faustino <daniel.eng.dev@gmail.com>
// Description: Generates Angular signal-based stores using templates

import { renderTemplate } from "../utils/template-engine"
import { writeFile } from "../utils/file-writer"

export function createStore(path:string,name:string){

 const code = renderTemplate("store.template.ts",{name})

 writeFile(`${path}/${name}.ts`,code)

}