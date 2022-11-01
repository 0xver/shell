#!/usr/bin/env node
import fs from "fs";
import path, { dirname } from "path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const directory = __dirname.slice(0, -3);
const json = JSON.parse(
  readFileSync(directory.concat("package.json"), "utf-8")
);
const version = json.version;
const verStr = `💫 @0xver/shell v${version}`;
const commands = `
Usage: shell [PRIMARY OPTION] [OPTION EXTENSION]\n
Remove < > from custom option extensions\n
PRIMARY OPTIONS:\n
  contract            🎨 Create smart contract project\n
  web3                🎭 Create web3 project\n
OPTION EXTENSIONS:\n
  <project-name>      ✨ Create name for package
`;
const copyFiles = (src, dest) => {
  const exist = fs.existsSync(src);
  const stats = exist && fs.statSync(src);
  const isDirectory = stats && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((child) => {
      copyFiles(path.join(src, child), path.join(dest, child));
    });
  } else {
    if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
  }
};

function creation(arg) {
  return `
✨ ${arg} has been created!

cd ${arg}

npm install
  `;
}

if (process.argv[2] == null) {
  console.log(`${commands}`);
}

if (process.argv[2] == "version" && process.argv[3] == null) {
  console.log(verStr);
}

if (process.argv[2] == "contract" && process.argv[4] == null) {
  let arg;
  if (process.argv[3] == undefined) {
    arg = "project";
  } else {
    arg = process.argv[3];
  }
  if (!fs.existsSync(process.cwd().concat(`/${arg}/package.json`))) {
    copyFiles(
      directory.concat("boilerplates/contract/"),
      process.cwd().concat(`/${arg}`)
    );
    console.log(creation(arg));
  }
}

if (process.argv[2] == "web3" && process.argv[4] == null) {
  let arg;
  if (process.argv[3] == undefined) {
    arg = "project";
  } else {
    arg = process.argv[3];
  }
  if (!fs.existsSync(process.cwd().concat(`/${arg}/package.json`))) {
    copyFiles(
      directory.concat("boilerplates/web3/"),
      process.cwd().concat(`/${arg}`)
    );
    console.log(creation(arg));
  }
}
