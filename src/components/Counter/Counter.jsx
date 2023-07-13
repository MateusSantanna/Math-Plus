import { CounterTime } from "./style";

function Counter({ counter, setCounter, difficulty, createQuestion }) {
  function changeTime() {
    if (counter > 0) {
      setCounter(counter - 1);
      createQuestion();
    }

    if (counter === 1) {
      return setCounter(0);
    }
  }
  setTimeout(changeTime, 1000);

  return (
    <>
      <CounterTime>{counter}</CounterTime>
      <h1>Dificuldade Selecionada: {difficulty}</h1>
    </>
  );
}

export default Counter;
