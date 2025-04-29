import React, { useEffect } from "react";
import './interpretingservice.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";

// Static imports - VERIFY THESE PATHS ARE CORRECT
import Street1 from '../assets/images/street1.svg';
import InterpretingBg from '../assets/images/interpretingbg.svg';

const Interpretingservice = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="service1-container"> {/* Added wrapper div */}
      {/* Hero Section */}
      <section 
        className="service1-hero-section"
        style={{ 
          backgroundImage: `url(${InterpretingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
      
        }}
      >
        <Header />
        <Container className="flex-grow-1 d-flex align-items-center">
          <Row className="justify-content-center w-100">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="service1-hero-head">
                  INTERPRETING SERVICE
                </h1>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Content Section */}
      <section className="service1-content-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="mb-4 mb-md-0">
              <motion.img
                src={Street1}
                alt="Vienna street scene"
                className="img-fluid service1-image"
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
                  <hr className="service1-divider" />
                  <h3 className="service1-section-title fw-bold mb-0">Service</h3>
                </div>
                <p className="service1-text">
                  Communication matters — especially in real estate. We offer
                  interpreting services to make sure language never stands in the way
                  of your goals. Our skilled interpreters are fluent in German,
                  French, English, and Russian, helping you manage property sales,
                  purchases, and rentals with ease. And if you speak Arabic, we've got
                  you covered! We work with trusted professionals who will
                  assist you with care and clarity. No matter your plans, we'll help you feel
                  confident and well-supported at every stage.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Interpretingservice;