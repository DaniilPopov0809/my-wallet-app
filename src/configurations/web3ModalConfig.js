import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';


const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true, 
    providerOptions,
  });

export default web3Modal;