import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import TokenInfo from "./components/TokenInfo";
import Connector from "./components/Connector"
import { getLibrary } from "./components/AccountInfo";


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
function App() {
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
