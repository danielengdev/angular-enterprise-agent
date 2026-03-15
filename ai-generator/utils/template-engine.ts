import fs from 'fs'

export function renderTemplate(template:string,data:any){

 const file = fs.readFileSync(`templates/${template}`,'utf8')

 return file.replace(/{{(.*?)}}/g,(m,k)=>data[k.trim()]||'')

}