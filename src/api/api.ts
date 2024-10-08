import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
const baseUrl = "https://api.weatherapi.com/v1/current.json";

export const getWeather = async () => {
  const city = "Belo Horizonte";
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: apiKey,
        q: city,
        aqi: "no",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
