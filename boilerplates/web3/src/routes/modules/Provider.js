import { ethers } from "ethers";

function getProvider() {
	if (windowEthereum() !== undefined) {
		return new ethers.providers.Web3Provider(windowEthereum());
	}
}

export const provider = getProvider();

export function windowEthereum() {
	if (typeof window !== "undefined") {
		if (typeof window.ethereum !== "undefined") {
			return window.ethereum;
		}
	}
}
