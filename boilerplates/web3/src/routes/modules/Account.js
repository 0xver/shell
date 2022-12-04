import { provider } from "./Provider.js";
import { ethers } from "ethers";
import { writable } from "svelte/store";

export const account = writable();

export async function getAccount() {
	let accounts = await provider().request({ method: "eth_accounts" });
	account.set(ethers.utils.getAddress(accounts[0]));
}
