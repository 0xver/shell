<script>
  import logo from "$lib/images/logo.svg";
  import Connect from "$lib/components/Connect.svelte";
</script>

<header>
  <div class="header">
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <a href="https://github.com/0xver/shell" target="_blank">
      <img src={logo} alt="GitHub" />
    </a>
  </div>
  <div class="header">
    <Connect />
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .header {
    padding: 20px;
  }

  .header img {
    width: 2.7em;
    height: 2.7em;
    object-fit: contain;
  }
</style>
