#!/usr/bin/env node
import sync from "./sync.js";
import { reponame, directory } from "./package.js";
import { commands, created, added, version } from "./messages.js";

function args(arg2, arg3, arg4) {
	if (arg2 === "--version" && arg3 === undefined && arg4 === undefined) {
		console.log(version);
	} else if (arg2 === "--path" && arg3 === undefined && arg4 === undefined) {
		console.log(directory);
	} else if (arg2 === "--add" && arg4 === undefined) {
		processing(false);
	} else if (
		arg2 !== "--version" &&
		arg2 !== "--add" &&
		arg2 !== undefined &&
		arg4 === undefined
	) {
		processing(true);
	} else {
		console.log(commands);
	}
}

function processing(create) {
	let arg;
	if (process.argv[3] === undefined) {
		if (create !== true) {
			arg = reponame;
		} else {
			arg = "project";
		}
	} else {
		arg = process.argv[3];
	}
	const copy = sync(process.argv[2], arg);
	if (copy !== undefined) {
		if (create !== true) {
			console.log(added(arg, copy));
		} else {
			console.log(created(arg, copy));
		}
	}
}

args(process.argv[2], process.argv[3], process.argv[4]);
