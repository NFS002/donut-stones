import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import ICOToken from "./ICOToken";
import MainCard from "./MainCard";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";


import "./styles/App.css";
import "./styles/index.css";
import "./styles/typewriter.css";
import "./styles/circular-progressbar.css";

const crowdsaleAddress = import.meta.env.VITE_CROWDSALE_ADDRESS;

const queryClient = new QueryClient();
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <div className="App pt-6 shadow-xl">
          
            <MainCard crowdsaleAddress={crowdsaleAddress} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
