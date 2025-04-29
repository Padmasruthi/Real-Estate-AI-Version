import React, { useEffect } from "react";
import './relocationservice.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";

// Static imports
import Train from '../assets/images/train.svg';
import RelocationBg from '../assets/images/relocationbg.svg'; 

const Relocationservice = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="service2-hero-section"
        style={{ 
          backgroundImage: `url(${RelocationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} className="service2-hero-column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="service2-hero-head">
                  RELOCATION SERVICE
                </h1>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Content Section */}
      <section className="service2-content-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="mb-4 mb-md-0">
              <motion.img
                src={Train}
                alt="Train illustration"
                className="img-fluid service2-image"
                data-aos="zoom-in"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={7}>
              <motion.div
                data-aos="fade-left"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <hr className="service2-divider" />
                  <h3 className="service2-section-title fw-bold mb-0">Legal Support</h3>
                </div>
                
                <p className="service2-text">
                  In addition to helping with moving costs and temporary housing, our services also include:
                  partner job search assistance, enrolling children in schools, setting up utilities, cultural
                  adaptation programs, language courses, property selling guidance, tax consultations, help with
                  opening local bank accounts, and city orientation tours.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Relocationservice;