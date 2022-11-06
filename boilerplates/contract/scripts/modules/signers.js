module.exports = async function signers(quantity) {
	let array = [];
	let amount = quantity;
	while (amount > 0) {
		let signer = ethers.Wallet.createRandom();
		let addr = signer.connect(ethers.provider);
		let [fund] = await ethers.getSigners();
		await fund.sendTransaction({
			to: addr.address,
			value: ethers.utils.parseEther("10")
		});
		array.push(addr);
		amount--;
	}
	return array;
};
