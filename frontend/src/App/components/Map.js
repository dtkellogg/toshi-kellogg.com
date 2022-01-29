import React, { useState, lazy } from "react";
import { Marker } from "react-map-gl";

// mapbox
import * as MapboxGl from 'mapbox-gl'
lazy(() => import('mapbox-gl/dist/mapbox-gl.css'))

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

const ReactMapGL = lazy(() => import("react-map-gl"))

MapboxGl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line import/no-webpack-loader-syntax

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

  const { width } = useWindowDimensions()

  const onLoaded = (map) => {
    map.resize();
  };

  return (
    <figure className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle={REACT_APP_MAPBOX_STYLES}
        onViewportChange={(viewport) => setViewport(viewport)}
        scrollZoom={width > 950 && true}
        userInteractionEnabled={width > 950 && true}
        onStyleLoad={(map) => onLoaded(map)}
      >
        <Marker latitude={37.9158} longitude={-122.158}>
          <div className="map__marker--lafayette">Lafayette</div>
        </Marker>
        <Marker latitude={38.5682} longitude={-121.8017}>
          <div className="map__marker--davis">Davis</div>
        </Marker>
      </ReactMapGL>
    </figure>
  );
}