import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => ++prev);
  }

  function decrement() {
    setCount((prev) => --prev);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>{count}</div>
      <div className="card">
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
}
