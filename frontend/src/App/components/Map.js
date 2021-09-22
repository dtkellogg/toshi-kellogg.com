import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as MapboxGl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

MapboxGl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;  // eslint-disable-next-line import/no-webpack-loader-syntax

const { REACT_APP_MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLES } = process.env;


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 38.0858,
    longitude: -122.018,
    width: "100%",
    height: "100%",
    zoom: 8.3,
    display: "block",
  });

  // const onLoaded = (map) => {
  //   map.resize();
  // };

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle={REACT_APP_MAPBOX_STYLES}
        onViewportChange={(viewport) => setViewport(viewport)}
        scrollZoom={true}
        userInteractionEnabled={true}
        // onStyleLoad={(map) => onLoaded(map)}
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