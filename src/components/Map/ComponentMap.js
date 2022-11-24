import React, { useEffect, useRef, useState } from "react";

const ComponentMap = ({center, children}) => {
	const ref = useRef(null);
	const [map, setMap] = useState();

	useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom: 3
      }));
    }
	}, [ref, map, center]);


	return (
    <>
      <div ref={ref} style={{width: '100%', height: '100%'}} />
      {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { map });
          }
      })}
    </> 
  )
}

export default ComponentMap;