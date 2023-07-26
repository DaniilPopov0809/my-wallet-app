import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentAddress,
  selectCurrentBalance,
} from "../../redux/walletSelector";
import roundUpBalance from "../../helpers/roundUpBalance";
import shortAddress from "../../helpers/shortAddress";
import { Button } from "react-bootstrap";
import ToolTipMes from "../ToolTip/ToolTip";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const WalletInfo = ({cls}) => {
  const currentAddress = useSelector(selectCurrentAddress);
  const currentBalance = useSelector(selectCurrentBalance);

  const handleClick = () => {
    toast.info("Copy to clipboard.");
  }

  return (
    <div className={cls}>
      <CopyToClipboard text={currentAddress} onCopy={handleClick}>
      <Button
        className="me-lg-3 mb-2 mb-lg-0 border rounded bg-transparent fullAddress"
      >
        {shortAddress(currentAddress)}
      </Button>
      </CopyToClipboard>
      <ToolTipMes
        anchor={".fullAddress"}
        position={"bottom"}
        content={`Wallet: ${currentAddress}`}
      />
      <CopyToClipboard text={currentBalance} onCopy={handleClick}>
      <Button className="border rounded bg-transparent fullBalance">{`${roundUpBalance(
        currentBalance
      )} ETH`}</Button>
      </CopyToClipboard>
      <ToolTipMes
        anchor={".fullBalance"}
        position={"bottom"}
        content={`Balance: ${currentBalance} ETH`}
      />
    </div>
  );
};

export default WalletInfo;
