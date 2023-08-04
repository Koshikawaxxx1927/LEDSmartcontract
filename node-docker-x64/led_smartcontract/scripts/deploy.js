// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("LED");

  const myToken = await MyToken.deploy("LEDToken", "LED");
  console.log("MyToken contract deployed to:", await myToken.getAddress());

  const abi = myToken.interface.format("json");
  const address = await myToken.getAddress();
  const contractData = { abi, address };
  const filepath = "./data/MyToken.json";
  fs.writeFileSync(filepath, JSON.stringify(contractData));
  console.log(`ABI and address writenn to ${filepath}`);

  const receipt = await myToken.deploymentTransaction().wait();
  console.log("Deployed by address: ", receipt.from);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
