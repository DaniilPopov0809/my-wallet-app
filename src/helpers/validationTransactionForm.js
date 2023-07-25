import * as Yup from "yup";
import { ethers } from "ethers";

const validationTransactionForm = Yup.object({
  walletAddress: Yup.string()
    .required("Please enter a correct wallet address")
    .matches(/^0x([A-Fa-f0-9]{40})$/, "Please enter a valid wallet address"),
  amountETH: Yup.string()
    .required("Please enter amount of ETH")
    .test("isValidAmountETH", "Please enter a valid amount of ETH", (value) => {
      if (isNaN(value)) {
        return false;
      }
      const isValid = ethers.utils.parseUnits(value, "ether");
      if (isValid) {
        return true;
      }
      return false;
    }),
});

export default validationTransactionForm;
