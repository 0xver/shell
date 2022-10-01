# Shell

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A light framework for Hardhat smart contract development

## Installation using Node Package Manager

Install with [**npm**](https://www.npmjs.com):

```
npm install -g @0xver/shell
```

Initialize npm package in desired location:

```
npm init
```

## Installation using Yarn

Install with [**yarn**](https://classic.yarnpkg.com):

```
yarn global add @0xver/shell
```

Initialize yarn package in desired location:

```
yarn init
```

## Getting Started

List commands:

```
shell
```

Initialize project with npm 7 or later:

```
shell init
```

Initialize project with older versions of npm:

```
shell init --legacy
```

Initialize project with yarn:

```
shell init --yarn
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
