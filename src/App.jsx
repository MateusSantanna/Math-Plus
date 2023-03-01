import { useState } from "react";
import Game from "./Pages/Game/Game";
import { Home } from "./Pages/Home/Home";

function App() {
  const [select, setSelect] = useState(false);
  const [begin, setBegin] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [counter, setCounter] = useState(3);
  const [counterQuestions, setCounterQuestions] = useState(10);
  const [chances, setChances] = useState(3);

  return begin === true ? (
    <Game
      chances={chances}
      setChances={setChances}
      difficulty={difficulty}
      setDifficulty={setDifficulty}
      setBegin={setBegin}
      counter={counter}
      setCounter={setCounter}
      counterQuestions={counterQuestions}
      setCounterQuestions={setCounterQuestions}
      setSelect={setSelect}
    />
  ) : (
    <Home
      select={select}
      setSelect={setSelect}
      setDifficulty={setDifficulty}
      setBegin={setBegin}
    />
  );
}

export default App;
