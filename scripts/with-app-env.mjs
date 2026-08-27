#!/usr/bin/env node
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { constants as osConstants } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

export const APP_ENV_REL_PATH = ".grok/app-env.json";
const VITE_PREFIX = "VITE_";

export function parseAppEnv(text) {
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const env = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (key.startsWith(VITE_PREFIX) && typeof value === "string") env[key] = value;
    }
    return env;
  } catch {
    return {};
  }
}

export function readAppEnv(root) {
  try {
    return parseAppEnv(readFileSync(join(root, APP_ENV_REL_PATH), "utf8"));
  } catch {
    return {};
  }
}

const root = dirname(fileURLToPath(import.meta.url)) + "/..";
const merged = { ...readAppEnv(root), ...process.env };
const args = process.argv.slice(2);
if (!args.length) process.exit(0);
const child = spawn(args[0], args.slice(1), { stdio: "inherit", env: merged, shell: false });
child.on("exit", (code) => process.exit(code ?? 1));
