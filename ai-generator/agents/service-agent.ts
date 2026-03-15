// Angular Service Generator Agent
// Author: Daniel Faustino <daniel.eng.dev@gmail.com>
// Description: Generates Angular services using templates

import { renderTemplate } from "../utils/template-engine"
import { writeFile } from "../utils/file-writer"

export function createService(path:string,name:string){

 const code = renderTemplate("service.template.ts",{name})

 writeFile(`${path}/${name}.ts`,code)

}