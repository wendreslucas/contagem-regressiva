import React from "react";
import HamsterWheel from "./components/HamsterWheel";
import CountdownTimer from "./components/Clock";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center">
        <CountdownTimer />
        <HamsterWheel />
      </div>
    </main>
  );
};

export default App;
