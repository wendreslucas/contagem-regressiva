export type WeatherInfoIconTypes =
  | "sunset"
  | "sunrise"
  | "humidity"
  | "wind"
  | "pressure";

export const WeatherInfoIcons: Record<WeatherInfoIconTypes, string> = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};
