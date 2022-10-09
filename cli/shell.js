#!/usr/bin/env node
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { exec, spawn } from "node:child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const ascii = `
  ██████  ██░ ██ ▓█████  ██▓     ██▓    
▒██    ▒ ▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    
░ ▓██▄   ▒██▀▀██░▒███   ▒██░    ▒██░    
  ▒   ██▒░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    
▒██████▒▒░▓█▒░██▓░▒████▒░██████▒░██████▒
▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░
░ ░▒  ░ ░ ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░
░  ░  ░   ░  ░░ ░   ░     ░ ░     ░ ░   
░     ░   ░  ░  ░   ░  ░    ░  ░    ░  ░
`;
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
  init                ✨ Initialize project\n
  node                🌈 Run local blockchain\n
  compile             📝 Compile program\n
  test                🦺 Test program\n
  deploy              🎉 Deploy program\n
  create              🎨 Create npm package\n
OPTION EXTENSIONS:\n
  --legacy            💾 Initialize with legacy npm\n
  --yarn              🧶 Initialize with yarn\n
  --localhost         🏡 Deploy localhost program\n
  --goerli            🚧 Deploy goerli program\n
  --mainnet           🌍 Deploy mainnet program\n
  <project-name>      🎭 Create name for package
`;
const creation = `
✨ ${process.argv[3]} has been created!

cd ${process.argv[3]}

`;

if (process.argv[2] == null) {
  console.log(`${commands}`);
}

if (process.argv[2] == "version" && process.argv[3] == null) {
  console.log(verStr);
}

if (process.argv[2] == "create" && process.argv[4] == null) {
  exec(
    `mkdir ${process.argv[3]}; cd ${process.argv[3]}; npm init -y;`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message.trim());
        return;
      }
      if (stderr) {
        console.log(stderr.trim());
        return;
      }
      console.log(`${stdout.trim()}\n${creation}`.trim(), `\n`);
    }
  );
}

if (process.argv[2] == "node" && process.argv[3] == null) {
  spawn("npx hardhat node", { shell: true, stdio: "inherit" });
}

if (process.argv[2] == "compile" && process.argv[3] == null) {
  spawn("npx hardhat compile", { shell: true, stdio: "inherit" });
}

if (process.argv[2] == "test" && process.argv[3] == null) {
  spawn("npx hardhat test", { shell: true, stdio: "inherit" });
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--localhost" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--localhost" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  spawn("npx hardhat run --network localhost scripts/src.deploy.js", {
    shell: true,
    stdio: "inherit",
  });
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--goerli" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--goerli" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  spawn("npx hardhat run --network goerli scripts/src.deploy.js", {
    shell: true,
    stdio: "inherit",
  });
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--mainnet" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--mainnet" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  spawn("npx hardhat run --network mainnet scripts/src.deploy.js", {
    shell: true,
    stdio: "inherit",
  });
}

if (
  (process.argv[2] == "init" &&
    (process.argv[3] == "--legacy" ||
      process.argv[3] == "--yarn" ||
      process.argv[3] == null) &&
    process.argv[4] == null) ||
  ((process.argv[2] == "--legacy" ||
    process.argv[2] == "--yarn" ||
    process.argv[3] == null) &&
    process.argv[3] == "init" &&
    process.argv[4] == null)
) {
  try {
    const src = new URL(process.cwd().concat("/src"), import.meta.url);
    mkdirSync(src);

    const scripts = new URL(process.cwd().concat("/scripts"), import.meta.url);
    mkdirSync(scripts);

    const modules = new URL(
      process.cwd().concat("/scripts/modules"),
      import.meta.url
    );
    mkdirSync(modules);

    const test = new URL(
      process.cwd().concat("/scripts/test"),
      import.meta.url
    );
    mkdirSync(test);

    copyFileSync(
      __dirname.concat("/config/hardhat.config.js"),
      process.cwd().concat("/hardhat.config.js")
    );

    copyFileSync(
      __dirname.concat("/contracts/HelloWorld.sol"),
      process.cwd().concat("/src/HelloWorld.sol")
    );

    copyFileSync(
      __dirname.concat("/execs/src.deploy.js"),
      process.cwd().concat("/scripts/src.deploy.js")
    );

    copyFileSync(
      __dirname.concat("/execs/test/src.test.js"),
      process.cwd().concat("/scripts/test/src.test.js")
    );

    copyFileSync(
      __dirname.concat("/execs/modules/addrs.js"),
      process.cwd().concat("/scripts/modules/addrs.js")
    );
    copyFileSync(
      __dirname.concat("/execs/modules/base64.js"),
      process.cwd().concat("/scripts/modules/base64.js")
    );
    copyFileSync(
      __dirname.concat("/execs/modules/deployer.js"),
      process.cwd().concat("/scripts/modules/deployer.js")
    );
    copyFileSync(
      __dirname.concat("/execs/modules/signers.js"),
      process.cwd().concat("/scripts/modules/signers.js")
    );
    copyFileSync(
      __dirname.concat("/execs/modules/time.js"),
      process.cwd().concat("/scripts/modules/time.js")
    );
    console.log(`${verStr}\n${ascii}\n✨ Initializing shell...\n`);
    if (process.argv[2] == "--legacy" || process.argv[3] == "--legacy") {
      spawn(
        "npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers @0xver/solver",
        {
          shell: true,
          stdio: "inherit",
        }
      );
      console.log(`${verStr}\n${ascii}\n✨ Initialized\n`);
    } else if (process.argv[2] == "--yarn" || process.argv[3] == "--yarn") {
      spawn(
        "yarn add --dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers @0xver/solver",
        {
          shell: true,
          stdio: "inherit",
        }
      );
      console.log(`${verStr}\n${ascii}\n✨ Initialized\n`);
    } else {
      spawn(
        "npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @0xver/solver",
        {
          shell: true,
          stdio: "inherit",
        }
      );
    }
  } catch (err) {
    console.error(err.message);
  }
}
