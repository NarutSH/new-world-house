import React, { useRef } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const GMap = () => {
  const mapRef = useRef(null);
  const style = {
    // position: "relative",
    width: "100%",
    height: "100%",
    // minHeight: "400px",
    // maxWidth: "100%",
  };

  const center = {
    lat: 13.725917,
    lng: 100.642614,
  };

  return (
    <Map
      ref={mapRef}
      google={window.google}
      zoom={14}
      style={style}
      initialCenter={center}
    >
      <Marker
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={center}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAy2Gz_HCETaA2dGTesXKy0zA1SkZao86g",
})(GMap);
