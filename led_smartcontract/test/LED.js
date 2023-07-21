const { expect } = require("chai");

describe("LED", function() {
    let led;

    this.beforeEach(async function() {
        const LED = await ethers.getContractFactory("LED");

        led = await LED.deploy();
    });

    it("Shoud start with false", async function() {
        expect(await led.get()).to.equal(false);
        expect(await led.get()).to.equal(false);
    });

    it("Toggle with toggle()", async function() {
        await led.toggle();
        expect(await led.get()).to.equal(true);
    });

    it("Toggle with toggle()", async function() {
        await led.toggle();
        await led.toggle();
        expect(await led.get()).to.equal(false);
    });
})