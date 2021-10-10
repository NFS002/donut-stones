import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar, 
  buildStyles
} from "./circular-progressbar";

interface Props {
  tokenName: string;
  tokenSymbol: string;
}
const percentage = 10;

const TokenInfo = ({ tokenName, tokenSymbol }: Props) => {

  /* Sue me... */
  const updateTokenValues = function() {

    var input = (document.getElementById('number-of-tokens-to-buy') as HTMLInputElement)

    var inputValue = 100

    if (input && input.value) {
      inputValue = (+ input.value);
    }

    var container = document.getElementById('number-of-tokens-to-buy-values')
    if (container) {
      var template = `
      <p>= ${inputValue} <span class="text-blue">Wei</span> </p>
      <p>= ${inputValue} <span class="text-blue">ETH</span> </p>
      <p>≈ ${inputValue} <span class="text-blue">GBP</span> </p>
      `
      container.innerHTML = template;
    }

  }

  return (
    <React.Fragment>
      <div className="card shadow-2xl main-card">
        <div className="card-body grid grid-rows-3 grid-cols-5">
          <div className="row-span-1 col-span-4">
            <div className="card-text col-span-4 row-span-1 text-grey text-lg">
              <p>Donut Stones is an ERC20 cryptographic token created as the <span className="italic">antidote</span> to the traditional economic mechanisms of distrubuting value. 
                It was inspired by the growing popular research on the 'doughnut economy' by Kate Raworth that illlustrates many of 
                the flaws in traditional economies that rely on perpertual growth, and is not only sustainable model but increasingly neglects maginalised portions 
                of the population. The idea behind Donut Stones (⅊) is a secondary currency, to circulate alongside traditional fiat currencies such as GBP, but which the exchange is
                regulated, and which can only be <span className="italic">spent</span> at a predefined subset of institutions that offer essential goods and services. If we imagine the distribution of wealth as a doughut shape
                whereby the most severe inequalities and the most basic human necessities are most concentrated at the center and excess wealth and environmental degrdationm marks the perimeter, then Donut Stones provide the inverse model, concentrated at the center of the doughut,
                and becoming increasingly scarce and more tightly regulated towards the perimeter. To show your support for the project, anyone may currently buy or exchange Donut Stones. 
                Alternatively, you may formally request them by sending an email to email@domain.com, quoting your ethererum address, and amount you would like to request. 
                Of course any words of support or feedback will aso be greatly appreciated, and I will aim to keep this page updated.
                <br></br>
                If you are interested to find out more about the specificities of how this token may practically integrates into the modern economy, <a id="whitepaper-link" href="https://dumacollective.com/404">you can read the whitepaper here.</a>
            </p>
          </div>
          </div>
          <div className="card-side row-span-3 col-span-1">
            <div className="divider divider-vertical"></div>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="circular-progress-bar-parent-wrapper">
              <div className="card-bottom">
                <div className="circular-progress-bar-wrapper">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% sold`}
                    strokeWidth={5}
                    styles={buildStyles({
                      textSize: "10px",
                      strokeLinecap: "butt",
                      pathColor: "#FFFFFF",
                      textColor: "#FFFFFF",
                      pathTransitionDuration: 0.5,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="card-bottom-wrapper">
              <div className="card-bottom">
              <div className="text-lg"><p className="pl-1 pb-1 text-grey">Buy Donut Stones <span className="text-2xl">⅊</span></p>
                            <p className="text-white pb-2">(Requires a <span className="text-orange">Metamask</span> connection)</p></div>
                <div><input onChange={updateTokenValues} onLoad={updateTokenValues} id="number-of-tokens-to-buy" 
                                  type="number" placeholder="100"
                                className="input shadow-lg rounded-r-none text-grey"></input>
                      <button id="number-of-tokens-to-buy-btn" className="absolute shadow-lg rounded-l-none btn">{'=>'}</button>
                </div>
              <div id="number-of-tokens-to-buy-values" className="pt-3 text-xl text-white typed-text">
                  <p>= 100 <span className="text-blue">Wei</span> </p>
                  <p>= 100 <span className="text-blue">ETH</span> </p>
                  <p>≈ 100.00 <span className="text-blue">GBP</span> </p>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TokenInfo;
