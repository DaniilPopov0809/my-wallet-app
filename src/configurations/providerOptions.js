import WalletConnectProvider from "@walletconnect/web3-provider";
// import { Web3Provider } from "@ethersproject/providers";

const projectID = import.meta.env.VITE_PROJECT_ID;
// const projectID= '038fb239f4277e9a81ef123e617f5ec6';

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