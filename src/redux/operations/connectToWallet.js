import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from "ethers";
import web3Modal from "../../configurations/web3ModalConfig";

const connectToWallet = createAsyncThunk(
  'wallet/connectToWallet',
  async (_, thunkAPI) => {
  try {
    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);

    const signer = provider.getSigner();  
    console.log("🚀 ~ file: connectToWallet.js:14 ~ signer:", signer)
    // return signer;
    const currentAddress = await signer.getAddress();
    const currentBalance = await provider.getBalance(currentAddress);
    return { currentAddress, currentBalance: ethers.utils.formatEther(currentBalance) };
  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);;
  }
});

export default connectToWallet;
