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
    <div className="bg-slate-100 max-w-md mx-auto py-5 rounded-lg px-2 sm:px-0">
      <div className="space-y-4 mx-auto my-0 max-w-sm">
        <div className="flex justify-around text-xl text-white p-3 bg-slate-500 shadow rounded hover:bg-slate-400">
          <p>Token name:</p> <p>{tokenName}</p>
        </div>
        <div className="flex justify-around text-xl text-white p-3 bg-slate-500 shadow rounded hover:bg-slate-400">
          <p>Token symbol:</p> <p>{tokenSymbol}</p>
        </div>
        <div className="flex justify-around text-xl text-white p-3 bg-slate-500 shadow rounded hover:bg-slate-400">
          <p>Total supply:</p> <p>{totalSupply}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
