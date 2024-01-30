import React from "react";
import UseStateHook from "./components/useState/useStateHook";
import UseEffHook from "./components/useEffect/UseEffHook";

function App() {
  return (
    <div className="container mx-auto w-full h-screen font-mono text-xl">
      <UseStateHook />
      <UseEffHook />
    </div>
  );
}

export default App;
