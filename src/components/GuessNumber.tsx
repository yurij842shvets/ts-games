import { useState } from "react";

export default function GuessNumber() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [randomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);

  function checkNumber() {
    if (number === randomNumber) {
      setMessage("Вітаю, ви вгадали число!");
    } else if (number > randomNumber) {
      setMessage("Менше");
    } else {
      setMessage("Більше");
    }
  }

  return (
    <>
      <h2>Вгадай число, яке загадав комп’ютер</h2>
      <input type="text" onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={checkNumber}>submit</button>
      <p>{message}</p>
    </>
  );
}
