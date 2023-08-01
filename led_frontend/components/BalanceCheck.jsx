import { useState } from "react";
import { contract, signer } from "../utils/MyTokenContract";
import { ethers } from "ethers";

export default function TransferToken() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBalanceCheck = async () => {
    try {
      setLoading(true);
      const balance = await contract.balanceOf(address);
      const formattedBalance = ethers.utils.formatEther(balance);
      setBalance(formattedBalance);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error transferring token");
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 max-w-md mx-auto rounded-lg">
      <div className="text-center bg-light py-1">
        <h1 className="block text-gray-700 text-lg font-bold my-2">
          MYT Balance Check
        </h1>

        {balance !== "" ? (
          <h1 className="text-blue-600/100 font-bold">{balance} MYT</h1>
        ) : (
          ""
        )}

        <input
          type="text"
          className="form-control p-3 m-3"
          placeholder="Wallet address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <button
          onClick={handleBalanceCheck}
          className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading || !address}
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </div>
    </div>
  );
}
