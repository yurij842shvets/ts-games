import { useState } from "react";
import InputData from "./InputData/InputData";
import ButtonData from "./ButtonData/ButtonData";

export default function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  function calculate() {
    switch (operator) {
      case "+":
        setResult(Math.round(num1 + num2));
        break;
      case "-":
        setResult(Math.round(num1 - num2));
        break;
      case "*":
        setResult(Math.round(num1 * num2));
        break;
      case "/":
        if (num2 === 0) {
          setResult("Не можна ділити на 0");
        } else {
          setResult(Math.round(num1 / num2));
        }
        break;
      default:
        setResult("");
    }
  }

  return (
    <>
      <h2>Калькулятор</h2>

      <InputData classNameInput="class_style" type="number" setData={setNum1} />


      <ButtonData classNameButton="button-style" setData={setOperator} operator="+" text="+"/>
      <ButtonData classNameButton="button-style" setData={setOperator} operator="-" text="-"/>
      <ButtonData classNameButton="button-style" setData={setOperator} operator="*" text="*"/>
      <ButtonData classNameButton="button-style" setData={setOperator} operator="/" text="/"/>

      <InputData classNameInput="class_style" type="number" setData={setNum2} />

      <button onClick={calculate}>=</button>

      <input type="text" value={result} readOnly />
    </>
  );
}
