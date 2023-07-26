import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { walletOperations } from "../../redux/operations";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import validationTransactionForm from "../../helpers/validationTransactionForm";
import { StyledInput, ErrorField } from "./TransactionForm.styled";
import {
  selectCurrentAddress,
  selectIsLoading,
} from "../../redux/walletSelector";
import Spinner from "react-bootstrap/Spinner";

function TransactionForm() {
  const currentAddress = useSelector(selectCurrentAddress);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      amountETH: "",
    },
    validationSchema: validationTransactionForm,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!currentAddress) {
        toast.info("Please, connect to you wallet!");
      } else {
        setSubmitting(true);
        await dispatch(
          walletOperations.sendEth({
            recipientAddress: values.walletAddress,
            amount: values.amountETH,
          })
        );
        setSubmitting(false);
        await resetForm();
        await dispatch(walletOperations.connectToWallet());
      }
    },
  });
  return (
    <Container
      as="section"
      className="py-4 px-0 d-flex flex-1 flex-column align-items-center"
    >
      <h1 className="mb-4">Transaction form</h1>
      <Form
        onSubmit={formik.handleSubmit}
        className="border rounded p-3 text-center container-lg"
        style={{ maxWidth: "600px" }}
      >
        <Form.Group className="mb-3 text-start">
          <Form.Label>Wallet address</Form.Label>
          <StyledInput
            type="text"
            placeholder="Enter wallet address (0x...)"
            name="walletAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.walletAddress}
            className={
              formik.touched.walletAddress && formik.errors.walletAddress
                ? "error"
                : ""
            }
          />
          {formik.touched.walletAddress && formik.errors.walletAddress ? (
            <ErrorField>{formik.errors.walletAddress}</ErrorField>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3 text-start">
          <Form.Label>Amount ETH</Form.Label>
          <StyledInput
            type="text"
            placeholder="Enter amount ETH"
            name="amountETH"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amountETH}
            className={
              formik.touched.amountETH && formik.errors.amountETH ? "error" : ""
            }
          />
          {formik.touched.amountETH && formik.errors.amountETH ? (
            <ErrorField>{formik.errors.amountETH}</ErrorField>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          {currentAddress && isLoading && (
            <Spinner animation="border" role="status" size="sm"></Spinner>
          )}{" "}
          Send ETH
        </Button>
      </Form>
    </Container>
  );
}

export default TransactionForm;
