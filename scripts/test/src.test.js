const { ethers } = require("hardhat");
const { expect } = require("chai");
const addrs = require("../modules/addrs.js");
const base64 = require("../modules/base64.js");
const deployer = require("../modules/deployer.js");
const time = require("../modules/time.js");

describe("HelloWorld contract test", function () {
  it("Passed", async function () {
    // Deploy contract
    const Token = await deployer("HelloWorld");

    // Test contract message call
    expect(await Token["message()"]()).to.equal("Hello, world!");

    // Test overloaded message call
    expect(await Token["message(address)"](Token.address)).to.equal(
      "Hello, world!"
    );
  });
});
