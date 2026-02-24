import { useState } from "react";

export default function Slider() {
  const [current, setCurrent] = useState<number>(0);

  const students: string[] = ['A', 'B', 'C', 'D'];

  function previousStudent() {
    setCurrent((prev) => prev === 0 ? prev + 3 : prev - 1);
  }

  function nextStudent() {
    setCurrent((prev) => students.length -1 == prev? prev -3 : prev + 1);
  }

  return (
    <>
      <div className="flex">
        <div className="arrow-container">
          <div className="arrow upper-left" onClick={previousStudent}></div>
          <div className="arrow lower-left" onClick={previousStudent}></div>
        </div>
        <div>
          <h2>Наша команда</h2>
          <p>{students[current]}</p>
        </div>
        <div className="arrow-container">
          <div className="arrow upper-right" onClick={nextStudent}></div>
          <div className="arrow lower-right" onClick={nextStudent}></div>
        </div>
      </div>
    </>
  );
}
