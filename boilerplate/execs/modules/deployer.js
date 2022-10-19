module.exports = async function deployer(name, signer = null) {
  const contract = name;
  var deployer;
  if (signer === null) {
    [deployer] = await ethers.getSigners();
  } else {
    deployer = signer;
  }
  console.log(`${contract} deployer : ${deployer.address} (EOA)`);
  const token = await ethers.getContractFactory(contract);
  const Token = await token.connect(deployer).deploy();
  console.log(`${contract} deployed : ${Token.address} (Contract)`);
  return Token;
};
