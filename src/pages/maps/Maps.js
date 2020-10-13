import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// styles
import useStyles from "./styles";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(-37.813179),
        lng: parseFloat(144.950259),
      }}
    >
      <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
    </GoogleMap>
  )),
);

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      {/* <BasicMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8mzJXPad-RJbAandipO8DcBxN2EsRn7c&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      /> */}
      <iframe alt="jugaad" title="slum-maps-lifesaver" src="https://www.google.com/maps/d/u/0/embed?mid=16DMGkuQd_n0ULdZR-zcyL6T1bdZKMsPi" width="100%" height="100%"></iframe>
    </div>
  );
}
