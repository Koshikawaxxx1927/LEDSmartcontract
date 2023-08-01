import React, { useState } from "react";
import { contract, signer } from "../utils/MyTokenContract";
import { toast } from "react-hot-toast";

const Mint = () => {
  const [loading, setLoading] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);
  const handleMint = async () => {
    setLoading(true);
    try {
      await contract.connect(signer).mint(mintAmount);
      setLoading(false);
      toast.success("Minted successfully");
      window.location.reload();
    } catch (errot) {
      toast.error("Error minting tokens");
    }
  };
  return (
    <div className="bg-slate-100 max-w-md mx-auto rounded-lg mb-2">
      <div className="text-center bg-light py-1">
        <h1 className="block text-gray-700 text-lg font-bold my-2">
          Mint Token
        </h1>

        <input
          type="text"
          className="form-control p-3 m-3"
          placeholder="Mint amount"
          value={mintAmount}
          onChange={(event) => setMintAmount(event.target.value)}
        />

        <button
          onClick={handleMint}
          className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Loading" : "Mint"}
        </button>
      </div>
    </div>
  );
};

export default Mint;
