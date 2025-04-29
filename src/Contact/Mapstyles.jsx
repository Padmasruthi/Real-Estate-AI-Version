const customMapStyle = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#EA5F04" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#D64A04" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];
  
  export default customMapStyle;
  