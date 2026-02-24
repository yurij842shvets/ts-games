import { useState } from "react";

export default function TimeCalculator() {
  const [number, setNumber] = useState<number>(0);

  function convertTime(time: number) {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${days}дн. ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return (
    <>
      <h2>Калькулятор часу</h2>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>{convertTime(number)}</p>
    </>
  );
}
