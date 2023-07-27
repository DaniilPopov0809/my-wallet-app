import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsConnect } from "./redux/walletSelector";
import { walletOperations } from "./redux/operations";
import Header from "./components/Header/Header";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  const isConnect = useSelector(selectIsConnect);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isConnect) {
      dispatch(walletOperations.connectToWallet());
    }
  },[]);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main>
        <Container>
          <TransactionForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
