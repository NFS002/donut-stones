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
import AccountInfo from './components/AccountInfo'

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const providerUrl = import.meta.env.VITE_PROVIDER_URL;
const totalSupply = 0
const availableForSale = 0

async function requestAccount() {
  if (window.ethereum?.request) return window.ethereum.request({ method: "eth_requestAccounts" });

  throw new Error("Metamask not installed. Please access https://metamask.io/ to install extension on your browser");
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

  const fetchTokenInfo = async () => {
    logger.warn("fetchTokenInfo");
    const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : new ethers.providers.JsonRpcProvider(providerUrl);
    const tokenContract = new ethers.Contract(tokenAddress, DonutStoneArtifacts.abi, provider) as DonutStone;
    const crowdsaleContract = new ethers.Contract(crowdsaleAddress, DonutStoneCrowdsaleArtifacts.abi, provider) as DonutStoneCrowdsale;
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const decimals = await tokenContract.decimals();
    const totalSupply = await tokenContract.totalSupply()
    const remainingTokens = await crowdsaleContract.remainingTokens()
    const tokenRate = await crowdsaleContract.rate()

    const tokensSoldPerc = totalSupply.sub(remainingTokens)

    logger.warn("token info", { name, symbol, decimals, totalSupply, remainingTokens, tokensSoldPerc });

    return {
      name,
      symbol,
      decimals,
      totalSupply,
      tokenRate,
      tokensSoldPerc
    };
  };

  const { error, isLoading, data } = useQuery(["token-info", tokenAddress], fetchTokenInfo, {
    enabled: tokenAddress !== "",
  });

  const tokenData = Object.assign({
    name: 'DonutStone',
    symbol: 'DS',
    tokensSoldPerc: BigNumber.from("3"),
    tokenRate: BigNumber.from("500"),
    error: error
  }, data)

  return (
    <React.Fragment >
      <AccountInfo />

      {/*<TokenInfo tokenName={tokenData.name} tokenSymbol={tokenData.symbol}
        crowdsaleAddress={crowdsaleAddress} tokensSoldPerc={tokenData.tokensSoldPerc} tokenRate={tokenData.tokenRate} 
      />*/}

      </React.Fragment >
  );
}

export default MainCard;
