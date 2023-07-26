import React from "react";
import Header from "./components/Header/Header";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
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
