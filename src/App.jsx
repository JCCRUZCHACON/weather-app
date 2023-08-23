import { useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";
import { useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  
  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    //console.log({lat,lon});
    const APY_KEY = "3e5f7885ea1126c9c44006fc133504cc";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}`;
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);


  return (
    <div className="app">
      
      {weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loading />}
      
    </div>
  );
}

export default App;
