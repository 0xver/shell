module.exports = async function time(seconds, height) {
  await network.provider.send("evm_increaseTime", [seconds]);
  for (let i = 0; i < height; i++) {
    await network.provider.send("evm_mine");
  }
};
