#!/usr/bin/env node

// Angular Enterprise AI Agent CLI
// Author: Daniel Faustino <daniel.eng.dev@gmail.com>
// Description: Command-line interface for generating Angular features using AI agents

import path from "path"
import { generateFeature } from "../agents/feature-agent"

const args = process.argv.slice(2)
const command = args[0]
const type = args[1]
const name = args[2]

// Optional flags
const rootFlagIndex = args.findIndex((arg) => arg === "--root" || arg === "--project")
const projectRoot =
  rootFlagIndex >= 0 && args[rootFlagIndex + 1]
    ? path.resolve(process.cwd(), args[rootFlagIndex + 1])
    : process.cwd()

if (command === "generate" && type === "feature" && name) {
  generateFeature(name, projectRoot)
} else {
  console.log("Usage: generate feature <name> [--root <project-path>]")
}
