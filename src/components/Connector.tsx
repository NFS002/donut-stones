import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import React from "react";

import { injected, POLLING_INTERVAL } from "../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../dapp/hooks";

export function Connector() {
  const context = useWeb3React<Web3Provider>();
  const { connector, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
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
    <div className="flex flex-row w-full ml-4 mr-4">
        {(connected) && (
            <div className="uppercase font-bold text-xl text-orange">
              Connected 🦊 ✅
          </div>
          )}
          {(!connected) && (
            <div
              id="connect-btn"
              className="uppercase font-bold text-xl p-2"
              onClick={() => {
                setActivatingConnector(injected);
                activate(injected);
              }}>
              Connect  &rarr; 🦊
            </div>
          )}
      </div>
  );0.
}
