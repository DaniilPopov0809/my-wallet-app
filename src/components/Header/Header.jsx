import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../Logo/Logo";
import WalletInfo from "../WalletInfo/WalletInfo";
import { selectCurrentAddress } from "../../redux/walletSelector";
import { useSelector } from "react-redux";
import { walletOperations } from "../../redux/operations";
import WalletButton from "../WalletButton/WalletButton";
import { TextLogo } from "./Header.styled";

const Header = () => {
  const currentAddress = useSelector(selectCurrentAddress);

  return (
    <header>
      <Navbar bg="secondary" expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <a
              href={"/"}
              className="text-decoration-none d-flex align-items-center"
            >
              <Logo />
              <TextLogo className="">
                <span className="text-dark">WaLL</span>eT
              </TextLogo>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
              <div className="d-flex flex-column flex-lg-row py-3">
                {currentAddress ? (
                  <WalletInfo cls={"mb-2 mb-lg-0 me-lg-3 d-flex flex-column flex-lg-row"} />
                ) : (
                  <WalletButton
                    operation={walletOperations.connectToWallet}
                    nameButton={"Connect wallet"}
                  />
                )}

              {currentAddress && (
                <WalletButton
                  operation={walletOperations.disconnectFromWallet}
                  nameButton={"Disconnect"}
                />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
