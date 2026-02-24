import { useState } from "react";

export default function RockPaperScissors() {
  const choices: string[] = ["камінь", "ножиці", "папір"];

  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [showComputerChoice, setShowComputerChoice] = useState<string>("");

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getWinner(player: string, computer: string) {
    if (player === computer) return "нічия";

    if (
      (player === "камінь" && computer === "ножиці") ||
      (player === "ножиці" && computer === "папір") ||
      (player === "папір" && computer === "камінь")
    ) {
      setPlayerScore((count) => count + 1);
      return "ви перемогли!";
    } else {
      setComputerScore((count) => count + 1);
      return "ви програли";
    }
  }

  function startGame(choice: string) {
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setShowComputerChoice(computer);
    setComputerChoice("");
    const text = getWinner(playerChoice, showComputerChoice);
    setResult(text);
  }

  function revealComputerChoice() {
    setComputerChoice(showComputerChoice);
  }

  return (
    <>
      <h2>Камінь - ножиці - папір</h2>

      {choices.map((choice) => (
        <button key={choice} onClick={() => startGame(choice)}>
          {choice}
        </button>
      ))}
      {playerChoice && !computerChoice && (
        <button onClick={revealComputerChoice}>
          Показати вибір комп'ютера
        </button>
      )}
      {computerChoice && (
        <>
          <p>Комп'ютер обрав: {computerChoice}</p>
        </>
      )}
      <p>{result}</p>
      <button>Варіант комп'ютера</button>
      <p>Рахунок:</p>
      <p>Комп'ютер - {computerScore}</p>
      <p>Ви - {playerScore}</p>
    </>
  );
}
