// import { CounterTimeQuestion, TimeCritical } from "./style";

// function CounterQuestions({
//   counterQuestions,
//   setCounterQuestions,
//   chances,
//   setChances,
//   resultsGame,
//   setResultsGame,
// }) {
//   function changeTimeGame() {
//     if (counterQuestions > 0) {
//       setCounterQuestions(counterQuestions - 1);
//     }

//     if (counterQuestions === 0) {
//       setCounterQuestions(0);
//       setResultsGame("Tempo Esgotado");
//       setChances(chances - 1);
//     }
//   }

//   resultsGame === "Resposta Correta" || resultsGame === "Resposta Errada"
//     ? setCounterQuestions(10)
//     : setTimeout(changeTimeGame, 1000);

//   return counterQuestions > 4 ? (
//     <>
//       <CounterTimeQuestion>{counterQuestions}</CounterTimeQuestion>
//     </>
//   ) : (
//     <>
//       <TimeCritical>{counterQuestions} </TimeCritical>
//     </>
//   );
// }

// export default CounterQuestions;

import { useState, useEffect } from "react";
import { CounterTimeQuestion, TimeCritical } from "./style";

function CounterQuestions({
  counterQuestions,
  setCounterQuestions,
  chances,
  setChances,
  resultsGame,
  setResultsGame,
}) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (counterQuestions > 0 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counterQuestions, timer]);

  useEffect(() => {
    if (timer === 0) {
      setResultsGame("Tempo Esgotado");
      setChances((prevChances) => prevChances - 1);

      setTimer(10);
    }
  }, [timer, setResultsGame, setChances]);

  return counterQuestions > 4 ? (
    <>
      <CounterTimeQuestion>{timer}</CounterTimeQuestion>
    </>
  ) : (
    <>
      <TimeCritical>{resultsGame}</TimeCritical>
    </>
  );
}

export default CounterQuestions;
