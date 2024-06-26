import {
  WeatherInfoIconTypes,
  WeatherInfoIcons,
} from "../../types/weatherTypes";

interface WeatherInfoComponentProps {
  name: WeatherInfoIconTypes;
  value: string | number;
}

export const WeatherInfoComponent: React.FC<WeatherInfoComponentProps> = ({
  name,
  value,
}) => {
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
