import { formatUnits, formatEther, parseEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

import DonutStoneArtifacts from "./artifacts/contracts/DonutStone.sol/DonutStone.json";
import DonutStoneCrowdsaleArtifacts from "./artifacts/contracts/DonutStoneCrowdsale.sol/DonutStoneCrowdsale.json";
import logger from "./logger";
import { DonutStone } from "./types/DonutStone";
import { DonutStoneCrowdsale } from "./types/DonutStoneCrowdsale";

import TokenInfo from './components/TokenInfo'

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const providerUrl = import.meta.env.VITE_PROVIDER_URL;

async function requestAccount() {
  if (window.ethereum?.request) return window.ethereum.request({ method: "eth_requestAccounts" });

  throw new Error("Missing install Metamask. Please access https://metamask.io/ to install extension on your browser");
}

const MainCard = ({ crowdsaleAddress }: { crowdsaleAddress: string }) => {

  const { library, chainId, account } = useWeb3React();
  const [tokenAddress, setTokenAddress] = useState("");
  const [availableForSale, setAvailableForSale] = useState("0");
  const [price, setPrice] = useState("0");
  const [amount, setAmount] = useState(1);

  // fetch crowdsale token info
  useEffect(() => {
    const fetchCrowdsaleTokenInfo = () => {
      logger.warn("fetchCrowdsaleTokenInfo");
      const provider = library || new ethers.providers.Web3Provider(window.ethereum || providerUrl);
      const contract = new ethers.Contract(
        crowdsaleAddress,
        DonutStoneCrowdsaleArtifacts.abi,
        provider
      ) as DonutStoneCrowdsale;
      contract.token().then(setTokenAddress).catch(logger.error);
      contract
        .remainingTokens()
        .then((total) => setAvailableForSale(BigNumber.from(total).toString()))
        .catch(logger.error);
      contract
        .rate()
        .then((rate) => setPrice(BigNumber.from(rate).toString()))
        .catch(logger.error);
    };
    try {
      fetchCrowdsaleTokenInfo();
    } catch (error) {
      logger.error(error);
    }
  }, [library]);

  // buy token base on quantity
  const buyTokens = async () => {
    const provider = library || new ethers.providers.Web3Provider(window.ethereum || providerUrl);
    const signer = provider.getSigner();
    try {
      if (!account) {
        await requestAccount();
        return;
      }
      const txPrams = {
        to: crowdsaleAddress,
        value: ethers.BigNumber.from(parseEther(String(1 / Number(price)))).mul(amount),
      };
      logger.warn({ txPrams });
      const transaction = await signer.sendTransaction(txPrams);
      toast.promise(transaction.wait(), {
        loading: `Transaction submitted. Wait for confirmation...`,
        success: <b>Transaction confirmed!</b>,
        error: <b>Transaction failed!.</b>,
      });
    } catch (error) {
      logger.error(error);
    }
  };

  const totalCost = (1 / Number(price)) * amount;

  const fetchTokenInfo = async () => {
    logger.warn("fetchTokenInfo");
    const provider = library || new ethers.providers.Web3Provider(window.ethereum || providerUrl);
    const tokenContract = new ethers.Contract(tokenAddress, DonutStoneArtifacts.abi, provider) as DonutStone;
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const decimals = await tokenContract.decimals();
    const totalSupply = await tokenContract.totalSupply();
    logger.warn("token info", { name, symbol, decimals });
    return {
      name,
      symbol,
      decimals,
      totalSupply,
    };
  };

  const { error, isLoading, data } = useQuery(["token-info", tokenAddress], fetchTokenInfo, {
    enabled: tokenAddress !== "",
  });

  if (data) {
    return (
      <TokenInfo tokenName={data.name} tokenSymbol={data.symbol} />
    );
  }

  else if (isLoading) { 
    return <div>loading...</div>;
  }

  else  {
    return <div>failed to load: {error} </div>;
  }
}

export default MainCard;
