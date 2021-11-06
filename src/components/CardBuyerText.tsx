import React from "react";

export default function CardBuyerText() {

  return (
    <p>
      <h2>🙄 TLDR:</h2>
      <h3>If your technically minded, follow the instructions below to make the purchase yourself. Alternatively just email 
      me at <a href="mailto:info@donutstones.org" className="text-italic">info@donutstones.org</a> with a 
      legitmate claim why you want these tokens, and ill do it for you and send you the wallet.</h3>
      <h2>Technical instructions:</h2>
      <h3> The main point to note here is that the smart contract for both the erc20 token and the crowdsale is 
      hosted on the <span className="text-bold">rinkeby test network</span> (Chain Id = 4) as opposed to the ethereum mainnet</h3>
      <h4>As such, you will need to have an ethereum account set up specifically on this network, and buy donut stones using that account.
      You can create an account on this network using metamask or most other ethereum wallet providers</h4>
      <h4>Its free to do this, and free to request ETH to your wallet address on this network, 
      using <a href="https://faucet.rinkeby.io/">this site</a></h4>
      <h2>Either way, Donut stones are 100% free 🍩</h2>
      <h4>The small caveat here is that requesting ETH to your rinkeby wallet using the faucet is rate limited, so even though its free,
      you will only be able to buy a limited amount.</h4>
    </p>
  );
}
