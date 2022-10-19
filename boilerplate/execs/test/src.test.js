const { ethers } = require("hardhat");
const { expect } = require("chai");
const signers = require("../modules/signers.js");
const deployer = require("../modules/deployer.js");
const base64 = require("../modules/base64.js");
const time = require("../modules/time.js");

const contract = "HelloWorld";

describe(`${contract} contract test`, function () {
  it("Passed", async function () {
    // Get signers
    const addrs = await signers(10);

    // Deploy contract
    const Token = await deployer(contract, addrs[0]);

    // Test contract message call
    expect(await Token["message()"]()).to.equal("Hello, world!");

    // Test overloaded message call
    expect(await Token["message(address)"](Token.address)).to.equal(
      "Hello, world!"
    );
  });
});
