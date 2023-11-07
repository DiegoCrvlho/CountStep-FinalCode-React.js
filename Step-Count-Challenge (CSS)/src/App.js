import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  function countStepPlus() {
    setStep((s) => s + 1);
  }

  function countStepMinus() {
    setStep((s) => s - 1);
  }

  function countButtonPlus() {
    setCount((s) => s + step);
  }

  function countButtonMinus() {
    setCount((s) => s - step);
  }

  function resetButton() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("November 3 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        <input
          className="steps"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        ></input>
        <span>{step}</span>
      </div>
      <div className="count">
        <button className="btnCountStep" onClick={countButtonMinus}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        ></input>
        <button className="btnCountStep" onClick={countButtonPlus}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 0 ? (
        <div>
          <button className="btnReset" onClick={resetButton}>
            RESET
          </button>
        </div>
      ) : null}
    </div>
  );
}
