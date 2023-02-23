module.exports = async function deployer(name, signer = null, log = true) {
	const contract = name;
	var deployer;
	if (signer === null) {
		[deployer] = await ethers.getSigners();
	} else {
		deployer = signer;
	}
	if (log !== false) {
		console.log(`${contract} deployer : ${deployer.address} (EOA)`);
	}
	const token = await ethers.getContractFactory(contract);
	const Token = await token.connect(deployer).deploy();
	if (log !== false) {
		console.log(`${contract} deployed : ${Token.address} (Contract)`);
	}
	return Token;
};
