import React from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import * as d3 from 'd3';
import styled from 'styled-components';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoia2luZ3VzaGEiLCJhIjoiY2p2cXRhb2UzMGMwdDQ0bXNtMHBlZmRnNyJ9.XdnY_XFvbeYE21xu2X3UFQ';

// Viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

// DeckGL react component
class Map extends React.Component {
  state = { airplanes: [] };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await d3
      .json('https://opensky-network.org/api/states/all')
      .then(({ states }) =>
        this.setState({
          airplanes: states.map(d => ({
            callsign: d[1],
            longitude: d[5],
            latitude: d[6],
            velocity: d[9],
            altitude: d[13]
          }))
        })
      );
    setTimeout(this.fetchData, 10 * 1000);
  };

  render() {
    const layers = [
      new ScatterplotLayer({
        id: 'scatterplot-airplanes',
        data: this.state.airplanes,
        pickable: true,
        opacity: 0.8,
        radiusMinPixels: 5,
        radiusMaxPixels: 100,
        getPosition: d => [d.longitude, d.latitude],
        getColor: d => [255, 140, 0],
        getRadius: d => 2
      })
    ];

    console.log(this.state.airplanes);

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map;
