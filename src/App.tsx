import React from "react";
import HamsterWheel from "./components/HamsterWheel";
import CountdownTimer from "./components/Clock";

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900  gap-4">
      <CountdownTimer />
      <HamsterWheel />
    </main>
  );
};

export default App;
