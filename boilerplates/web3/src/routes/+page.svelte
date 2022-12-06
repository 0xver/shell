<script>
	import Balance from "./components/Balance.svelte";
</script>

<svelte:head>
	<title>Hello, world!</title>
	<meta name="description" content="Svelte web3" />
</svelte:head>

<section>
	<h1>Hello, world!</h1>
	<div class="margin-top">
		<Balance />
	</div>
</section>

<style>
	.margin-top {
		margin-top: 30px;
	}
</style>
