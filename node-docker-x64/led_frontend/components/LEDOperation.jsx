import React, { useEffect, useState } from "react";
import { contract, signer } from "../utils/MyTokenContract";
import { toast } from "react-hot-toast";
const LEDOperation = () => {
  const [loading, setLoading] = useState(false);
  const [stateLED, setStateLED] = useState("");
  const getState = async () => {
    const state = await contract.get();
    setStateLED(state ? "OFF" : "ON");
  };
  useEffect(() => {
    setLoading(true);
    getState();
    setLoading(false);
  }, []);

  const handleLED = async () => {
    setLoading(true);
    try {
      await contract.connect(signer).toggle();
      getState();
      toast.success("Operated successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error operating LED");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="bg-slate-100 max-w-md mx-auto py-1 my-2 rounded-lg px-2 sm:px-0">
        <div className="mx-auto max-w-sm">
          <div className="my-3 flex items-center justify-center">
            <p className="block text-gray-700 text-lg font-bold mx-6">
              LED ON/OFF
            </p>
            <button
              className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLED}
              //   disabled={loading}
            >
              {loading ? "Loading..." : stateLED}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LEDOperation;
