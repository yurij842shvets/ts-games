import AgeCounter from "./components/AgeCount";
import GuessNumber from "./components/GuessNumber";
import Calculator from "./components/Calculator";
import RockPaperScissors from "./components/RockPaperScissors";
import BiggestNumber from "./components/BiggestNumber";
import TimeCalculator from "./components/TimeCalculator";
import Slider from "./components/Slider";
import ChooseScientist from "./components/ChooseScientist";
import "./App.css";

function App() {
  return (
    <>
      <AgeCounter></AgeCounter>
      <GuessNumber></GuessNumber>
      <RockPaperScissors></RockPaperScissors>
      <Calculator></Calculator>
      <TimeCalculator></TimeCalculator>
      <BiggestNumber></BiggestNumber>
      <Slider></Slider>
      <ChooseScientist></ChooseScientist>
    </>
  );
}

export default App;
