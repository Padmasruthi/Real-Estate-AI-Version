import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import customMapStyle from "../Contact/Mapstyles"; // your custom style file
import "../Contact/contact.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 48.2206, // Vienna
  lng: 16.3738,
};

function MapSection() {
  const { isLoaded } = useJsApiLoader({
    id: "script-loader", // 🔁 Change this to match existing ID
    googleMapsApiKey: "AIzaSyDFhBy3lTCXkr8XALKfolLhSaAKoOsfP0A", // same key
    libraries: ["places"],
  });

  return (
    <section className="mapContainer">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={{
            styles: customMapStyle,
            disableDefaultUI: true,
          }}
        >
          {/* You can add markers or overlays here if needed */}
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}

      <div className="locationMarker">
        {/* Your SVG marker code remains the same */}
        <svg
          width="96"
          height="65"
          viewBox="0 0 96 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* ... SVG paths and text ... */}
        </svg>
      </div>
    </section>
  );
}

export default MapSection;
