import Header from "./components/Header";
import Personal from "./components/Personal";
import ISSPosition from "./components/ISSPosition";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import IPerson from "./types/IssPerson";
import ICoordinates from './types/IntCoord'

function App() {
  const [timer, setTimer] = useState<number>(5);
  const [responce, setResponce] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<ICoordinates>({longitude: null, latitude: null});
  const [personal, setPersonal] = useState<IPerson[]>([{name: null, craft: null}]);

  useEffect(() => {
    const getCord = async () => {
      const responce = await axios.get(
        `http://api.open-notify.org/iss-now.json`
      );
      setCoordinates(responce.data.iss_position);
      const personalList = await axios.get(
        "http://api.open-notify.org/astros.json"
      );
      setPersonal(personalList.data.people);
    };
    getCord();
    setResponce(false);
  }, [responce]);

  useEffect(() => {
    const interval = setInterval(() => {
      let time = timer;
      setTimer(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (timer < 1) {
    setTimer(5);
    setResponce(true);
    axios
      .get(`http://api.open-notify.org/iss-now.json`)
      .then((res) => setCoordinates(res.data));
  }

  const pers = useMemo(() => {
    return (
      <Personal people={personal} />
    )
  }, [personal])

  return (
    <div className="App">
      <Header
        long={coordinates.longitude}
        lang={coordinates.latitude}
        sec={timer}
      />
      <div id="app_field">
        {pers}
        <ISSPosition long={coordinates.longitude} lang={coordinates.latitude} />
      </div>
    </div>
  );
}

export default App;
