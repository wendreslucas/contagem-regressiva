import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date("2024-09-20T00:00:00");
    const now = new Date();
    const secondsRemaining = differenceInSeconds(targetDate, now);
    const days = Math.floor(secondsRemaining / (60 * 60 * 24));
    const hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
    const seconds = secondsRemaining % 60;

    return { days, hours, minutes, seconds };
  }
  return (
    <div className="flex flex-col justify-center text-gray-100 text-center font-mono pb-10 pt-2">
      <h1 className="text-4xl font-bold mb-4 ">20 de Setembro</h1>
      <div className="flex space-x-4 justify-center">
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-4 md:p-8 rounded-lg text-3xl md:text-5xl">
            {timeRemaining.days}
          </span>
          <span className="text-xs md:text-base">dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-4 md:p-8 rounded-lg text-3xl md:text-5xl">
            {timeRemaining.hours}
          </span>
          <span className="text-xs md:text-base">horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-4 md:p-8 rounded-lg text-3xl md:text-5xl">
            {timeRemaining.minutes}
          </span>
          <span className="text-xs md:text-base">minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-4 md:p-8 rounded-lg text-3xl md:text-5xl">
            {timeRemaining.seconds}
          </span>
          <span className="text-xs md:text-base">segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
