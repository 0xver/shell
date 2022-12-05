<script>
	import {
		accountAddress,
		shrinkAccountAddress,
		getAccountAddress
	} from "../modules/Account.js";
	import { provider } from "../modules/Provider.js";

	let connectButton;

	const onlineMetaMask = "Connect Wallet";
	const offlineMetaMask = "Install MetaMask";

	getAccountAddress();
	accountAddress.subscribe((value) => {
		if (provider() !== undefined) {
			if (value !== undefined) {
				connectButton = shrinkAccountAddress(value);
			} else {
				connectButton = onlineMetaMask;
			}
		}
	});

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
