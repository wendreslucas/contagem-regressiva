interface Props {
  name: string;
  value: string;
}

export const WeatherInfoComponent: React.FC<Props> = ({ name, value }) => {
  const WeatherInfoIcons = {
    sunset: "../../../public/icons/temp.svg",
    sunrise: "../../../public/icons/temp.svg",
    humidity: "../../../public/icons/humidity.svg",
    wind: "../../../public/icons/wind.svg",
    pressure: "../../../public/icons/pressure.svg",
  };

  return (
    <div className="flex flex-row justify-evenly items-center m-2">
      <img className="w-9 h-9" src={WeatherInfoIcons[name]} alt={name} />
      <div className="flex flex-col text-sm m-2">
        {value}
        <span className="text-xs capitalize">{name}</span>
      </div>
    </div>
  );
};
