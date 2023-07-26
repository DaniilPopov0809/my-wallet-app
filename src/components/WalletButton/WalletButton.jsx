import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/walletSelector";

const WalletButton = ({ operation, nameButton }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(operation());
  };
  return (
    <Button type="button" onClick={handleClick} disabled={isLoading}>
      {nameButton === "Connect wallet" && isLoading && (
        <Spinner animation="border" role="status" size="sm"></Spinner>
      )}{" "}
      {nameButton}
    </Button>
  );
};

WalletButton.propTypes = {
  operation: PropTypes.func.isRequired,
  nameButton: PropTypes.string.isRequired,
};

export default WalletButton;
