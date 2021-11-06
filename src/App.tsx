import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Web3Provider } from "@ethersproject/providers";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import TokenInfo from "./components/TokenInfo";
import Connector from "./components/Connector"


import { POLLING_INTERVAL } from "./dapp/connectors";


import "./styles/app.css";
import "./styles/layout.css";
import "./styles/index.css";

import "./styles/typed-text.css";
import "./styles/blinked-text.css";

import "./styles/circular-progressbar.css";
import "./styles/ds-logo.css";
import "flexboxgrid/css/flexboxgrid.css";

const crowdsaleAddress = import.meta.env.VITE_CROWDSALE_ADDRESS;
const queryClient = new QueryClient();


function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

function App() {
  const state = {
    isOpen: false,
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="ds-container">
          <div className="App pt-6 shadow-xl">        
            <TokenInfo crowdsaleAddress={crowdsaleAddress} />
          </div>
        </div>
        <Connector></Connector>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
