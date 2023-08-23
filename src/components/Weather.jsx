import axios from "axios";
import { useState } from "react";


const Weather = ({ weatherInfo }) => {
  const [iscelsius, setIscelsius] = useState(true);
  console.log(weatherInfo);

  
  const KelvinToCelsius = (temKelvin) => {
    return (temKelvin - 273.15).toFixed(1);
  };

  const KelvinToFahrenheit = (temKelvin) => {
    return (((temKelvin - 273.15) * 9) / 5 + 32).toFixed(1);
  };

  const handleChangeUnitTemp = () => {
    setIscelsius(!iscelsius);
  };

  const resultTempConversion = iscelsius
    ? KelvinToCelsius(weatherInfo?.main.temp)
    : KelvinToFahrenheit(weatherInfo?.main.temp);

  return (
    <section className="text-center">

      <h2 className="font-extrabold text-2xl pb-4">
      {weatherInfo?.name}</h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* section superior */}
        <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2">{weatherInfo?.weather[0].description}</h4>
          <span className="text-4xl">
            {resultTempConversion}°{iscelsius ? "C" : "F"}
          </span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        {/* section inferior */}
        <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>

      <button
        onClick={handleChangeUnitTemp}
        className="mt-4 bg-white text-black rounded-2xl p-2"
      >
        {iscelsius ? "Cambiar a °F" : "Cambiar a °C"}
      </button>
    </section>
  );
};
export default Weather;
