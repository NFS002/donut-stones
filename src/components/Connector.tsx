import React from "react";

import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from "@web3-react/injected-connector";

import { injected, POLLING_INTERVAL } from "../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../dapp/hooks";

export default function Connector() {
  const { connector, activate, deactivate, active, error } = useWeb3React<Web3Provider>();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return "No Ethereum browser extension detected.";
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network.";
    } else if ( error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect ) {
      return "Please authorize this website to access your Ethereum account.";
    } else {
      //logger.error(error);
      return "An unknown error occurred. Check the console for more details.";
    }
  }

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const activating = injected === activatingConnector;
  const connected = injected === connector;

  return (
    <div className="ds-connector text-xl">
      <div className="text-red">
        {!!error && `🚫 ${getErrorMessage(error)}`}
      </div>
      {(connected && !Boolean(error)) && (
        <div className="text-xl text-orange">
            Connected 🦊 ✅
        </div>
        )}
        {(!connected && !Boolean(error)) && (
          <div id="connect-btn"
            onClick={() => {
              setActivatingConnector(injected);
              activate(injected);
            }}>
            Connect &rarr; 🦊
          </div>
        )}
    </div>
  );
}
