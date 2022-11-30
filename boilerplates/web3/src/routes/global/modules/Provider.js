export function provider() {
	let wallet;
	if (typeof window !== "undefined") {
		if (typeof window.ethereum !== "undefined") {
			wallet = window.ethereum;
		}
	}
	return wallet;
}
