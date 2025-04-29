import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Navbar/Navbar";
import Footer from "../Components/Footer";
import '../Contact/contact.css';



// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// List of locations (latitude/longitude coordinates)
const locations = {
  "Tragshauer": [
    [48.2082, 16.3738], // Example coordinates - replace with actual ones
    // Add all other locations with their coordinates
  ],
  // "Bratis": [
  //   [48.2182, 16.3838], 
  // ]
};

const Contact = () => {
  // Vienna coordinates
  const position = [48.2082, 16.3738]; // Vienna coordinates
  
  return (
    <div className="contact-page">
      <Header />
      
      {/* Contact Us Heading */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
          <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="contactus-head text-center mt-5">
                CONTACT US
                </h1>
              </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
      <MapContainer 
        center={position} 
        zoom={11} 
        // style={{ height: "500px", width: "100%" }}
      >
        {/* Custom tile layer with orange-ish filter */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Add a semi-transparent overlay for orange tint */}
        <TileLayer
          url="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlQTVGMDAiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg=="
          attribution=""
        />

        {/* Main marker */}
        <Marker position={position}>
          <Popup>
            Berthold Real Estate Consulting <br /> Vienna, Austria
          </Popup>
        </Marker>

        {/* Add markers for all locations */}
        {Object.entries(locations).map(([group, coords]) => (
          coords.map((coord, index) => (
            <Marker key={`${group}-${index}`} position={coord}>
              <Popup>{group} Location {index + 1}</Popup>
            </Marker>
          ))
        ))}
      </MapContainer>
    </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center mb-4 form-head">Have a question?<br />We are glad to consult you!</h2>
              
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control type="text" placeholder="NAME" className="input-field" />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="PHONE" className="input-field"/>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      placeholder="MESSAGE" 
                      className="input-field message-field"
                    />
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  <Form.Check 
                    type="checkbox" 
                    label="I accept the terms for processing personal data." 
                    className="d-inline-block"
                  />
                </div>

                <div className="text-center mt-4">
                  <Button className="submit-btn">SUBMIT</Button>
                </div>
              </Form>

              <div className="contact-info text-center mt-5">
                <h6 className="fw-normal">e.berthold@cl-immogroup.at</h6>
                <p>+43 676 66 21 607</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;