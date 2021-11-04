import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-hot-toast";
import { render } from "react-dom";
import { ethers, utils, providers, BigNumber } from "ethers";
import { formatUnits, formatEther, parseEther } from "@ethersproject/units";

import DonutStoneArtifacts from "../artifacts/contracts/DonutStone.sol/DonutStone.json";
import DonutStoneCrowdsaleArtifacts from "../artifacts/contracts/DonutStoneCrowdsale.sol/DonutStoneCrowdsale.json";
import logger from "../logger";
import { DonutStone } from "../types/DonutStone";
import { DonutStoneCrowdsale } from "../types/DonutStoneCrowdsale";

import AccountInfo from "./AccountInfo";
import { CircularProgressbar, buildStyles } from "./circular-progressbar";
import CardText from "./CardText";
import DSLogo from "./DSLogo";

interface TokenInfoProps {
  crowdsaleAddress: string;
}

interface EthPriceGBP {
  GBP: number;
}

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const providerUrl = import.meta.env.VITE_PROVIDER_URL;
const totalSupply = 0;
const availableForSale = 0;

async function requestAccount() {
  if (window.ethereum?.request)
    return window.ethereum.request({ method: "eth_requestAccounts" });

  throw new Error(
    "Metamask not installed. Visit https://metamask.io/ to install the browswer extension"
  );
}

const TokenInfo = ( { crowdsaleAddress } : TokenInfoProps) => {
  const { library, chainId, account } = useWeb3React();
  const [tokenAddress, setTokenAddress] = useState("");
  const [availableForSale, setAvailableForSale] = useState("0");
  const [price, setPrice] = useState(BigNumber.from("500"));
  const [tokensSoldPerc, setTokensSoldPerc] = useState(BigNumber.from("3"))
  const [amount, setAmount] = useState(1);

  var inputValue = 1;
  var ethPriceGBP = 2573.54;

  const getEthPriceGBP = async () => {
    const payload = { fsym: "ETH", tsyms: "GBP", sign: true };

    const response = await axios.post<EthPriceGBP>(
      "https://min-api.cryptocompare.com/data/price",
      payload
    );
    ethPriceGBP = response.data.GBP;
  };

  /* Sue me... */
  const updateTokenValues = async function () {
    var input = document.getElementById(
      "number-of-tokens-to-buy"
    ) as HTMLInputElement;

    if (input && input.value) {
      inputValue = +input.value;
    }

    const decimals = 18;
    const weiValueRaw = inputValue * price.toNumber();

    const etherValueRaw = await utils.formatEther(weiValueRaw);

    try {
      await getEthPriceGBP();
    }
    catch(e) {
      console.warn(e, `Fetch failed, defaulting to £${ethPriceGBP}/ETH`)
    }

    const gbpValue = (+etherValueRaw * ethPriceGBP).toFixed(decimals);
    const etherValue = (+etherValueRaw).toFixed(decimals);
    const weiValue = weiValueRaw.toFixed(decimals);

    var container = document.getElementById("number-of-tokens-to-buy-values");

    if (container) {
      var htmlTemplate = `
      <p>${String(weiValue).substring(
        0,
        decimals
      )} <span class="text-blue">Wei</span> </p>
      <p>${String(etherValue).substring(
        0,
        decimals
      )} <span class="text-blue">ETH</span> </p>
      <p>${String(gbpValue).substring(0,
        decimals
      )} <span class="text-blue">GBP</span> </p>
      `;
      container.innerHTML = htmlTemplate;
    }
  };

  /* Connect to a web3 instance */
  const requestAccount = async () => {
    if (window.ethereum?.request)
      return window.ethereum.request({ method: "eth_requestAccounts" });

    throw new Error(
      "Please access https://metamask.io/ to install the Metamask extension on your browser"
    );
  };

  /* Fetch Token Info */
  const fetchTokenInfo = async () => {
    logger.warn("fetchTokenInfo");
    const provider = window.ethereum
      ? new ethers.providers.Web3Provider(window.ethereum)
      : new ethers.providers.JsonRpcProvider(providerUrl);
    const tokenContract = new ethers.Contract(
      tokenAddress,
      DonutStoneArtifacts.abi,
      provider
    ) as DonutStone;
    const crowdsaleContract = new ethers.Contract(
      crowdsaleAddress,
      DonutStoneCrowdsaleArtifacts.abi,
      provider
    ) as DonutStoneCrowdsale;
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const decimals = await tokenContract.decimals();
    const totalSupply = await tokenContract.totalSupply();
    const remainingTokens = await crowdsaleContract.remainingTokens();
    const tokenRate = await crowdsaleContract.rate();

    setTokensSoldPerc(totalSupply.sub(remainingTokens));

    logger.warn("token info", {
      name,
      symbol,
      decimals,
      totalSupply,
      remainingTokens,
      tokensSoldPerc,
    });

    return {
      name,
      symbol,
      decimals,
      totalSupply,
      tokenRate,
      tokensSoldPerc,
    };
  };

  /* Fetch Crowdsale Info */
  const fetchCrowdsaleTokenInfo = () => {
    try {
      logger.warn("fetchCrowdsaleTokenInfo");
      const provider = library || new ethers.providers.JsonRpcProvider(providerUrl);
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
        .then((rate) => setPrice(rate))
        .catch(logger.error);
    } catch (error) {
      logger.error(error);
    }
  };

  /* Buy tokens */
  const buyTokens = async () => {
    const provider = library || new providers.JsonRpcProvider(providerUrl);
    const signer = provider.getSigner();
    try {
      if (!account) {
        await requestAccount();
        return;
      }
      const txParams = {
        to: crowdsaleAddress,
        value: price.mul(inputValue),
      };
      console.warn(txParams);
      const transaction = await signer.sendTransaction(txParams);
      toast.promise(transaction.wait(), {
        loading: `Transaction submitted. Wait for confirmation...`,
        success: <b>Transaction confirmed!</b>,
        error: `Transaction failed. Check the console for details`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  /* Run fetchCrowdsaleTokenInfo() after render, and rerun if library changes */
  useEffect(fetchCrowdsaleTokenInfo, [library]);

  const { error, isLoading, data } = useQuery(
    ["token-info", tokenAddress],
    fetchTokenInfo,
    {
      enabled: tokenAddress !== "",
    }
  );

  const tokenData = Object.assign(
    {
      name: "DonutStone",
      symbol: "DS",
      tokensSoldPerc: BigNumber.from("3"),
      tokenRate: BigNumber.from("500"),
      error: error,
    },
    data
  );

  updateTokenValues();

  return (
        <div className='ds-card'>
          <div className='ds-card-body row'>
          <div className="ds-main-column col-xs-10">
            <DSLogo />
              <CardText />
                  <div className="row">
                  <div className="col-xs-6">
                  <div className='ds-progress-bar-wrapper'>
                                                        <CircularProgressbar
                                                          value={+tokensSoldPerc.toString().substring(0, 1)}
                                                          text={`${tokensSoldPerc
                                                            .toString()
                                                            .substring(0, 1)}% sold`}
                                                          strokeWidth={5}
                                                          styles={buildStyles({
                                                            textSize: "10px",
                                                            strokeLinecap: "butt",
                                                            pathColor: "#FFFFFF",
                                                            textColor: "#FFFFFF",
                                                          })}
                                                        />
                                    </div>
                                    <span className='text-orange text-xl'>
                    &#9432;{" "}
                  </span>
<a
                  id='etherscan-link'
                  className='text-grey italic'
                  href={`https://rinkeby.etherscan.io/token/${tokenAddress}`}
                  target='_blank'
                >
                  
                  <span>
                  View contract on Etherscan
                  </span>
                </a>
                                  </div>
                                      <div className="col-xs-6">
                                      <div className="ds-checkout">
                                      <p className='text-grey'>
                                                                                                  Buy Donut Stones
                                                                                                </p>
                                                                                              <div>
                                                                                                <input
                                                                                                  onChange={updateTokenValues}
                                                                                                  onLoad={updateTokenValues}
                                                                                                  id='number-of-tokens-to-buy'
                                                                                                  type='number'
                                                                                                  placeholder='1'
                                                                                                ></input>
                                                                                                <button
                                                                                                  id='number-of-tokens-to-buy-btn'
                                                                                                  onClick={buyTokens}
                                                                                                >
                                                                                                  {"ⅅ"}
                                                                                                </button>
                                                                                              </div>
                                                                                              <div
                                                                                                id='number-of-tokens-to-buy-values'
                                                                                                className='text-white typed-text'
                                                                                              >
                                                                                                <p>
                                                                                          
                                                                                                  <span className='text-blue'></span>{" "}
                                                                                                </p>
                                                                                                <p>
                                                                                               
                                                                                                  <span className='text-blue'></span>{" "}
                                                                                                </p>
                                                                                                <p>
                                                                                            
                                                                                                  <span className='text-blue'></span>{" "}
                                                                                                </p>
                                                                                              </div>
                                                                                  </div>
                                                                                  </div>
                                                                                  </div>
            </div>
            {/* Side column */}
            <div className="col-xs-2 ds-side-column">
                <div className="ds-vertical-line">
                  
                </div>
                <div className="ds-align-bottom">
                  <div className="ds-img">
                </div>
                </div>
            </div>
          </div>
        </div>
  );
};

export default TokenInfo;
