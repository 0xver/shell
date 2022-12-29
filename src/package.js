import { dirname, basename } from "path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const reponame = basename(process.cwd());

export const directory = __dirname.slice(0, -3);

export const json = JSON.parse(
	readFileSync(directory.concat("package.json"), "utf-8")
);

export const pkgVersion = json.version;
