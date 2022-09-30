module.exports = async function addrs(quantity) {
  let array = [];
  let amount = quantity;
  while (amount > 0) {
    let signer = ethers.Wallet.createRandom();
    let addr = signer.connect(ethers.provider);
    let [fund] = await ethers.getSigners();
    await fund.sendTransaction({
      to: addr.address,
      value: ethers.utils.parseEther("1"),
    });
    array.push(addr.address);
    amount--;
  }
  return array;
};
