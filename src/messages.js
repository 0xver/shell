import { pkgVersion } from "./package.js";

export const version = `💫 @0xver/shell v${pkgVersion}`;

export const commands = `
Usage: shell [PRIMARY OPTION] [OPTION EXTENSION]\n
Remove < > from custom option extensions\n
PRIMARY OPTIONS:\n
  contract            🎨 Create smart contract project\n
  web3                🎭 Create web3 project\n
OPTION EXTENSIONS:\n
  <project-name>      ✨ Create name for package\n
CONTRACT COMMANDS:\n
  npm run start      🌈 Start local blockchain node\n
  npm run build      🦺 Compile smart contract program\n
  npm run test       🚧 Test smart contract program\n
  npm run deploy     🎉 Deploy smart contract program\n
WEB3 COMMANDS:\n
  npm run dev        🔬 Start local dev Svelte app\n
  npm run build      🚜 Build Svelte app to preview\n
  npm run preview    🔮 Run the Svelte app locally
`;

export function created(name, status) {
	if (status === true) {
		return `\n✨ ${name} has been created!\n\ncd ${name}\n`;
	} else {
		return `${name} has already been created.`;
	}
}
