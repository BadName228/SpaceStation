import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { FaSpaceShuttle } from "react-icons/fa";
import React from "react";
import "../styles/mksPosition.css";

import ICoord from "../types/coordinates";

const Station: React.FC = ()  => {
  return (
    <div className="circle">
      <FaSpaceShuttle />
    </div>
  );
};

function ISSPosition({ long, lang }: ICoord): JSX.Element {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQjeq974aUXPJmmvbgEYsS2JoMIjK_GgI",
  });

  const render = React.useMemo(() => {
    return (
      <div id="ISSPosition">
        <h2>
          Примерное местоположение МКС на высоте 410км относительно поверхности
          планеты
        </h2>
        {!isLoaded ? <p>Loading...</p> : <Map long={long} lang={lang} />}
      </div>
    );
  }, [long]);

  return <>{render}</>;
}


function Map({ long, lang }: ICoord) {
  const position: {lat: number, lng: number} = {
    lat: Number(lang),
    lng: Number(long),
  };

  return (
    <GoogleMap zoom={6} center={position} mapContainerClassName="map-container">
      <Station />
    </GoogleMap>
  );
}

export default ISSPosition;