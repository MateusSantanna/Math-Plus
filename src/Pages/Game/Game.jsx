import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import CounterQuestions from "../../components/CounterQuestions/CounterQuestions";
import { CenterTime } from "../../components/CounterQuestions/style";
import InfoAnswers from "../../components/InfoAnswers/InfoAnswers";
import ModalLose from "../../components/ModalLose/ModalLose";
import NextQuestion from "../../components/NextQuestion/NextQuestion";
import Questions from "../../components/Questions/Questions";
import Results from "../../components/Results/Results";
import Score from "../../components/Score/Score";

function Game({
  difficulty,
  setBegin,
  counter,
  setCounter,
  counterQuestions,
  setCounterQuestions,
  setSelect,
  chances,
  setChances,
}) {
  let numbersInitial = [...Array(10).keys()];

  const [resultsGame, setResultsGame] = useState("");
  const [correct, setCorrect] = useState(0);
  const [numberOne, setNumberOne] = useState(
    numbersInitial[Math.floor(Math.random() * numbersInitial.length)]
  );
  const [numberTwo, setNumberTwo] = useState(
    numbersInitial[Math.floor(Math.random() * numbersInitial.length)]
  );
  const [numberThree, setNumberThree] = useState();
  const [questionAsk, setQuestionAsk] = useState(`${numberOne} + ${numberTwo}`);
  const [resultExpected, setResultExpected] = useState(numberOne + numberTwo);
  const [resultReceived, setResultReceived] = useState();
  const [numberFour, setNumberFour] = useState();
  const [numberFive, setNumberFive] = useState();
  const [operationOne, setOperationOne] = useState();
  const [operationTwo, setOperationTwo] = useState();

  if (["Fácil", "Normal", "Difícil"].includes(difficulty)) {
    return counter > 0 ? (
      <>
        <Counter
          counter={counter}
          setCounter={setCounter}
          difficulty={difficulty}
        />
      </>
    ) : (
      <>
        {resultsGame === "" ? (
          <Score correct={correct} chances={chances} />
        ) : (
          <>
            <Score correct={correct} chances={chances} />
            <Results
              resultsGame={resultsGame}
              chances={chances}
              setChances={setChances}
            />
          </>
        )}

        <>
          <InfoAnswers chances={chances} setChances={setChances} />
        </>

        {resultsGame === "" ? (
          <CenterTime>
            <CounterQuestions
              counterQuestions={counterQuestions}
              setCounterQuestions={setCounterQuestions}
              chances={chances}
              setChances={setChances}
              resultsGame={resultsGame}
              setResultsGame={setResultsGame}
            />
          </CenterTime>
        ) : null}

        {resultsGame === "" ? (
          <Questions
            difficulty={difficulty}
            numberOne={numberOne}
            setNumberOne={setNumberOne}
            numberTwo={numberTwo}
            setNumberTwo={setNumberTwo}
            numberThree={numberThree}
            setNumberThree={setNumberThree}
            setResultsGame={setResultsGame}
            chances={chances}
            setChances={setChances}
            correct={correct}
            setCorrect={setCorrect}
            resultExpected={resultExpected}
            setResultExpected={setResultExpected}
            resultReceived={resultReceived}
            setResultReceived={setResultReceived}
            questionAsk={questionAsk}
            setQuestionAsk={setQuestionAsk}
          />
        ) : (
          <NextQuestion
            setResultsGame={setResultsGame}
            difficulty={difficulty}
            correct={correct}
            chances={chances}
            resultExpected={resultExpected}
            setResultExpected={setResultExpected}
            resultReceived={resultReceived}
            setResultReceived={setResultReceived}
            questionAsk={questionAsk}
            setQuestionAsk={setQuestionAsk}
            numberOne={numberOne}
            setNumberOne={setNumberOne}
            numberTwo={numberTwo}
            setNumberTwo={setNumberTwo}
            numberThree={numberThree}
            setNumberThree={setNumberThree}
            numberFour={numberFour}
            setNumberFour={setNumberFour}
            numberFive={numberFive}
            setNumberFive={setNumberFive}
            operationOne={operationOne}
            setOperationOne={setOperationOne}
            operationTwo={operationTwo}
            setOperationTwo={setOperationTwo}
            setCounterQuestions={setCounterQuestions}
          />
        )}

        <ModalLose
          chances={chances}
          setChances={setChances}
          correct={correct}
          setSelect={setSelect}
          setBegin={setBegin}
          setCounter={setCounter}
          setCounterQuestions={setCounterQuestions}
        />
      </>
    );
  }
}

export default Game;
