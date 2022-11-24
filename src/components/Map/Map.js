import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import Marker from './Marker';
import ComponentMap from './ComponentMap';

const Map = ({ position }) => {

  if(!position) return <p>Loading</p>

  const center = {
    lat: Number(position.latitude),
    lng: Number(position.longitude)
  }

	const render = (status) => {
		return <h1>{status}</h1>;
	};

	return (
		<Wrapper apiKey={"AIzaSyDw-t_3CJGidMbznvgUGszFZFNmnrYdlOc"} render={render}>
			<ComponentMap center={center}>
				<Marker position={center} />
			</ComponentMap>
		</Wrapper>
	)
};

export default Map;

