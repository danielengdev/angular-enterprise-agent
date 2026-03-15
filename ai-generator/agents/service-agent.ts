import { renderTemplate } from "../utils/template-engine"
import { writeFile } from "../utils/file-writer"

export function createService(path:string,name:string){

 const code = renderTemplate("service.template.ts",{name})

 writeFile(`${path}/${name}.ts`,code)

}