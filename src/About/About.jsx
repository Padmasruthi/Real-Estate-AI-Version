import React,{useEffect} from "react";
import AOS from "aos";
import './about.css'
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";

// Static imports
import Persons from '../assets/images/persons.svg';
import Horseride from '../assets/images/horseride.svg';


const AboutUs = () => {
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
      <section className="about-hero-section">
        <Header />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} className="about-hero-column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="about-hero-head mt-5">
                  ABOUT US
                </h1>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="about-title ">Berthold Real Estate Consulting</h2>
              <p className="about-subtitle">
                Invest in Excellence — Prime Real Estate & Exclusive Opportunities in Vienna, Austria
              </p>
            </Col>
          </Row>

          {/* Main Content */}
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div
                data-aos="fade-right"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <hr className="about-divider" />
                  <h3 className="about-section-title fw-bold mb-0">About Us</h3>
                </div>
                
                <div className="about-content">
                  <p className="about-text">
                    At Berthold Consulting, we believe real estate is about more than just property — it's about
                    people, dreams, and trust. Based in Vienna, we offer professional guidance paired with genuine
                    care for every client's individual needs.
                  </p>
                  <p className="about-text">
                    Founded by Ekaterina Berthold, with nearly eight years of industry expertise, our company is
                    built on dedication and a personal approach. Whether you're buying, selling, or investing, we
                    ensure you feel confident every step of the way.
                  </p>
                  <p className="about-text">
                    Ekaterina speaks French, German, English, and Russian, allowing her to assist a truly
                    international community in Vienna. Her strong local network and market knowledge help
                    unlock the best opportunities for you.
                  </p>
                  <p className="about-text">
                    Daniel Berthold is an expert in infrastructure projects and has many years of experience in
                    international project management.
                  </p>
                  <p className="about-text">
                    Let us help turn your real estate goals into reality — with heart, professionalism, and attention
                    to detail.
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <motion.img
                src={Persons}
                alt="Berthold team"
                className="img-fluid about-image"
                data-aos="zoom-in"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Full Width Image Section */}
      <section className="full-width-section">
        <motion.img
          src={Horseride}
          alt="Vienna landscape"
          className="img-fluid w-100"
          data-aos="fade-up"
          loading="lazy"
        />
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;