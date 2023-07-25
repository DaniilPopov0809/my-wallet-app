import { createAsyncThunk } from '@reduxjs/toolkit';
import web3Modal from "../../configurations/web3ModalConfig";

const disconnectFromWallet = createAsyncThunk(
  'wallet/disconnectFromWallet',
  async (_, thunkAPI) => {
    try {
      await web3Modal.clearCachedProvider();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default disconnectFromWallet;