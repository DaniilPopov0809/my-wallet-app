import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-center text-light mt-auto">
      <Container className=" p-3">
        <p className="mb-1">All rights reserved © {new Date().getFullYear()} by Daniil Popov</p>
        <p className="mb-1">
          e-mail: <a href="mailto:x6uhrox@gmail.com">x6uhrox@gmail.com</a>
        </p>
        <p className="m-0">
        GitHub: <a href="/">GitHub</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
