import { useState, useEffect, useCallback } from "react";
import { differenceInSeconds } from "date-fns";

const CountdownTimer = () => {
  const calculateTimeRemaining = useCallback(() => {
    const targetDate = new Date("2025-02-28T00:00:00");
    const now = new Date();
    const secondsRemaining = Math.max(differenceInSeconds(targetDate, now), 0);

    const days = Math.floor(secondsRemaining / (60 * 60 * 24));
    const hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
    const seconds = secondsRemaining % 60;

    return { days, hours, minutes, seconds };
  }, []);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);

  interface TimeBlock {
    value: number;
    label: string;
  }

  const TimeBlock = ({ value, label }: TimeBlock) => (
    <div className="flex flex-col items-center">
      <span className="bg-gray-700 p-4 md:p-8 rounded-lg text-3xl md:text-5xl">
        {value}
      </span>
      <span className="text-xs md:text-base">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col justify-center text-gray-100 text-center font-mono pb-10 pt-2">
      <h1 className="text-4xl font-bold mb-4">28 de Fevereiro</h1>
      <div className="flex space-x-4 justify-center">
        <TimeBlock value={timeRemaining.days} label="dias" />
        <TimeBlock value={timeRemaining.hours} label="horas" />
        <TimeBlock value={timeRemaining.minutes} label="minutos" />
        <TimeBlock value={timeRemaining.seconds} label="segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
