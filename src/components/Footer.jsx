import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
// Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-4">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are dedicated to providing you with the best shopping experience. Our team is passionate about offering high-quality products at affordable prices.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Customer Service</h5>
            <Nav className="flex-column">
              <Nav.Link href="/contact" className="footer-link">Contact Us</Nav.Link>
              <Nav.Link href="/returns" className="footer-link">Returns & Exchanges</Nav.Link>
              <Nav.Link href="/shipping" className="footer-link">Shipping Information</Nav.Link>
              <Nav.Link href="/faq" className="footer-link">Frequently Asked Questions</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Follow Us</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="https://facebook.com" target="_blank" className="footer-link">Facebook</Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="footer-link">Twitter</Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="footer-link">Instagram</Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank" className="footer-link">LinkedIn</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr />
        <p className="footer-copy">&copy; {new Date().getFullYear()} Super Cool Shopping. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;