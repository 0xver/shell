import { provider } from "./Provider.js";
import { ethers } from "ethers";
import { writable } from "svelte/store";

export const accountAddress = writable();

export function formatAccountAddress(address) {
	return ethers.utils.getAddress(address);
}

export async function getAccountAddress() {
	if (provider() !== undefined) {
		let accounts = await provider().request({ method: "eth_accounts" });
		if (accounts.length !== 0) {
			accountAddress.set(formatAccountAddress(accounts[0]));
		}
	}
}
