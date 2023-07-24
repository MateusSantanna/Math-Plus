import { CounterTimeQuestion, TimeCritical } from "./style";

function CounterQuestions({
  counterQuestions,
  setCounterQuestions,
  chances,
  setChances,
  resultsGame,
  setResultsGame,
}) {
  function changeTimeGame() {
    if (counterQuestions > 0) {
      setCounterQuestions(counterQuestions - 1);
    }

    if (counterQuestions === 0) {
      setCounterQuestions(0);
      setResultsGame("Tempo Esgotado");
      setChances(chances - 1);
    }
  }

  resultsGame === "Resposta Correta" || resultsGame === "Resposta Errada"
    ? setCounterQuestions(10)
    : setTimeout(changeTimeGame, 1000);

  return counterQuestions > 4 ? (
    <>
      <CounterTimeQuestion>{counterQuestions}</CounterTimeQuestion>
    </>
  ) : (
    <>
      <TimeCritical>{counterQuestions} </TimeCritical>
    </>
  );
}

export default CounterQuestions;
