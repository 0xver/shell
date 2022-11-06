#!/usr/bin/env node
import sync from "./sync.js";
import { commands, created, version } from "./messages.js";

if (process.argv[2] == null) {
	console.log(commands);
}

if (process.argv[2] == "version" && process.argv[3] == null) {
	console.log(version);
}

if (process.argv[2] == "contract" && process.argv[4] == null) {
	let arg;
	if (process.argv[3] == undefined) {
		arg = "contract";
	} else {
		arg = process.argv[3];
	}
	console.log(created(arg, sync(process.argv[2], arg)));
}

if (process.argv[2] == "web3" && process.argv[4] == null) {
	let arg;
	if (process.argv[3] == undefined) {
		arg = "web3";
	} else {
		arg = process.argv[3];
	}
	console.log(created(arg, sync(process.argv[2], arg)));
}
