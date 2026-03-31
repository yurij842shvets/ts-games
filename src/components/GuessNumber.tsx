import { useState } from "react";
import InputData from "./InputData/InputData";

export default function GuessNumber() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [randomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);

  function checkNumber() {
    switch (true) {
      case number === randomNumber:
        setMessage("Вітаю, ви вгадали число!");
        break;
      case number > randomNumber:
        setMessage("Менше");
        break;
      case number < randomNumber:
        setMessage("Більше");
        break;
      default:
        setMessage("");
    }
  }

  return (
    <>
      <h2>Вгадай число, яке загадав комп’ютер</h2>
      <InputData classNameInput="class_style" type="number" setData={setNumber} />
      <button onClick={checkNumber}>submit</button>
      <p>{message}</p>
    </>
  );
}
