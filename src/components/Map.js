import React from 'react';
import { getAirportByCode } from '../data';

const Map = ({ routes }) => {

  let legs = routes.map(route => {
    const sourceAirport = getAirportByCode(route.src);
    const destinationAirport = getAirportByCode(route.dest);
    const path = `M${sourceAirport.long} ${sourceAirport.lat} L ${destinationAirport.long} ${destinationAirport.lat}`;

    return (
      <g key={route.airline + sourceAirport.name + destinationAirport.name}>
        <circle
          className="source"
          cx={sourceAirport.long}
          cy={sourceAirport.lat}
        >
          <title>{sourceAirport.name}</title>
        </circle>
        <circle
          className="destination"
          cx={destinationAirport.long}
          cy={destinationAirport.lat}
        >
          <title>{destinationAirport.name}</title>
        </circle>
        <path d={path} />
      </g>
    )
  })

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image
          xlinkHref="equirectangular_world.jpg"
          href="equirectangular_world.jpg"
          x="-180"
          y="-90"
          height="100%"
          width="100%"
          transform="scale(1 -1)"
        />
        {legs}
      </g>
    </svg>
  )
}

export default Map;