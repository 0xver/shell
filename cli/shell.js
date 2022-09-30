#!/usr/bin/env node
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { exec } from "node:child_process";

const json = JSON.parse(readFileSync("package.json", "utf8"));
const version = json.version;
const ascii = `  ██████  ██░ ██ ▓█████  ██▓     ██▓    
▒██    ▒ ▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    
░ ▓██▄   ▒██▀▀██░▒███   ▒██░    ▒██░    
  ▒   ██▒░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    
▒██████▒▒░▓█▒░██▓░▒████▒░██████▒░██████▒
▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░
░ ░▒  ░ ░ ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░
░  ░  ░   ░  ░░ ░   ░     ░ ░     ░ ░   
░     ░   ░  ░  ░   ░  ░    ░  ░    ░  ░`;
const commands = `
Usage: shell [PRIMARY OPTION] [SECONDARY OPTION]\n
PRIMARY OPTIONS:\n
  init                ✨ Initialize project\n
  node                🌈 Run local blockchain\n
  compile             📝 Compile program\n
  test                🦺 Test program\n
  deploy              🎉 Deploy program\n
SECONDARY OPTIONS:\n
  --legacy            💾 Initialize with legacy npm\n
  --yarn              🧶 Initialize with yarn\n
  --localhost         🏡 Deploy localhost program\n
  --goerli            🚧 Deploy goerli program\n
  --mainnet           🎉 Deploy mainnet program\n
Secondary options only apply for init and deploy\n`;

if (process.argv[2] == null) {
  console.log(`${commands}`);
}

if (process.argv[2] == "version" && process.argv[3] == null) {
  console.log(`${ascii}\n@0xver/shell v${version}`);
}

if (process.argv[2] == "node" && process.argv[3] == null) {
  const execute = exec("npx hardhat node");
  execute.stdout.pipe(process.stdout);
}

if (process.argv[2] == "compile" && process.argv[3] == null) {
  exec("npx hardhat compile", (error, stdout, stderr) => {
    if (error) {
      console.log(error.message.trim());
      return;
    }
    if (stderr) {
      console.log(stderr.trim());
      return;
    }
    console.log(stdout.trim());
  });
}

if (process.argv[2] == "test" && process.argv[3] == null) {
  const execute = exec("npx hardhat test");
  execute.stdout.pipe(process.stdout);
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--localhost" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--localhost" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  exec(
    "npx hardhat run --network localhost scripts/src.deploy.js",
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message.trim());
        return;
      }
      if (stderr) {
        console.log(stderr.trim());
        return;
      }
      console.log(stdout.trim());
    }
  );
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--goerli" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--goerli" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  exec(
    "npx hardhat run --network goerli scripts/src.deploy.js",
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message.trim());
        return;
      }
      if (stderr) {
        console.log(stderr.trim());
        return;
      }
      console.log(stdout.trim());
    }
  );
}

if (
  (process.argv[2] == "deploy" &&
    process.argv[3] == "--mainnet" &&
    process.argv[4] == null) ||
  (process.argv[2] == "--mainnet" &&
    process.argv[3] == "deploy" &&
    process.argv[4] == null)
) {
  exec(
    "npx hardhat run --network mainnet scripts/src.deploy.js",
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message.trim());
        return;
      }
      if (stderr) {
        console.log(stderr.trim());
        return;
      }
      console.log(stdout.trim());
    }
  );
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
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/configure/hardhat.config.js"),
      process.cwd().concat("/hardhat.config.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/contracts/HelloWorld.sol"),
      process.cwd().concat("/src/HelloWorld.sol")
    );
    copyFileSync(
      process.cwd().concat("/node_modules/@0xver/shell/scripts/src.deploy.js"),
      process.cwd().concat("/scripts/src.deploy.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/test/src.test.js"),
      process.cwd().concat("/scripts/test/src.test.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/modules/addrs.js"),
      process.cwd().concat("/scripts/modules/addrs.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/modules/base64.js"),
      process.cwd().concat("/scripts/modules/base64.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/modules/deployer.js"),
      process.cwd().concat("/scripts/modules/deployer.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/modules/signers.js"),
      process.cwd().concat("/scripts/modules/signers.js")
    );
    copyFileSync(
      process
        .cwd()
        .concat("/node_modules/@0xver/shell/scripts/modules/time.js"),
      process.cwd().concat("/scripts/modules/time.js")
    );
    let execute;
    if (process.argv[2] == "--legacy" || process.argv[3] == "--legacy") {
      execute = exec(
        "npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers"
      );
    } else if (process.argv[2] == "--yarn" || process.argv[3] == "--yarn") {
      execute = exec(
        "yarn add --dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers"
      );
    } else {
      execute = exec(
        "npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox"
      );
    }
    execute.stdout.pipe(process.stdout);
  } catch (err) {
    console.error(err.message);
  }
}
