import { useWeb3React } from "@web3-react/core";
import React from "react";

export function Account() {
  const { account } = useWeb3React();

  return (
    <div className="uppercase text-blue" >
      <span>
        {account === null
          ? "-"
          : account
          ? ` ${account.substring(0, 6)}...`
          : ""}
      </span>
    </div>
  );
}
