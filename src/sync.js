import fs from "fs";
import path from "path";
import { directory } from "./package.js";

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
	if (!fs.existsSync(process.cwd().concat(`/${name}/package.json`))) {
		clone(
			directory.concat(`boilerplates/${arg}/`),
			process.cwd().concat(`/${name}`)
		);
		return true;
	}
};

export default function sync(arg, name) {
	if (arg === "contract") {
		return repo("contract", name);
	} else if (arg === "web3") {
		return repo("web3", name);
	}
}
