import fs from "fs";
import path from "path";
import { directory, reponame } from "./package.js";
import { error } from "./messages.js";

const clone = (src, dest) => {
	const exist = fs.existsSync(src);
	const stats = exist && fs.statSync(src);
	const isDirectory = stats && stats.isDirectory();
	if (isDirectory) {
		if (!fs.existsSync(dest)) fs.mkdirSync(dest);
		fs.readdirSync(src).forEach((child) => {
			clone(path.join(src, child), path.join(dest, child));
		});
	} else {
		if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
	}
};

const repo = (arg, name) => {
	if (arg !== "--add") {
		if (!fs.existsSync(process.cwd().concat(`/${name}/package.json`))) {
			clone(
				directory.concat(`boilerplates/${arg}/`),
				process.cwd().concat(`/${name}`)
			);
			return true;
		} else {
			return false;
		}
	} else if (arg === "--add") {
		if (
			!fs.existsSync(directory.concat(`boilerplates/${name}/`)) &&
			!fs.existsSync(process.cwd().concat(`/node_modules/.package-lock.json`))
		) {
			clone(process.cwd(), directory.concat(`boilerplates/${name}/`));
			return true;
		} else {
			return false;
		}
	}
};

export default function sync(arg, name) {
	try {
		return repo(arg, name);
	} catch (e) {
		console.log(error(name));
	}
}
