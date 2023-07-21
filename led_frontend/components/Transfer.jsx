import React from "react";
import { contract, signer } from "../utils/MyTokenContract";
import { ethers } from "ethers";
import { useState } from "react";

const Transfer = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    console.log("Transfer clicked");

    const decimals = await contract.decimals();
    console.log(decimals);
    const formattedBalance = ethers.utils.parseUnits(
      amount.toString(),
      decimals
    );

    const tx = await contract
      .connect(signer)
      .transfer(address, formattedBalance);
    await tx.wait();
    setAddress("");
    setAmount("");
  };
  return (
    <>
      address:
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      amount:
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </>
  );
};

export default Transfer;
