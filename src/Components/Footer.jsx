import React from "react";
import '../Components/footer.css';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import Languageicon from '../assets/images/languageicon.svg';
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-section container-fluid">
      <Container>
        <hr className="footer-line" />
        <Row className="footer-content">
          {/* Left Side - Navigation */}
          <Col md={4} className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="footer-center">
            <p className="footer-address ">Berthold Consulting, Erzherzog-Karl-Strase 25/1, 1220 Vienna Austria</p>
            <div className="social-icons">
              <FaPhone />
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
              <FaTwitterSquare />
            </div>
            <p className="copyright">Berthold Consulting all rights reserved</p>
            <div className="copyrights">
              <span className="copyright-icon"><MdCopyright /></span>
              <p className="company">Powered By Kevellcorp</p>
            </div>
          </Col>

          <Col md={4} className="footer-languages">
            <span className="language-selector">
              <img src={Languageicon} alt="language icon" />
              English
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}