import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

const App = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-mono">
      <h1 className="text-4xl font-bold mb-8">
        Contagem Regressiva para 20 de Setembro
      </h1>
      <div className="flex space-x-4 text-2xl">
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-8 rounded-lg text-5xl">
            {timeRemaining.days}
          </span>
          <span>dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-8 rounded-lg text-5xl">
            {timeRemaining.hours}
          </span>
          <span>horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-8 rounded-lg text-5xl">
            {timeRemaining.minutes}
          </span>
          <span>minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 p-8 rounded-lg text-5xl">
            {timeRemaining.seconds}
          </span>
          <span>segundos</span>
        </div>
      </div>
    </div>
  );
};

export default App;
