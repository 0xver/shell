<script>
	import {
		accountAddress,
		formatAccountAddress,
		getAccountAddress
	} from "../modules/Account.js";
	import { provider } from "../modules/Provider.js";

	const onlineMetaMask = "Connect Wallet";
	const offlineMetaMask = "Install MetaMask";
	let connectButton;

	getAccountAddress();

	accountAddress.subscribe((value) => {
		if (provider() !== undefined) {
			if (value !== undefined) {
				connectButton = shrink(value);
			} else {
				connectButton = onlineMetaMask;
			}
		}
	});

	if (provider() !== undefined) {
		provider().on("accountsChanged", function (accounts) {
			if (accounts[0] !== undefined) {
				connectButton = shrink(formatAccountAddress(accounts[0]));
			} else {
				connectButton = onlineMetaMask;
			}
		});
	}

	function shrink(address) {
		let start = address.slice(0, 5);
		let end = address.slice(address.length - 4);
		return start.concat("...", end);
	}

	async function handleClick() {
		if (connectButton === onlineMetaMask) {
			await provider().request({ method: "eth_requestAccounts" });
		}
	}
</script>

{#if !provider()}
	<!-- svelte-ignore security-anchor-rel-noreferrer -->
	<a href="https://metamask.io" target="_blank">
		<button class="connect">{offlineMetaMask}</button>
	</a>
{:else}
	<button class="connect" on:click={handleClick}>{connectButton}</button>
{/if}

<style>
	.connect {
		cursor: pointer;
		padding: 5px 15px;
		border-radius: 100px;
		border: 1px solid;
		font-size: 24px;
		color: var(--color-text);
		background-color: transparent;
	}

	.connect:hover {
		color: var(--color-bg);
		background-color: var(--color-text);
		border: 1px solid;
		border-color: var(--color-text);
	}
</style>
