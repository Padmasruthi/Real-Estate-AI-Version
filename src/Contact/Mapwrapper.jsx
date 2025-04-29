// MapWrapper.jsx
import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MapSection from "../Contact/Mapsection";

const libraries = ["places"]; // optional, include only what you need

function MapWrapper() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDFhBy3lTCXkr8XALKfolLhSaAKoOsfP0A", // replace with your actual key
    libraries,
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return <MapSection />;
}

export default MapWrapper;
