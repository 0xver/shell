import { pkgVersion } from "./package.js";

export const version = `💫 @0xver/shell v${pkgVersion}`;

export const commands = `
Usage: shell [PRIMARY COMMAND] [SECONDARY COMMAND]\n
<boilerplate> should be the name of the boilerplate folder for example
'shell contract' or 'shell web3'\n
PRIMARY COMMANDS:\n
  --version           💫 Logs the current version\n
  --add               🔮 Adds the current repo to the library\n
  <boilerplate>       🎨 Sync the boilerplate to the current repo\n
OPTION EXTENSIONS:\n
  <project-name>      🌈 Create name for package
`;

export function created(name, status) {
	if (status === true) {
		return `\n✨ ${name} has been created!\n\ncd ${name}\n`;
	} else {
		return `${name} has already been synced.`;
	}
}

export function added(name, status) {
	if (status === true) {
		return `🔮 ${name} has been added to the boilerplate library!`;
	} else {
		return `${name} has already been added or cannot be added due to node_modules.
Use 'shell --path' to locate directory or delete installed modules.`;
	}
}

export function error(name) {
	return `${name} is non-existant. Use 'shell --path' to locate directory.`;
}
