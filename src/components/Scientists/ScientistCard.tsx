import type { Scientist } from "./ScientistsType";

type Props = {
  scientist: Scientist;
};

export default function ScientistCard({ scientist }: Props) {
  return (
    <div className="cards-wrapper">
      <div className="card">
        {scientist.name} - {scientist.surname}
        {scientist.born} - {scientist.dead}
      </div>
    </div>
  );
}
