const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  let token;
  let owner;

  this.beforeEach(async () => {
    [owner, otherAccount] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("Token", "MTK");
  });

  describe("Deployment", function () {
    it("Should set the correct name and symbol", async function () {
      expect(await token.name()).to.equal("Token");
      expect(await token.symbol()).to.equal("MTK");
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await token.balanceOf(owner.address);

      expect(ownerBalance).to.equal(100000000000000000000n);
    });

    it("Should transfer 10 tokens and calculate the balance", async function () {
      const result = await token.transfer(otherAccount, 10000000000000000000n);

      const ownerBalance = await token.balanceOf(owner.address);
      const otherAccountBalance = await token.balanceOf(otherAccount.address);

      expect(ownerBalance).to.equal(90000000000000000000n);
      expect(otherAccountBalance).to.equal(10000000000000000000n);
    });

    it("Should emit the log when transmitting", async function () {
      await expect(token.transfer(otherAccount, 10000000000000000000n))
        .to.emit(token, "BalanceUpdate")
        .withArgs(owner.address, otherAccount.address, 10000000000000000000n);
    });
  });
});
