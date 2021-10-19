import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import TokenInfo from "./components/TokenInfo";
import { getLibrary } from "./components/AccountInfo";


import "./styles/app.css";
import "./styles/index.css";
import "./styles/typewriter.css";
import "./styles/circular-progressbar.css";
import "./styles/ds-logo.css";

const crowdsaleAddress = import.meta.env.VITE_CROWDSALE_ADDRESS;

const queryClient = new QueryClient();
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <div className="App pt-6 shadow-xl">        
            <TokenInfo crowdsaleAddress={crowdsaleAddress} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
