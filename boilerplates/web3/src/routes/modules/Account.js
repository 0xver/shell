import { provider } from "./Provider.js";
import { ethers } from "ethers";
import { writable } from "svelte/store";

export const accountAddress = writable();

export function shrinkAccountAddress(address) {
	let start = address.slice(0, 5);
	let end = address.slice(address.length - 4);
	return start.concat("...", end);
}

export function formatAccountAddress(address) {
	if (address !== undefined) {
		return ethers.utils.getAddress(address);
	}
}

export async function getAccountAddress() {
	if (provider() !== undefined) {
		let accounts = await provider().request({ method: "eth_accounts" });
		if (accounts.length !== 0) {
			accountAddress.set(formatAccountAddress(accounts[0]));
		}
	}
}

if (provider() !== undefined) {
	provider().on("accountsChanged", function (accounts) {
		accountAddress.set(formatAccountAddress(accounts[0]));
	});
}
