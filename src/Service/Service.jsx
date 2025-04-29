import React, { useEffect } from "react";
import AOS from "aos";
import './service.css';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";

// Static imports
import Palace from '../assets/images/img-palace.svg';
import ServiceBg from '../assets/images/servicebg.svg';

const Services = () => {
  // Initialize AOS animation library
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
        className="service-hero-section"
        style={{ 
          backgroundImage: `url(${ServiceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} className="service-hero-column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="service-hero-head">
                  REAL ESTATE CONSULTING SERVICE
                </h1>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Content Section */}
      <section className="service-content-section py-5">
        <Container>
          <Row className="align-items-center ">
            <Col md={5} className="mb-4 mb-md-0">
              <motion.img
                src={Palace}
                alt="Vienna palace"
                className="img-fluid service-image"
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
                  <hr className="service-divider" />
                  <h3 className="service-section-title fw-bold mb-0">Service</h3>
                </div>
                
                <p className="service-text">
                  At Berthold Consulting, we understand that real estate decisions are important. Whether you're
                  buying, selling, or just exploring the market, we're here to help. With deep expertise in Vienna's
                  property market, we'll find the best opportunities for you and guide you through the entire
                  process. Let us make your real estate journey simple and rewarding.
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

export default Services;