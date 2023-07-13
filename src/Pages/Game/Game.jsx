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
  const [resultsGame, setResultsGame] = useState("");
  const [correct, setCorrect] = useState(0);
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [numberThree, setNumberThree] = useState();
  const [questionAsk, setQuestionAsk] = useState();
  const [resultExpected, setResultExpected] = useState();
  const [resultReceived, setResultReceived] = useState();
  const [operationOne, setOperationOne] = useState();
  const [operationTwo, setOperationTwo] = useState();

  let numbersEasy = [...Array(10).keys()];
  let operations = ["+", "-", "*", "/"];
  let numbersNormal = [...Array(20).keys()];
  let numbersHard = [...Array(100).keys()];

  function createQuestion() {
    setOperationOne(operations[Math.floor(Math.random() * operations.length)]);
    setOperationTwo(operations[Math.floor(Math.random() * operations.length)]);
    setResultsGame("");
    setCounterQuestions(10);
    setResultReceived("");

    if (difficulty === "Fácil") {
      setNumberOne(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
      setNumberTwo(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
      setNumberThree(
        numbersEasy[Math.floor(Math.random() * numbersEasy.length)]
      );

      if (operationOne === "+") {
        setResultExpected(numberOne + numberTwo);
        setQuestionAsk(`${numberOne} + ${numberTwo}`);
      }

      if (operationOne === "-") {
        setResultExpected(numberOne - numberTwo);
        setQuestionAsk(`${numberOne} - ${numberTwo}`);
      }

      if (operationOne === "*") {
        setResultExpected(numberOne * numberTwo);
        setQuestionAsk(`${numberOne} * ${numberTwo}`);
      }

      if (operationOne === "/") {
        setResultExpected(Math.floor(numberOne / (numberTwo + 1)));
        setQuestionAsk(`${numberOne} / ${numberTwo + 1}`);
      }

      // Ultrapassar os 20 Pontos
      if (operationOne === "+" && operationTwo === "+" && correct >= 20) {
        setResultExpected(numberOne + numberTwo + numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "-" && correct >= 20) {
        setResultExpected(numberOne + numberTwo - numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "*" && correct >= 20) {
        setResultExpected(numberOne + numberTwo * numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "/" && correct >= 20) {
        setResultExpected(
          Math.floor((numberOne + numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "-" && operationTwo === "+" && correct >= 20) {
        setResultExpected(numberOne - numberTwo + numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "-" && correct >= 20) {
        setResultExpected(numberOne - numberTwo - numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "*" && correct >= 20) {
        setResultExpected(numberOne - numberTwo * numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "/" && correct >= 20) {
        setResultExpected(
          Math.floor((numberOne - numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "*" && operationTwo === "+" && correct >= 20) {
        setResultExpected(numberOne * numberTwo + numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "-" && correct >= 20) {
        setResultExpected(numberOne * numberTwo - numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "*" && correct >= 20) {
        setResultExpected(numberOne * numberTwo * numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "/" && correct >= 20) {
        setResultExpected(
          Math.floor((numberOne * numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 20) {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 20) {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 20) {
        setResultExpected(
          Math.floor(
            numberOne / Math.floor((numberTwo + 1) * (numberThree + 1))
          )
        );
        setQuestionAsk(
          `${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 20) {
        setResultExpected(
          Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
        );
        setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
      }
    }

    if (difficulty === "Normal") {
      setNumberOne(
        numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
      );
      setNumberTwo(
        numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
      );
      setNumberThree(
        numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
      );

      if (operationOne === "+") {
        setResultExpected(numberOne + numberTwo);
        setQuestionAsk(`${numberOne} + ${numberTwo}`);
      }

      if (operationOne === "-") {
        setResultExpected(numberOne - numberTwo);
        setQuestionAsk(`${numberOne} - ${numberTwo}`);
      }

      if (operationOne === "*") {
        setResultExpected(numberOne * numberTwo);
        setQuestionAsk(`${numberOne} * ${numberTwo}`);
      }

      if (operationOne === "/") {
        setResultExpected(Math.floor(numberOne / (numberTwo + 1)));
        setQuestionAsk(`${numberOne} / ${numberTwo + 1}`);
      }

      // Ultrapassar os 10 Pontos
      if (operationOne === "+" && operationTwo === "+") {
        setResultExpected(numberOne + numberTwo + numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "-" && correct >= 10) {
        setResultExpected(numberOne + numberTwo - numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "*" && correct >= 10) {
        setResultExpected(numberOne + numberTwo * numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "/" && correct >= 10) {
        setResultExpected(
          Math.floor((numberOne + numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "-" && operationTwo === "+" && correct >= 10) {
        setResultExpected(numberOne - numberTwo + numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "-" && correct >= 10) {
        setResultExpected(numberOne - numberTwo - numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "*" && correct >= 10) {
        setResultExpected(numberOne - numberTwo * numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "/" && correct >= 10) {
        setResultExpected(
          Math.floor((numberOne - numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "*" && operationTwo === "+" && correct >= 10) {
        setResultExpected(numberOne * numberTwo + numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "-" && correct >= 10) {
        setResultExpected(numberOne * numberTwo - numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "*" && correct >= 10) {
        setResultExpected(numberOne * numberTwo * numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "/" && correct >= 10) {
        setResultExpected(
          Math.floor((numberOne * numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 10) {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 10) {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 10) {
        setResultExpected(
          Math.floor(
            numberOne / Math.floor((numberTwo + 1) * (numberThree + 1))
          )
        );
        setQuestionAsk(
          `${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 10) {
        setResultExpected(
          Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
        );
        setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
      }
    }

    if (difficulty === "Difícil") {
      setNumberOne(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
      setNumberTwo(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
      setNumberThree(
        numbersHard[Math.floor(Math.random() * numbersHard.length)]
      );

      if (operationOne === "+" && operationTwo === "+") {
        setResultExpected(numberOne + numberTwo + numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "-") {
        setResultExpected(numberOne + numberTwo - numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "*") {
        setResultExpected(numberOne + numberTwo * numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "/") {
        setResultExpected(
          Math.floor((numberOne + numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "-" && operationTwo === "+") {
        setResultExpected(numberOne - numberTwo + numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "-") {
        setResultExpected(numberOne - numberTwo - numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "*") {
        setResultExpected(numberOne - numberTwo * numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "/") {
        setResultExpected(
          Math.floor((numberOne - numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "*" && operationTwo === "+") {
        setResultExpected(numberOne * numberTwo + numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "-") {
        setResultExpected(numberOne * numberTwo - numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "*") {
        setResultExpected(numberOne * numberTwo * numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "/") {
        setResultExpected(
          Math.floor((numberOne * numberTwo) / (numberThree + 1))
        );
        setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
      }

      if (operationOne === "/" && operationTwo === "+") {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "-") {
        setResultExpected(
          Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
        );
        setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
      }

      if (operationOne === "/" && operationTwo === "*") {
        setResultExpected(
          Math.floor(
            numberOne / Math.floor((numberTwo + 1) * (numberThree + 1))
          )
        );
        setQuestionAsk(
          `${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`
        );
      }

      if (operationOne === "/" && operationTwo === "/") {
        setResultExpected(
          Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
        );
        setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
      }
    }
  }

  if (["Fácil", "Normal", "Difícil"].includes(difficulty)) {
    return counter > 0 ? (
      <>
        <Counter
          counter={counter}
          setCounter={setCounter}
          difficulty={difficulty}
          createQuestion={createQuestion}
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
            setResultsGame={setResultsGame}
            chances={chances}
            setChances={setChances}
            correct={correct}
            setCorrect={setCorrect}
            resultExpected={resultExpected}
            resultReceived={resultReceived}
            setResultReceived={setResultReceived}
            questionAsk={questionAsk}
          />
        ) : (
          <NextQuestion
            resultExpected={resultExpected}
            resultReceived={resultReceived}
            questionAsk={questionAsk}
          />
        )}

        {resultsGame === "Resposta Correta" ||
        resultsGame === "Resposta Errada" ? (
          <button onClick={() => setTimeout(createQuestion, 500)}>
            Próxima Pergunta
          </button>
        ) : null}

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
