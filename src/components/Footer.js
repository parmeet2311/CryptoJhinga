import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import Contact from "./Contact/Contact";


function Footer() {

  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col md="2" className="footer-copywright">
          <strong style={{color:"white"}}>Jhinga Token</strong>
          <p className="footer-list">Add fund to your crypto account to start trading crypto, you can add fund with a variety of payment method.</p>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3 className="footer-heading">Jhinga</h3>
          <p className="footer-list">We're Hiring</p>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3 className="footer-heading">Company</h3>
          <p className="footer-list">We're Hiring</p>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3 className="footer-heading">Resources</h3>
          <p className="footer-list">About us</p>
          <p className="footer-list">Terms</p>
          <p className="footer-list">Privacy</p>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3 className="footer-heading">Community</h3>
          <p className="footer-list">About us</p>
          <p className="footer-list">Terms</p>
          <p className="footer-list">Privacy</p>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-list">Contact us</p>
          {/* <Route path="/contact" element={<Contact />}>Contact us</Route> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
