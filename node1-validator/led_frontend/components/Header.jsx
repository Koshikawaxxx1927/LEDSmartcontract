import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";
import { contract, signer } from "../utils/MyTokenContract";

const Header = () => {
  const [symbol, setSymbol] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const { isWeb3Enabled, account, refetchUserData, isUserUpdating } =
    useMoralis();

  useEffect(() => {
    if (isWeb3Enabled && account) {
      console.log("isWeb3Enabled", isWeb3Enabled);
      const getBalance = async () => {
        const symbol = await contract.symbol();
        const balance = await contract.balanceOf(account);
        const formattedBalance = ethers.utils.formatEther(balance);
        setSymbol(symbol);
        setUserBalance(formattedBalance);
      };
      getBalance();
    } else {
      console.log("isWeb3Enabled", false);
    }
  }, [isWeb3Enabled, account]);
  console.log(isUserUpdating);
  return (
    <div className="pt-5">
      <ConnectButton />
      <div className="text-xl max-w-md mx-auto my-5 text-white font-bold pl-5 sm:pl-0">
        My Token: {userBalance} {symbol}
      </div>
    </div>
  );
};

export default Header;
