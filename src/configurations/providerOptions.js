import WalletConnectProvider from "@walletconnect/web3-provider";

const projectID = import.meta.env.VITE_PROJECT_ID;

const providerOptions = {
    walletconnect: {
      display: {
        name: "wallet"
      },
      package: WalletConnectProvider,
      options: {
        infuraId: projectID,
      }
    }
  };

export default providerOptions;