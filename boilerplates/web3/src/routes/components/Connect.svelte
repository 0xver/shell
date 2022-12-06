<script>
	import { accountAddress, shrinkAccountAddress } from "../modules/Account.js";
	import { windowEthereum } from "../modules/Provider.js";

	let connectButton;

	const onlineMetaMask = "Connect Wallet";
	const offlineMetaMask = "Install MetaMask";

	accountAddress.subscribe((value) => {
		if (value !== undefined) {
			connectButton = shrinkAccountAddress(value);
		} else {
			connectButton = onlineMetaMask;
		}
	});

	async function handleClick() {
		if (connectButton === onlineMetaMask) {
			await windowEthereum().request({ method: "eth_requestAccounts" });
		}
	}
</script>

{#if !windowEthereum()}
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
		color: var(--primary-color);
		background-color: transparent;
	}

	.connect:hover {
		background-color: var(--hover-fill-color);
		border-color: var(--primary-color);
	}
</style>
