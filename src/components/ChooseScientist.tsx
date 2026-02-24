import { useState } from "react";

export default function ChooseScientist() {
  const [result, setResult] = useState<Scientist[]>([]);

  type Scientist = {
    name: string;
    surname: string;
    born: number;
    dead: number;
    id: number;
  };
  const scientists: Scientist[] = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
  ];

  function scientistsBornBefore19() {
    const data = scientists.filter(
      (scientist) => scientist.born >= 1801 && scientist.born < 1901,
    );
    setResult(data);
  }

  function sortByName() {
    const data = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
    setResult(data);
  }

  function sortByAge() {
    const data = [...scientists].sort(
      (a, b) => b.dead - b.born - (a.dead - a.born),
    );
    setResult(data);
  }

  function latestBorn() {
    const data = [...scientists].sort((a, b) => b.born - a.born);
    setResult([data[0]]);
  }

  function einsteinAge() {
    const data = scientists.find(
      (s) => s.name === "Albert" && s.surname === "Einstein",
    );

    if (!data) return;

    setResult([data]);
  }

  function surnameC() {
    const data = scientists.filter((scientist) =>
      scientist.surname.startsWith("C"),
    );
    setResult(data);
  }

  function surnameA() {
    const data = scientists.filter(
      (scientist) => !scientist.name.startsWith("A"),
    );
    setResult(data);
  }

  function lifeStats() {
    const data = [...scientists].sort(
      (a, b) => b.dead - b.born - (a.dead - a.born),
    );
    setResult([data[0], data[data.length - 1]]);
  }

  function sameLetters() {
    const data = scientists.filter(
      (scientist) => scientist.name[0] === scientist.surname[0],
    );
    setResult(data);
  }

  return (
    <>
      <div className="cards-wrapper">
        {result.map((scientist) => (
          <div key={scientist.id} className="card">
            {scientist.name} {scientist.surname}
            {scientist.born} - {scientist.dead}
          </div>
        ))}
      </div>

      <button onClick={scientistsBornBefore19}>
        Які вчені народилися в 19 ст.
      </button>
      <button onClick={sortByName}>Відсортувати вчених за алфавітом</button>
      <button onClick={sortByAge}>
        Відсортувати вчених за кількістю прожитих років
      </button>
      <button onClick={latestBorn}>
        Знайти вченого, який народився найпізніше
      </button>
      <button onClick={einsteinAge}>
        Знайти рік народження Albert Einshtein
      </button>
      <button onClick={surnameC}>
        Знайти вчених, прізвища яких починаються на на літеру “С”{" "}
      </button>
      <button onClick={surnameA}>
        Видалити всіх вчених, ім’я яких починається на “А”
      </button>
      <button onClick={lifeStats}>
        Знайти вченого, який прожив найдовше і вченого, який прожив найменше
      </button>
      <button onClick={sameLetters}>
        Знайти вчених, в яких співпадають перші літери імені і прізвища
      </button>
    </>
  );
}
