import { windowEthereum, provider } from "./Provider.js";
import { ethers } from "ethers";
import { writable } from "svelte/store";

export const accountAddress = writable();

export const accountBalance = writable();

export function shrinkAccountAddress(address) {
	let start = address.slice(0, 5);
	let end = address.slice(address.length - 4);
	return start.concat("...", end);
}

export function formatAccountAddress(address) {
	return ethers.utils.getAddress(address);
}

export async function getAccountAddress() {
	accountBalance.set(0);
	if (windowEthereum() !== undefined) {
		let accounts = await windowEthereum().request({ method: "eth_accounts" });
		if (accounts.length !== 0) {
			let account = formatAccountAddress(accounts[0]);
			getAccountBalance(account);
			accountAddress.set(account);
		}
	}
}

export async function getAccountBalance(address) {
	if (windowEthereum() !== undefined) {
		if (address !== undefined) {
			let wei = await provider.getBalance(address);
			let eth = ethers.utils.formatEther(wei);
			accountBalance.set(Number(eth));
		}
	}
}

if (windowEthereum() !== undefined) {
	windowEthereum().on("accountsChanged", function (accounts) {
		let account;
		accountBalance.set(0);
		if (accounts[0] !== undefined) {
			account = formatAccountAddress(accounts[0]);
			getAccountBalance(account);
		}
		accountAddress.set(account);
	});
	accountAddress.subscribe((value) => {
		if (value !== undefined) {
			provider.on("block", () => {
				provider.getBalance(value).then((balance) => {
					let eth = ethers.utils.formatEther(balance);
					accountBalance.set(Number(eth));
				});
			});
		}
	});
}

getAccountAddress();
