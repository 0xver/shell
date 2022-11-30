import { provider } from "./Provider.js";
import { ethers } from "ethers";

export async function address() {
	let accounts = await provider().request({ method: "eth_accounts" });
	let account = ethers.utils.getAddress(accounts[0]);
	return account;
}
