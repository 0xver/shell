<script context="module">
	import { provider } from '$lib/modules/Provider.svelte';
	let wallet = provider();

	export async function address() {
		let accounts = await wallet.request({ method: 'eth_accounts' });
		let account = accounts[0];
		return account;
	}
</script>
