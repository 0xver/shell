# Shell

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A light framework for Hardhat smart contract development

## Installation using Node Package Manager

Install with [**npm**](https://www.npmjs.com):

```
npm install --save-dev @0xver/shell
```

```
cd node_modules/@0xver/shell; npm link; cd
```

Return to repository location and initialize project:

```
shell init
```

## Installation using Yarn

Install with [**yarn**](https://classic.yarnpkg.com):

```
yarn add --dev @0xver/shell
```

```
cd node_modules/@0xver/shell; yarn link; cd
```

Return to repository location and initialize project:

```
shell init --yarn
```

## Getting Started

List all commands:

```
shell
```

## Compile

Compile program:

```
shell compile
```

## Test

Test program with Hardhat network:

```
shell test
```

## Deploy

Deploy localhost program by running node in seperate terminal window:

```
shell node
```

```
shell deploy --localhost
```

Deploy goerli program:

```
shell deploy --goerli
```

Deploy mainnet program:

```
shell deploy --mainnet
```
