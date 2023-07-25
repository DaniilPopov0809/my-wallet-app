import { createSlice } from "@reduxjs/toolkit";
import { walletOperations } from "./operations";
import { toast } from 'react-toastify';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error(state.error);
};

const initialState = {
  currentAddress: null,
  currentBalance: null,
  hash: null,
  isLoading: false,
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(walletOperations.connectToWallet.pending, handlePending)
      .addCase(walletOperations.connectToWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentAddress = action.payload.currentAddress;
        state.currentBalance = action.payload.currentBalance;
        toast.success('Connected to the wallet successfully!');
      })
      .addCase(walletOperations.connectToWallet.rejected, handleRejected)
      .addCase(walletOperations.disconnectFromWallet.pending, handlePending)
      .addCase(
        walletOperations.disconnectFromWallet.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.currentAddress = action.payload;
          state.currentBalance = action.payload;
          toast.success('Disconnect from the wallet successfully!');
        }
      )
      .addCase(walletOperations.disconnectFromWallet.rejected, handleRejected)
      .addCase(walletOperations.sendEth.pending, handlePending)
      .addCase(walletOperations.sendEth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hash = action.payload;
        toast.success(`Transaction successfully! Hash: ${state.hash}`);
      })
      .addCase(walletOperations.sendEth.rejected, handleRejected);
  },
});

export default walletSlice.reducer;
