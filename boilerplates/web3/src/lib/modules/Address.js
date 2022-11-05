import { provider } from "$lib/modules/Provider.js";

export async function address() {
  let accounts = await provider().request({ method: "eth_accounts" });
  let account = accounts[0];
  return account;
}
