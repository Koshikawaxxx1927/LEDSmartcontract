const { expect } = require("chai");

describe("LED", function () {
  let led;

  this.beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("LED");
    led = await Token.deploy("LEDToken", "LED");
  });

  describe("Deployment", function () {
    it("Should set the correct name and symbol", async function () {
      expect(await led.name()).to.equal("LEDToken");
      expect(await led.symbol()).to.equal("LED");
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await led.balanceOf(owner.address);

      expect(ownerBalance).to.equal(100000000000000000000n);
    });

    it("Should transfer 10 tokens and calculate the balance", async function () {
      const result = await led.transfer(otherAccount, 10000000000000000000n);

      const ownerBalance = await led.balanceOf(owner.address);
      const otherAccountBalance = await led.balanceOf(otherAccount.address);

      expect(ownerBalance).to.equal(90000000000000000000n);
      expect(otherAccountBalance).to.equal(10000000000000000000n);
    });

    it("Should be initialized with off state (=false) and toggle with a function", async function () {
      let balance;
      balance = await led.balanceOf(owner.address);
      expect(balance).to.equal(100000000000000000000n);
      const state1 = await led.get();
      expect(state1).to.equal(false);
      await led.toggle();

      const state2 = await led.get();
      expect(state2).to.equal(true);
      balance = await led.balanceOf(owner.address);
      expect(balance).to.equal(95000000000000000000n);
    });

    it("Should emit the log when state is updated", async function () {
      for (let i = 0; i < 10; i++) {
        let balance = await led.balanceOf(owner.address);
        await expect(led.toggle()).to.emit(led, "ToggleUpdated").withArgs(true);
        await expect(led.toggle())
          .to.emit(led, "ToggleUpdated")
          .withArgs(false);
      }
    });
  });
});
