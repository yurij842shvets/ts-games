import { useState, useEffect } from "react";

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
      <input
        type="number"
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setThirdNumber(Number(e.target.value))}
      />

      <p>Найбільше число, яке ви ввели - {result}</p>
    </>
  );
}
