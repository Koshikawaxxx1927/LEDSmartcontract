import { ethers } from "ethers";

import MyToken from "../../led_smartcontract/data/MyToken.json";
import LEDContract from "../../led_smartcontract/artifacts/contracts/LED.sol/LED.json";

require("dotenv").config();
const url = process.env.HARDHAT_RPC_URL;
console.log("URL -> ", url);
export const provider = new ethers.providers.JsonRpcProvider(
  process.env.HARDHAT_RPC_URL
);

export const signer = provider.getSigner();
export const contract = new ethers.Contract(
  MyToken.address,
  MyToken.abi,
  provider
);
