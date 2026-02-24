import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  function calculate() {
    if (operator == "+") {
      setResult(num1 + num2);
    } else if (operator == "/") {
      if (num2 === 0) {
        setResult("Не можна ділити на 0");
      } else {
        setResult(num1 / num2);
      }
    } else if (operator == "*") {
      setResult(num1 * num2);
    } else if (operator == "-") {
      setResult(num1 - num2);
    }
  }

  return (
    <>
      <h2>Калькулятор</h2>

      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />

      <button onClick={() => setOperator("+")}>+</button>
      <button onClick={() => setOperator("-")}>-</button>
      <button onClick={() => setOperator("*")}>*</button>
      <button onClick={() => setOperator("/")}>/</button>

      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />

      <button onClick={calculate}>=</button>

      <input type="text" value={result} readOnly />
    </>
  );
}
