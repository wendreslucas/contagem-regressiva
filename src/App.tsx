import React from "react";
import HamsterWheel from "./components/HamsterWheel";
import CountdownTimer from "./components/Clock";
import BackgroundScene from "./components/BackgroundScene";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundScene />
      <div className="z-10 max-w-7xl w-full flex flex-col justify-center items-center">
        <CountdownTimer />
        <HamsterWheel />
      </div>
    </main>
  );
};

export default App;
