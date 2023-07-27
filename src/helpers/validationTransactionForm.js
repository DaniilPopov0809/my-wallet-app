import * as Yup from "yup";
import { ethers } from "ethers";
import { checkAddressChecksum } from "ethereum-checksum-address";

const validationTransactionForm = Yup.object({
  walletAddress: Yup.string()
    .required("Please enter wallet address")
    .matches(/^0x([A-Fa-f0-9]{40})$/, "Please enter a valid wallet address")
    .test(
      "checkAddressChecksum",
      "Address is not a valid checksum address",
      (value) => {
        return checkAddressChecksum(value);
      }
    ),
  amountETH: Yup.string()
    .required("Please enter amount of ETH")
    .test("isValidAmountETH", "Please enter a valid amount of ETH", (value) => {
      if (isNaN(value)) {
        return false;
      }
      if (value < 0.000000000000000001) {
        return false
      }
      const isValid = ethers.utils.parseUnits(value, "ether");
      return isValid; 
    }),
});

export default validationTransactionForm;
