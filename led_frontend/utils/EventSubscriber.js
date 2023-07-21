import { ethers } from "ethers";
import { provider, contract } from "./MyTokenContract";

export default function eventSubscriber() {
  const filters = contract.filters["BalanceUpdate"];
  if (filters !== undefined) {
    provider.on("block", () => {
      contract.on(filters(), (author, content) => {
        console.dir(author);
        console.dir(content);
      });
    });
  }
}
