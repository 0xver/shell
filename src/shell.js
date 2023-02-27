#!/usr/bin/env node
import { spawn } from "child_process";
import {
	version,
	directions,
	help_clone,
	help_gptpy,
	help_hardhat,
	help_svelte
} from "./messages.js";

function commands() {
	const arg2 = process.argv[2];
	const arg3 = process.argv[3];
	const arg4 = process.argv[4];
	const arg5 = process.argv[5];

	if (arg2 === undefined) {
		console.log(directions);
	}

	if (arg2 === "--version" && arg3 === undefined) {
		console.log(version);
	}

	if (arg2 === "clone" && arg3 === "gptpy" && arg4 === undefined) {
		const execute = spawn("git", [
			"clone",
			"https://github.com/0xver/gptpy.git",
			"--progress"
		]);
		execute.stdout.pipe(process.stdout);
		execute.stderr.pipe(process.stderr);
	}

	if (arg2 === "clone" && arg3 === "hardhat" && arg4 === undefined) {
		const execute = spawn("git", [
			"clone",
			"https://github.com/0xver/hardhat.git",
			"--progress"
		]);
		execute.stdout.pipe(process.stdout);
		execute.stderr.pipe(process.stderr);
	}

	if (arg2 === "clone" && arg3 === "svelte" && arg4 === undefined) {
		const execute = spawn("git", [
			"clone",
			"https://github.com/0xver/svelte.git",
			"--progress"
		]);
		execute.stdout.pipe(process.stdout);
		execute.stderr.pipe(process.stderr);
	}

	if ((arg2 === "-h" || arg2 === "--help") && arg3 === undefined) {
		console.log(directions);
	}

	if (
		arg2 === "clone" &&
		(arg3 === "-h" || arg3 === "--help") &&
		arg4 === undefined
	) {
		console.log(help_clone);
	}

	if (
		arg2 === "clone" &&
		arg3 === "gptpy" &&
		(arg4 === "-h" || arg4 === "--help") &&
		arg5 === undefined
	) {
		console.log(help_gptpy);
	}

	if (
		arg2 === "clone" &&
		arg3 === "hardhat" &&
		(arg4 === "-h" || arg4 === "--help") &&
		arg5 === undefined
	) {
		console.log(help_hardhat);
	}

	if (
		arg2 === "clone" &&
		arg3 === "svelte" &&
		(arg4 === "-h" || arg4 === "--help") &&
		arg5 === undefined
	) {
		console.log(help_svelte);
	}
}

commands();
