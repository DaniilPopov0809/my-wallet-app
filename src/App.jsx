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
          <section className="py-4 d-flex flex-1 flex-column align-items-center">
          <h1 className="mb-4">Transaction form</h1>
          <TransactionForm />
          </section>
        </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;
