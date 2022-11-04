<script>
	import { address } from '$lib/modules/Address.js';
	import { provider } from '$lib/modules/Provider.js';

	async function getAddress() {
		let button;
		try {
			let fullAddress = await address();
			let start = fullAddress.slice(0, 5);
			let end = fullAddress.slice(fullAddress.length - 4);
			button = start.concat('...', end);
		} catch (e) {
			button = 'Connect Wallet';
		}
		return button;
	}

	async function handleClick() {
		await provider().request({ method: 'eth_requestAccounts' });
		promise = getAddress();
	}

	let promise = getAddress();
</script>

{#if !provider()}
	<!-- svelte-ignore security-anchor-rel-noreferrer -->
	<a href="https://metamask.io" target="_blank"><button class="connect">Install MetaMask</button></a
	>
{:else}
	{#await promise then value}
		<button class="connect" on:click={handleClick}>{value}</button>
	{/await}
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
