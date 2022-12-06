<script>
	import { accountBalance } from "../modules/Account.js";

	let balance;

	accountBalance.subscribe((value) => {
		balance = value;
	});
</script>

<h2 class="secondary-color">
	<b class="tertiary-color">$ETH</b>
	{balance.toFixed(4)}
</h2>

<style>
	.secondary-color {
		color: var(--secondary-color);
	}

	.tertiary-color {
		color: var(--tertiary-color);
	}
</style>
