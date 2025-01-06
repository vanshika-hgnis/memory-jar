import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1 className="h-1 text-red-700">Memory Jar</h1>
      </main>
    </>
  );
}

export default App;
