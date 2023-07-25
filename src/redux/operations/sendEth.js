import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from "ethers";
import web3Modal from "../../configurations/web3ModalConfig";

const sendEth = createAsyncThunk(
  'wallet/sendEth',
  async ({recipientAddress, amount}, thunkAPI) => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
  
      const transaction = {
        to: recipientAddress,
        value: ethers.utils.parseEther(amount),
      };
  
      const sendTransaction = await signer.sendTransaction(transaction);
      await sendTransaction.wait();
  
      return sendTransaction.hash;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export default sendEth;