import GoogleMaps from "simple-react-google-maps";
import React from "react";

export default props => {
  return (
    <GoogleMaps
      apiKey= GOOGLE_API_KEY
      style={{ height: "100%", width: "100%" }}
      zoom={12}
      center={{ lat: props.lat, lng: props.lon }}
      markers={{ lat: props.lat, lng: props.lon }}
    />
  );
};
