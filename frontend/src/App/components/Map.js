import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.8858,
    longitude: -122.118,
    width: "60vw",
    height: "90vh",
    zoom: 9,
  });

  // console.log(`mapbox token: ${process.env.REACT_APP_MAPBOX_TOKEN}`);

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZHRrZWxsb2dnIiwiYSI6ImNrZWlzMW9jNDAwYW8yenBmcHM4azQ1NGUifQ.z29ERW4wAUvbgQkoa7By1A"
        }
        mapStyle={"mapbox://styles/dtkellogg/ckeisrodw1jfy19uqag1jvobo"}
        onViewportChange={(viewport) => setViewport(viewport)}
        scrollZoom={true}
        // zoomEnabled={false}
        // rotateEnabled={false}
        // zoomScroll={false}
        // touchZoomRotate={false}
        // dragRotate={false}
        // dragPan={false} // This disable moving around the map w 1 finger on mobile
        // doubleClickZoom={false}
        // drag={false}
        userInteractionEnabled={false}
        // showCompass={true}
      >
        <Marker latitude={37.8858} longitude={-122.118}>
          <div className="text-size-2">Lafayette</div>
          <button className="marker-btn">
            {/* <img src={logo} className="Night Market Icon" alt="logo" /> */}
          </button>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
