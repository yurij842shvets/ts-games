import AgeCounter from "./components/AgeCount";
import GuessNumber from "./components/GuessNumber";
import Calculator from "./components/Calculator";
import RockPaperScissors from "./components/RockPaperScissors";
import BiggestNumber from "./components/BiggestNumber";
import TimeCalculator from "./components/TimeCalculator";
import Slider from "./components/Slider";
import ChooseScientist from "./components/Scientists/ChooseScientist";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AgeCounter />
      <GuessNumber />
      <RockPaperScissors />
      <Calculator />
      <TimeCalculator />
      <BiggestNumber />
      <Slider />
      <ChooseScientist />
      <Footer/>
      <Modal/>
    </>
  );
}

export default App;
