import { useState, useEffect } from "react";
import InputData from "./InputData/InputData";

export default function BiggestNumber() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [thirdNumber, setThirdNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  useEffect(() => {
    const max = Math.max(firstNumber, secondNumber, thirdNumber);
    setResult(`Найбільше число: ${max}`);
  }, [firstNumber, secondNumber, thirdNumber]);

  return (
    <>

      <InputData classNameInput="class_style" type="number" setData={setFirstNumber}/>

      <InputData classNameInput="class_style" type="number" setData={setSecondNumber}/>

      <InputData classNameInput="class_style" type="number" setData={setThirdNumber}/>


      <p>Найбільше число, яке ви ввели - {result}</p>
    </>
  );
}
