import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const { REACT_APP_MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLES } = process.env;



export default function Map() {
  
  const [viewport, setViewport] = React.useState({
    latitude: 38.0858,
    longitude: -122.018,
    width: "100%",
    height: "100%",
    zoom: 8.3,
    display: "block"
  });


  console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  console.log({ REACT_APP_MAPBOX_TOKEN });
  
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLES}
        onViewportChange={(viewport) => setViewport(viewport)}
        scrollZoom={true}
        userInteractionEnabled={true}
      >
        <Marker latitude={37.9158} longitude={-122.158}>
          <div className="text-size-3 map__marker--lafayette">Lafayette</div>
        </Marker>
        <Marker latitude={38.5682} longitude={-121.8017}>
          <div className="text-size-3 map__marker--lafayette">Davis</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}