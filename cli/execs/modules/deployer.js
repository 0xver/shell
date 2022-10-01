module.exports = async function deployer(name) {
  const contract = name;
  const [deployer] = await ethers.getSigners();
  console.log(`${contract} deployer : ${deployer.address} (EOA)`);
  const token = await ethers.getContractFactory(contract);
  const Token = await token.deploy();
  console.log(`${contract} deployed : ${Token.address} (Contract)`);
  return Token;
};
