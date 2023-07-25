import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentAddress,
  selectCurrentBalance,
} from "../../redux/walletSelector";
import roundUpBalance from "../../helpers/roundUpBalance";
import shortAddress from "../../helpers/shortAddress";
import { Button } from "react-bootstrap";

const WalletInfo = () => {
  const currentAddress = useSelector(selectCurrentAddress);
  const currentBalance = useSelector(selectCurrentBalance);

  return (
    <div className="me-3">
      <Button className="me-3 border rounded bg-transparent">{shortAddress(currentAddress)}</Button>
      <Button className="border rounded bg-transparent">{`${roundUpBalance(currentBalance)} ETH`}</Button>
    </div>
  );
};

export default WalletInfo;
