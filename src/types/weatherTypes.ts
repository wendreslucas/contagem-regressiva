export type WeatherInfoIconTypes =
  | "sunset"
  | "sunrise"
  | "humidity"
  | "wind"
  | "pressure";

export const WeatherInfoIcons: Record<WeatherInfoIconTypes, string> = {
  sunset: "../../public/icons/temp.svg",
  sunrise: "../../public/icons/temp.svg",
  humidity: "../../public/icons/humidity.svg",
  wind: "../../public/icons/wind.svg",
  pressure: "../../public/icons/pressure.svg",
};
