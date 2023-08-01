import React from "react";
import { contract, signer } from "../utils/MyTokenContract";
import { ethers } from "ethers";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { toast } from "react-hot-toast";

const Transfer = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const { account } = useMoralis();

  const handleTransfer = async () => {
    console.log("Transfer clicked");
    setLoading(true);
    const decimals = await contract.decimals();

    try {
      const formattedBalance = ethers.utils.parseUnits(
        amount.toString(),
        decimals
      );
      const tx = await contract
        .connect(signer)
        .transfer(address, formattedBalance);
      await tx.wait();
      toast.success("Token transfered successfully");
      setAddress("");
      setAmount(0);
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Error trasfrering token");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="bg-slate-100 max-w-md mx-auto py-1 my-2 rounded-lg px-2 sm:px-0">
        <div className="mx-auto max-w-sm">
          <div>
            <label
              className="block text-gray-700 text-lg font-bold my-2"
              htmlFor="address"
            >
              Address:
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-lg font-bold my-2"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              placeholder="Address"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="my-6 flex items-center justify-center">
            <button
              className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleTransfer}
              disabled={loading}
            >
              {loading ? "Loading..." : "Trasfer"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
