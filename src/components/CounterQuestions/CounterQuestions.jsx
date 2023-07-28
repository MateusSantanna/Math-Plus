import { useEffect } from "react";
import { CenterTime, CircleContainer, CounterTime, Pointer } from "./style";
function CounterQuestions({
  counterQuestions,
  setCounterQuestions,
  chances,
  setChances,
  resultsGame,
  setResultsGame,
}) {
  useEffect(() => {
    let interval;
    if (counterQuestions > 0) {
      interval = setInterval(() => {
        setCounterQuestions((counter) => counter - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counterQuestions, setCounterQuestions]);

  useEffect(() => {
    if (counterQuestions === 0) {
      setResultsGame("Tempo Esgotado");
      setChances((chances) => chances - 1);

      setCounterQuestions(10);
    }
  }, [setResultsGame, setChances, counterQuestions, setCounterQuestions]);

  return (
    <CenterTime>
      <CircleContainer isCritical={counterQuestions <= 4}>
        <Pointer />
        <CounterTime isCritical={counterQuestions <= 4}>
          {counterQuestions}
        </CounterTime>
      </CircleContainer>
    </CenterTime>
  );
}

export default CounterQuestions;
