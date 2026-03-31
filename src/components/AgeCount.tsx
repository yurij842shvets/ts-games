import { useState } from "react";
import InputData from "./InputData/InputData";

export default function AgeCounter() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState('')

  function calc(year: number) {
    ( year % 4 === 0? setResult('Ви народилися у високосний рік'): setResult('Ви народилися у невисокосний рік'))
  }

  return (
    <>
      <h2>Перевір в який рік ти народився</h2>
      <InputData classNameInput="class_style" type="number" setData={setInputValue}/>
      <button onClick={() => calc(inputValue)}>submit</button>
      <p>{result}</p>
    </>
  );
}
