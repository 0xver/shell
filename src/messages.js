import { pkgVersion } from "./package.js";

export const version = `💫 @0xver/shell v${pkgVersion}`;

export const directions = `
Usage: shell [command] [option]\n
Commands:\n
  clone <repo>    Clone a specific 0xver Git repository\n
  --version       Display the current version of shell\n
  -h, --help      Display help information for a specific command or option\n
Options:\n
  gptpy           GPT-powered text generator with OpenAI Python library\n
  hardhat         Hardhat-based boilerplate for smart contract development\n
  svelte          Svelte-based boilerplate for web3 frontend development
`;

export const help_clone = `
Usage: shell clone <repo>\n
Clone a specific 0xver Git repository. Replace <repo> with the name of the
repository you want to clone.\n
Examples:\n
  shell clone gptpy        Clone the GPTpy repository\n
  shell clone hardhat      Clone the Hardhat repository\n
  shell clone svelte       Clone the Svelte repository
`;

export const help_gptpy = `
Usage: shell clone gptpy\n
GPT-powered text generator with OpenAI Python library\n
Description:\n
  GPTpy is a Python boilerplate that utilizes OpenAI's GPT technology to
  generate human-like text in real-time. It includes presets for different
  output ranges, with formats tailored for education, standard usage, and
  creative prompts. Designed for self-driven work in a terminal environment,
  GPTpy is a versatile tool for personal projects and experimentation.
`;

export const help_hardhat = `
Usage: shell clone hardhat\n
Hardhat-based boilerplate for smart contract development\n
Description:\n
  A Hardhat boilerplate that comes pre-configured with essential settings
  and plugins, simplifying the process for developers to get started
  quickly. Developers can streamline smart contract workflow by utilizing
  built-in scripts for testing, linting, and deployment.
`;

export const help_svelte = `
Usage: shell clone svelte\n
Svelte-based boilerplate for web3 frontend development\n
Description:\n
  A lightweight Svelte boilerplate for building frontends for smart
  contracts on blockchain networks. With built-in web3 integration, this
  boilerplate streamlines development and makes it easy to get started
  building powerful web3 frontend applications.
`;
