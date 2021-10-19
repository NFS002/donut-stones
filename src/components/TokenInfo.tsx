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

  /* Sue me... */
  const updateTokenValues = async function () {
    var input = document.getElementById(
      "number-of-tokens-to-buy"
    ) as HTMLInputElement;

    if (input && input.value) {
      inputValue = +input.value;
    }

    const getEthPriceGBP = async () => {
      const payload = { fsym: "ETH", tsyms: "GBP", sign: true };

      const response = await axios.post<EthPriceGBP>(
        "https://min-api.cryptocompare.com/data/price",
        payload
      );
      ethPriceGBP = response.data.GBP;
    };

    const decimals = 18;
    const weiValueRaw = inputValue * price.toNumber();

    const etherValueRaw = await utils.formatEther(weiValueRaw);

    await getEthPriceGBP();

    const gbpValue = (+etherValueRaw * ethPriceGBP).toFixed(decimals);
    const etherValue = (+etherValueRaw).toFixed(decimals);
    const weiValue = weiValueRaw.toFixed(decimals);

    var container = document.getElementById("number-of-tokens-to-buy-values");

    if (container) {
      var htmlTemplate = `
      <p>= ${String(weiValue).substring(
        0,
        decimals
      )} <span class="text-blue">Wei</span> </p>
      <p>= ${String(etherValue).substring(
        0,
        decimals
      )} <span class="text-blue">ETH</span> </p>
      <p>≈ ${String(gbpValue).substring(
        0,
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
    <React.Fragment>
      <AccountInfo />

      <React.Fragment>
        <div className='card shadow-2xl main-card rounded'>
          <div className='card-body grid grid-rows-3 grid-cols-5'>
            <div className='row-span-1 col-span-4'>
            <DSLogo />
              <div className='card-text col-span-4 row-span-1 text-grey text-lg'>
                <p>
                  Donut Stones is an ERC20 cryptographic token created as the{" "}
                  <span className='italic'>antidote</span> to the traditional
                  economic mechanisms of distrubuting value. It was inspired by
                  the growing popular research on the 'doughnut economy' by Kate
                  Raworth that illlustrates many of the flaws in traditional
                  economies that rely on perpertual growth, and is not only
                  sustainable model but increasingly neglects maginalised
                  portions of the population. The idea behind Donut Stones (⅊)
                  is a secondary currency, to circulate alongside traditional
                  fiat currencies such as GBP, but which the exchange is
                  regulated, and which can only be{" "}
                  <span className='italic'>spent</span> at a predefined subset
                  of institutions that offer essential goods and services. If we
                  imagine the distribution of wealth as a doughut shape whereby
                  the most severe inequalities and the most basic human
                  necessities are most concentrated at the center and excess
                  wealth and environmental degrdationm marks the perimeter, then
                  Donut Stones provide the inverse model, concentrated at the
                  center of the doughut, and becoming increasingly scarce and
                  more tightly regulated towards the perimeter. To show your
                  support for the project, anyone may currently buy or exchange
                  Donut Stones. Alternatively, you may formally request them by
                  sending an email to email@domain.com, quoting your ethererum
                  address, and amount you would like to request. Of course any
                  words of support or feedback will aso be greatly appreciated,
                  and I will aim to keep this page updated.
                  <br></br>
                  If you are interested to find out more about the specificities
                  of how this token may practically integrates into the modern
                  economy,{" "}
                  <a id='whitepaper-link' href='https://dumacollective.com/404'>
                    you can read the whitepaper here.
                  </a>
                </p>
              </div>
            </div>
            <div className='card-side row-span-3 col-span-1'>
              <div className='divider divider-vertical'></div>
            </div>
            <div className='col-span-2 row-span-1'>
              <div className='circular-progress-bar-parent-wrapper'>
                <div className='card-bottom'>
                  <div className='circular-progress-bar-wrapper'>
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
                </div>
                <a
                  id='etherscan-link'
                  className='text-grey italic'
                  href={`https://rinkeby.etherscan.io/token/${tokenAddress}`}
                  target='_blank'
                >
                  <span className='text-orange font-bold text-xl'>
                    &#9432;{" "}
                  </span>
                  View contract on Etherscan
                </a>
              </div>
            </div>
            <div className='col-span-2 row-span-1'>
              <div className='card-bottom-wrapper'>
                <div className='card-bottom'>
                  <div className='text-lg'>
                    <p className='pl-1 pb-1 text-grey'>
                      Buy Donut Stones <span className='text-2xl'>⅊</span>
                    </p>
                    <p className='text-white pb-2'>
                      (Requires a <span className='text-orange'>Metamask</span>{" "}
                      connection)
                    </p>
                  </div>
                  <div>
                    <input
                      onChange={updateTokenValues}
                      onLoad={updateTokenValues}
                      id='number-of-tokens-to-buy'
                      type='number'
                      placeholder='1'
                      className='input shadow-lg rounded-r-none text-grey'
                    ></input>
                    <button
                      id='number-of-tokens-to-buy-btn'
                      onClick={buyTokens}
                      className='absolute shadow-lg rounded-l-none btn'
                    >
                      {"=>"}
                    </button>
                  </div>
                  <div
                    id='number-of-tokens-to-buy-values'
                    className='pt-3 text-xl text-white typed-text'
                  >
                    <p>
                      {" "}
                      <span className='text-blue'></span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className='text-blue'></span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className='text-blue'></span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default TokenInfo;
