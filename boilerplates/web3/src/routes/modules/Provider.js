export function provider() {
	if (typeof window !== "undefined") {
		if (typeof window.ethereum !== "undefined") {
			return window.ethereum;
		}
	}
}
