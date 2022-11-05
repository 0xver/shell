export function provider() {
  let wallet;
  if (typeof window !== "undefined") {
    if (typeof window.ethereum !== "undefined") {
      wallet = window.ethereum;
    }
  } else {
    wallet = false;
  }
  return wallet;
}
