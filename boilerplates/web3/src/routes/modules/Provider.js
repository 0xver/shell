export function windowEthereum() {
	return (typeof window !== "undefined" && window.ethereum) || undefined;
}
