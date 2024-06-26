import { useState, useEffect } from "react";
import { getWeather } from "../../api/api";
import { WeatherInfoComponent } from "../WeatherInfo";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather();
        setWeather(weatherData);
        setError(null);
      } catch (err) {
        setError("Error fetching weather data");
        setWeather(null);
      }
    };

    fetchWeather();
  }, []);

  const getTime = (time) => {
    const [date, timePart] = time.split(" ");
    return timePart;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-10 p-4 bg-slate-700 shadow-lg rounded-lg text-slate-300">
      {error && <div className="text-red-500">{error}</div>}
      {weather && (
        <>
          <div className="flex flex-row justify-between items-center w-full mb-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{`${weather.current.temp_c}°C`}</span>
            </div>
            <img
              className="w-24 h-24"
              src={weather.current.condition.icon}
              alt="weather icon"
            />
          </div>

          <div className="text-2xl font-bold capitalize mb-4">
            {`${weather.location.name}`}
          </div>

          <div className="flex flex-wrap justify-evenly items-center w-full">
            <WeatherInfoComponent
              name="sunset"
              value={getTime(weather.location.localtime)}
            />
            <WeatherInfoComponent
              name="humidity"
              value={`${weather.current.humidity}%`}
            />
            <WeatherInfoComponent
              name="wind"
              value={`${weather.current.wind_kph} kph`}
            />
            <WeatherInfoComponent
              name="pressure"
              value={`${weather.current.pressure_mb} mb`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
