import type { Scientist } from "./ScientistsType";

export function scientistsBornBefore19(data: Scientist[]) {
  return data.filter((scientist) => scientist.born >= 1801 && scientist.born < 1901);
}

export function sortByName(data: Scientist[]) {
  return [...data].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByAge(data: Scientist[]) {
  return [...data].sort((a, b) => b.dead - b.born - (a.dead - a.born));
}

export function latestBorn(data: Scientist[]) {
  return [...data].sort((a, b) => b.born - a.born);
}

export function einsteinAge(data: Scientist[]) {
  return data.find((s) => s.name === "Albert" && s.surname === "Einstein");

  if (!data) return;
}

export function surnameC(data: Scientist[]) {
  return data.filter((scientist) => scientist.surname.startsWith("C"));
}

export function surnameA(data: Scientist[]) {
  return data.filter((scientist) => !scientist.name.startsWith("A"));
}

export function lifeStats(data: Scientist[]) {
  return [...data].sort((a, b) => b.dead - b.born - (a.dead - a.born));
}

export function sameLetters(data: Scientist[]) {
  return data.filter((scientist) => scientist.name[0] === scientist.surname[0]);
}
