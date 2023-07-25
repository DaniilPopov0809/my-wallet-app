import React from "react";
import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
  } from "@web3modal/ethereum";
  import { Web3Modal, Web3Button } from "@web3modal/react";
  import { configureChains, createConfig, WagmiConfig } from "wagmi";
  import { arbitrum, mainnet, polygon } from "wagmi/chains";

  
  const Web3WalletModal = () => {
    const chains = [arbitrum, mainnet, polygon];
    const projectId = "038fb239f4277e9a81ef123e617f5ec6";
  
    const { publicClient } = configureChains(chains, [
      w3mProvider({ projectId }),
    ]);
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({ projectId, chains }),
      publicClient,
    });
    const ethereumClient = new EthereumClient(wagmiConfig, chains);
  
    return (
      <>
        <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig>
  
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </>
    );
  }
  
  export default Web3WalletModal;
  