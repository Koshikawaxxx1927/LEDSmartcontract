import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";
import { contract, signer } from "../utils/MyTokenContract";
import eventSubscriber from "../utils/EventSubscriber";

const Header = () => {
  const [userBalance, setUserBalance] = useState(0);
  const { isWeb3Enabled, account, refetchUserData, isUserUpdating } =
    useMoralis();

  useEffect(() => {
    eventSubscriber();
  }, []);
  useEffect(() => {
    if (isWeb3Enabled && account) {
      console.log("isWeb3Enabled", isWeb3Enabled);
    } else {
      console.log("isWeb3Enabled", false);
    }

    const getBalance = async () => {
      const userAddress = await signer.getAddress();
      const balance = await contract.balanceOf(userAddress);
      const formattedBalance = ethers.utils.formatEther(balance);
      setUserBalance(formattedBalance);
    };
    getBalance();
  }, [isWeb3Enabled, account]);
  console.log(isUserUpdating);
  return (
    <div>
      <ConnectButton />
      <p>{userBalance} MYT</p>
    </div>
  );
};

export default Header;
