import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/home.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Static imports
import Street3 from '../assets/images/street3.svg';
import Coffee from '../assets/images/coffee.svg';
import Service from '../assets/images/service.png';
import Service1 from '../assets/images/service1.png';
import Service2 from '../assets/images/service2.png';
import Street from '../assets/images/street.svg';
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";
import homepageimgResponsive from '../assets/images/homepageimgresponsive.svg';
import streetimgResponsive from '../assets/images/street-img-responsive.png';
import street3imgResponsive from '../assets/images/street3imgresponsive.svg';

const HomePage = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  // Service cards data
  const services = [
    {
      id: 1,
      image: Service,
      title: "Real Estate Consulting",
      description: "Expert guidance for all your property needs"
    },
    {
      id: 2,
      image: Service1,
      title: "Interpreting Services",
    },
    {
      id: 3,
      image: Service2,
      title: "Relocation Services",
    }
  ];

  // Mobile slider functionality
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (direction) => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -width : width;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update active index after scroll
      setTimeout(() => {
        if (sliderRef.current) {
          const newScrollLeft = sliderRef.current.scrollLeft;
          const newIndex = Math.round(newScrollLeft / width);
          setActiveIndex(Math.max(0, Math.min(newIndex, services.length - 1)));
        }
      }, 300);
    }
  };

  // Auto-scroll prevention for touch devices
  useEffect(() => {
    const slider = sliderRef.current;
    const preventScroll = (e) => e.preventDefault();

    if (slider) {
      slider.addEventListener('touchmove', preventScroll, { passive: false });
      return () => slider.removeEventListener('touchmove', preventScroll);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="home-section">
        <Header />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} className="homepage-column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="homepage-head mt-5">
                  BERTHOLD REAL ESTATE CONSULTING
                </h1>
                <p className="homepage-subhead">
                  Invest in Excellence — Prime Real Estate & Exclusive Opportunities in Vienna, Austria
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="real-estate-consulting-section mt-5">
        <Container fluid className="px-0">
          <Row className="align-items-stretch g-0 flex-column-reverse flex-md-row">
            {/* Content Column */}
            <Col md={9} className="bg-primary-brown p-4 p-lg-5 d-flex flex-column order-2 order-md-1">
              <motion.div
                data-aos="fade-right"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <h2 className="consulting-head fw-bold">
                  BERTHOLD REAL ESTATE CONSULTING
                </h2>
                <hr className="head-line" />
                <h3 className="consulting-subhead">
                  Your trusted partner in Vienna's real estate market.
                </h3>
                <p className="consulting-para">
                  At Berthold Real Estate Consulting, we combine expertise, integrity, and a personalized
                  approach to guide you through Vienna's dynamic property market. Founded by Ekaterina
                  Berthold and built on nearly a decade of experience, our firm is dedicated to understanding
                  each client's unique needs and delivering tailored solutions with the highest level of
                  professionalism.
                </p>
                <a href="/about" className="read-more text-decoration-none">
                  Read more →
                </a>
              </motion.div>
            </Col>

            {/* Image Column */}
            <Col md={3} className="order-1 order-sm-2 order-md-2">
              <picture>
                <source media="(min-width: 768px)" srcSet={Street} />
                <source srcSet={streetimgResponsive} />
                <motion.img
                  src={Street}
                  alt="Vienna street scene"
                  className="img-fluid w-100 h-md-100 object-fit-cover"
                  data-aos="zoom-in"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </picture>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Services Highlights Section */}
      <section className="restuarant-section mt-5">
        <Container fluid className="px-0">
          <Row className="align-items-stretch g-0 flex-column-reverse flex-md-row">
            {/* Content Column */}
            <Col md={6} className="bg-primary-brown p-3  d-flex flex-column">
              <ul className="list-unstyled mb-4 mb-md-0">
                <li className="mb-3 restaurant-para">
                  Personal support from the initial inquiry to the contract signing
                </li>
                <li className="mb-3 restaurant-para">
                  Short marketing period for sellers and landlords
                </li>
                <li className="mb-3 restaurant-para">
                  Professional consultation on property acquisition, leasing, real estate development, and valuation
                </li>
                <li className="mb-3 restaurant-para">
                  Sale and rental of historic and newly built apartments, commercial properties,
                  penthouse developments, new construction projects, single-family and multi-family
                  homes, plots of land, and investment properties in Vienna
                </li>
              </ul>
              <div className="coffee-container mt-auto px-4">
                <motion.img
                  src={Coffee}
                  alt="Coffee meeting"
                  className="img-fluid"
                  data-aos="zoom-in"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </div>
            </Col>

            {/* Image Column */}
            <Col md={6} className="order-1 order-sm-2">
              <picture>
                <source media="(min-width: 768px)" srcSet={Street3} />
                <source srcSet={street3imgResponsive} />
                <motion.img
                  src={Street3}
                  alt="Vienna buildings"
                  className="img-fluid vienna-building w-100 h-md-100 object-fit-cover"
                  data-aos="zoom-in"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </picture>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-container py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col xs={12}>
              <h3 className="our-services fw-bold">Our Service </h3>
              <h4 className="services-text">"Your perfect place is here"</h4>
            </Col>
          </Row>

          {/* Desktop View - Grid Layout */}
          <Row className="d-none d-md-flex building-container justify-content-evenly">
            {services.map((service) => (
              <Col key={service.id} lg={3} md={6} className="building-card">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="h-100"
                >
                  <div className="position-relative overflow-hidden rounded h-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid w-100"
                      loading="lazy"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle w-100 px-3 text-center">
                      <h3
                        className="text-white mb-3 fs-4 fw-bold"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <a
                      href={`/services#${service.id}`}
                      className="position-absolute bottom-0 end-0 text-decoration-none p-3"
                    >
                      <span className="text-warning ">Read more</span>
                    </a>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Mobile View - Slider */}
          <div className="mobile-slider-container d-md-none position-relative">
            <button
              className="arrow left position-absolute start-0 top-50 translate-middle-y bg-dark bg-opacity-50 border-0 text-white z-2"
              onClick={() => scrollToSlide('left')}
              aria-label="Previous service"
              disabled={activeIndex === 0}
            >
              ‹
            </button>

            <div
              className="mobile-slider d-flex overflow-hidden"
              ref={sliderRef}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="slide flex-shrink-0 w-100 px-2"
                  aria-hidden={index !== activeIndex}
                >
                  <div className="position-relative rounded overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid w-100"
                      loading={index > 0 ? "lazy" : "eager"}
                    />
                    <div className="overlay position-absolute top-50 start-50 translate-middle w-100 px-3 text-center">
                      <h3 className="text-white fw-bold">{service.title}</h3>
                      <a
                        href={`/services#${service.id}`}
                        className="text-warning fw-bold text-decoration-none"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="arrow right position-absolute end-0 top-50 translate-middle-y bg-dark bg-opacity-50 border-0 text-white z-2"
              onClick={() => scrollToSlide('right')}
              aria-label="Next service"
              disabled={activeIndex === services.length - 1}
            >
              ›
            </button>
          </div>
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default HomePage;