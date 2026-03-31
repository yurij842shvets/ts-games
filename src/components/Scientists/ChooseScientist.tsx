import { useState } from "react";
import {
  scientistsBornBefore19,
  sortByName,
  sortByAge,
  latestBorn,
  einsteinAge,
  surnameC,
  surnameA,
  lifeStats,
  sameLetters,
} from "./ScientistsFunctions";
import ScientistCard from "./ScientistCard";
import ButtonData from "./ButtonData/ScientistsButtonData";
import type { Scientist } from "./ScientistsType";
import { scientists } from "./ScientistsData";

export default function ChooseScientist() {
  const [result, setResult] = useState<Scientist[]>([]);

  return (
    <>
      <div className="cards-wrapper">
        {result.map((scientist) => (
          <ScientistCard key={scientist.id} scientist={scientist} />
        ))}
      </div>

      <div className="buttons-wrapper">
        <ButtonData<Scientist[]>
          text="Вчені 19 століття"
          classNameButton="btn"
          action={() => scientistsBornBefore19(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Сортувати за алфавітом"
          classNameButton="btn"
          action={() => sortByName(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Сортувати за роками життя"
          classNameButton="btn"
          action={() => sortByAge(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Найпізніше народження"
          classNameButton="btn"
          action={() => latestBorn(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Albert Einstein"
          classNameButton="btn"
          action={() =>
            einsteinAge(scientists) ? [einsteinAge(scientists)!] : []
          }
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Прізвище на C"
          classNameButton="btn"
          action={() => surnameC(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Видалити імена на A"
          classNameButton="btn"
          action={() => surnameA(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Найдовше / найменше життя"
          classNameButton="btn"
          action={() => lifeStats(scientists)}
          setData={setResult}
        />

        <ButtonData<Scientist[]>
          text="Однакові перші літери"
          classNameButton="btn"
          action={() => sameLetters(scientists)}
          setData={setResult}
        />
      </div>
    </>
  );
}
