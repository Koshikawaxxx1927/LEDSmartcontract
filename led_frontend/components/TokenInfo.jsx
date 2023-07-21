import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contract } from "../utils/MyTokenContract";

const TokenInfo = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  useEffect(() => {
    getContractInfo();
  }, []);

  const getContractInfo = async () => {
    const name = await contract.name();
    setTokenName(name);
    const symbol = await contract.symbol();
    setTokenSymbol(symbol);
    const supply = await contract.totalSupply();
    setTotalSupply(ethers.utils.formatUnits(supply, 18));
  };

  return (
    <div>
      <p>Token name: {tokenName}</p>
      <p>Token symbol: {tokenSymbol}</p>
      <p>Total supply: {totalSupply}</p>
    </div>
  );
};

export default TokenInfo;
