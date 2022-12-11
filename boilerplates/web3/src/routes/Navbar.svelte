<script>
	import logo from "$lib/images/logo.svg";
	import Connect from "./components/Connect.svelte";
</script>

<header>
	<div class="nav">
		<!-- svelte-ignore security-anchor-rel-noreferrer -->
		<a href="https://github.com/0xver/shell" target="_blank">
			<img src={logo} alt="logo" />
		</a>
	</div>
	<div class="nav">
		<Connect />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.nav {
		padding: 20px;
	}

	.nav img {
		width: 2.7em;
		height: 2.7em;
		object-fit: contain;
	}
</style>
