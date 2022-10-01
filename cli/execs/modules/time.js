module.exports = async function time(days) {
  await network.provider.send("evm_increaseTime", [days * 86400]);
  for (let i = 0; i < days * 100; i++) {
    await network.provider.send("evm_mine");
  }
};
