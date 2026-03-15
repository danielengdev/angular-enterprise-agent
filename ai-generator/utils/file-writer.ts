import fs from "fs"
import path from "path"

export function writeFile(filePath: string, contents: string) {
  const dir = path.dirname(filePath)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(filePath, contents, { encoding: "utf8" })
  console.log(`Wrote ${filePath}`)
}
