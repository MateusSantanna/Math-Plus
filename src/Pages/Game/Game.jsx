import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import CounterQuestions from "../../components/CounterQuestions/CounterQuestions";

import InfoAnswers from "../../components/InfoAnswers/InfoAnswers";
import ModalLose from "../../components/ModalLose/ModalLose";
import NextQuestion from "../../components/NextQuestion/NextQuestion";
import Questions from "../../components/Questions/Questions";
import Results from "../../components/Results/Results";
import Score from "../../components/Score/Score";
import { ExitGame, StyledScoreAndResult } from "./style";
import { CenterTime } from "../../components/CounterQuestions/style";

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
  const [numberFour, setNumberFour] = useState();
  const [questionAsk, setQuestionAsk] = useState();
  const [resultExpected, setResultExpected] = useState();
  const [resultReceived, setResultReceived] = useState();
  const [operationOne, setOperationOne] = useState();
  const [operationTwo, setOperationTwo] = useState();
  const [operationThree, setOperationThree] = useState();

  let numbersEasy = [...Array(10).keys()];

  let operations = ["+", "-", "*", "/"];
  let numbersNormal = [...Array(20).keys()];
  let numbersHard = [...Array(100).keys()];

  function exitGame() {
    setBegin(false);
    setSelect(false);
    setCounter(3);
    setCounterQuestions(10);
    setChances(3);
    setCorrect(0);
  }

  function isGreaterThanZero(a, b) {
    return a - b >= 0;
  }

  function isIntegerEasy(a, b) {
    return a % b === 0;
  }

  function isIntegerHard(a, b, c) {
    if (operationOne === "+" && operationTwo === "/") {
      return (a + b) % c === 0;
    }
    if (operationOne === "-" && operationTwo === "/") {
      return (a - b) % c === 0;
    }
    if (operationOne === "*" && operationTwo === "/") {
      return (a * b) % c === 0;
    }
    if (operationOne === "/" && operationTwo === "/") {
      return (a / b) % c === 0;
    }
    if (operationOne === "/" && operationTwo === "+") {
      return a % b === 0;
    }
    if (operationOne === "/" && operationTwo === "-") {
      return a % b === 0;
    }
    if (operationOne === "/" && operationTwo === "*") {
      return a % b === 0;
    }
  }

  function isIntegerUltraHard(a, b, c, d) {
    if (
      operationOne === "+" &&
      operationTwo === "/" &&
      operationThree === "+"
    ) {
      return (a + b) % c === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "/" &&
      operationThree === "-"
    ) {
      return (a + b) % c === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "/" &&
      operationThree === "*"
    ) {
      return a + (b % c) === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "+" &&
      operationThree === "/"
    ) {
      return (a + b + c) % d === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "-" &&
      operationThree === "/"
    ) {
      return (a + b - c) % d === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "*" &&
      operationThree === "/"
    ) {
      return (a + b * c) % d === 0;
    }

    if (
      operationOne === "+" &&
      operationTwo === "/" &&
      operationThree === "/"
    ) {
      return (a + b / c) % d === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "/" &&
      operationThree === "+"
    ) {
      return b % c === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "/" &&
      operationThree === "-"
    ) {
      return b % c === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "/" &&
      operationThree === "*"
    ) {
      return b % c === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "+" &&
      operationThree === "/"
    ) {
      return (a - b + c) % d === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "-" &&
      operationThree === "/"
    ) {
      return (a - b - c) % d === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "*" &&
      operationThree === "/"
    ) {
      return (a - b * c) % d === 0;
    }

    if (
      operationOne === "-" &&
      operationTwo === "/" &&
      operationThree === "/"
    ) {
      return (a - b / c) % d === 0;
    }

    //16 IFS COM operationOne === "*"

    if (
      operationOne === "*" &&
      operationTwo === "/" &&
      operationThree === "+"
    ) {
      return (a * b) % c === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "/" &&
      operationThree === "-"
    ) {
      return (a * b) % c === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "/" &&
      operationThree === "*"
    ) {
      return (a * b) % c === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "+" &&
      operationThree === "/"
    ) {
      return (a * b + c) % d === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "-" &&
      operationThree === "/"
    ) {
      return (a * b - c) % d === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "*" &&
      operationThree === "/"
    ) {
      return (a * b * c) % d === 0;
    }

    if (
      operationOne === "*" &&
      operationTwo === "/" &&
      operationThree === "/"
    ) {
      return ((a * b) / c) % d === 0;
    }

    // 16 IFS COM operationOne === "/"

    if (
      operationOne === "/" &&
      operationTwo === "+" &&
      operationThree === "+"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "-" &&
      operationThree === "+"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "*" &&
      operationThree === "+"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "/" &&
      operationThree === "+"
    ) {
      return (a / b) % c === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "+" &&
      operationThree === "-"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "-" &&
      operationThree === "-"
    ) {
      return a / b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "*" &&
      operationThree === "-"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "/" &&
      operationThree === "-"
    ) {
      return (a / b) % c === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "+" &&
      operationThree === "*"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "-" &&
      operationThree === "*"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "*" &&
      operationThree === "*"
    ) {
      return a % b === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "/" &&
      operationThree === "*"
    ) {
      return (a / b) % c === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "+" &&
      operationThree === "/"
    ) {
      return (a / b + c) % d === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "-" &&
      operationThree === "/"
    ) {
      return (a / b - c) % d === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "*" &&
      operationThree === "/"
    ) {
      return ((a / b) * c) % d === 0;
    }

    if (
      operationOne === "/" &&
      operationTwo === "/" &&
      operationThree === "/"
    ) {
      return (a / b / c) % d === 0;
    }
  }

  function createQuestion() {
    setOperationOne(operations[Math.floor(Math.random() * operations.length)]);
    setOperationTwo(operations[Math.floor(Math.random() * operations.length)]);
    setOperationThree(
      operations[Math.floor(Math.random() * operations.length)]
    );
    setResultsGame("");
    setCounterQuestions(10);
    setResultReceived("");

    console.log(operationOne);
    console.log(operationTwo);
    console.log(operationThree);
    let newNumberOne;
    let newNumberTwo;
    let newNumberThree;
    let newNumberFour;

    if (difficulty === "Fácil") {
      do {
        newNumberOne =
          numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        newNumberTwo =
          numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
      } while (
        operations.includes("/") &&
        !isIntegerEasy(newNumberOne, newNumberTwo)
      );
      setNumberOne(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
      setNumberTwo(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
      setNumberThree(
        numbersEasy[Math.floor(Math.random() * numbersEasy.length)]
      );
      setNumberFour(
        numbersEasy[Math.floor(Math.random() * numbersEasy.length)]
      );

      if (operationOne === "+") {
        setResultExpected(numberOne + numberTwo);
        setQuestionAsk(`${numberOne} + ${numberTwo}`);
      }

      if (operationOne === "-") {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          operations.includes("-") &&
          !isGreaterThanZero(newNumberOne, newNumberTwo)
        );
        setResultExpected(newNumberOne - newNumberTwo);
        setQuestionAsk(`${newNumberOne} - ${newNumberTwo}`);
      }

      if (operationOne === "*") {
        setResultExpected(numberOne * numberTwo);
        setQuestionAsk(`${numberOne} * ${numberTwo}`);
      }

      if (operationOne === "/") {
        setResultExpected(newNumberOne / newNumberTwo);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo}`);
      }

      // Ultrapassar os 25 Pontos
      if (operationOne === "+" && operationTwo === "+" && correct >= 25) {
        setResultExpected(numberOne + numberTwo + numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "-" && correct >= 25) {
        setResultExpected(numberOne + numberTwo - numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "*" && correct >= 25) {
        setResultExpected(numberOne + numberTwo * numberThree);
        setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "+" && operationTwo === "/" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne + newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "-" && operationTwo === "+" && correct >= 25) {
        setResultExpected(numberOne - numberTwo + numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "-" && correct >= 25) {
        setResultExpected(numberOne - numberTwo - numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "*" && correct >= 25) {
        setResultExpected(numberOne - numberTwo * numberThree);
        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "-" && operationTwo === "/" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne - newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "*" && operationTwo === "+" && correct >= 25) {
        setResultExpected(numberOne * numberTwo + numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "-" && correct >= 25) {
        setResultExpected(numberOne * numberTwo - numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "*" && correct >= 25) {
        setResultExpected(numberOne * numberTwo * numberThree);
        setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
      }

      if (operationOne === "*" && operationTwo === "/" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) + ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) - ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) * ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 25) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo / newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} ÷ ${newNumberThree}`);
      }
      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne + numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "-"

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne - numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "*"

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        setResultExpected(numberOne * numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }
      if (
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne + newNumberTwo) / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo}) / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne + newNumberTwo) / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo}) / ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne + (newNumberTwo / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} + (${newNumberTwo} / ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne + newNumberTwo + newNumberThree / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne + newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne + newNumberTwo * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo} * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne + newNumberTwo / newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo} / ${newNumberThree}) / ${newNumberFour}`
        );
      }
      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne - newNumberTwo) / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo}) / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne - newNumberTwo / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo} / ${newNumberThree}) - ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne - (newNumberTwo / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} - (${newNumberTwo} / ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne - newNumberTwo + newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne - newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne - newNumberTwo * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo} * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne - newNumberTwo / newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo} / ${newNumberThree}) / ${newNumberFour}`
        );
      }
      if (
        operationOne === "*" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo) / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo) / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) / ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          ((newNumberOne * newNumberTwo) / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} * ${newNumberTwo}) / ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo + newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo} * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne * newNumberTwo) / newNumberThree / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) / ${newNumberThree} / ${newNumberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} / ${newNumberThree}) * ${newNumberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} + ${newNumberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo + newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          ((newNumberOne / newNumberTwo) * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 70
      ) {
        do {
          newNumberOne =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberTwo =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberThree =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
          newNumberFour =
            numbersEasy[Math.floor(Math.random() * numbersEasy.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree / newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} / ${newNumberFour}`
        );
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
      setNumberFour(
        numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
      );

      do {
        newNumberOne =
          numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        newNumberTwo =
          numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
      } while (
        operations.includes("/") &&
        !isIntegerEasy(newNumberOne, newNumberTwo)
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
        setResultExpected(newNumberOne / newNumberTwo);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo}`);
      }

      // Ultrapassar os 10 Pontos
      if (operationOne === "+" && operationTwo === "+" && correct >= 10) {
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
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne + newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo}) ÷ ${newNumberThree}`
        );
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
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne - newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo}) ÷ ${newNumberThree}`
        );
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
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 10) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} + ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 10) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} - ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 10) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) * ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 10) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }
      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne + numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "-"

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne - numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "*"

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        setResultExpected(numberOne * numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} / ${newNumberThree}) * ${newNumberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo + newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          ((newNumberOne / newNumberTwo) * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 100
      ) {
        do {
          newNumberOne =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberTwo =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberThree =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
          newNumberFour =
            numbersNormal[Math.floor(Math.random() * numbersNormal.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree / newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} / ${newNumberFour}`
        );
      }
    }

    if (difficulty === "Difícil") {
      setNumberOne(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
      setNumberTwo(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
      setNumberThree(
        numbersHard[Math.floor(Math.random() * numbersHard.length)]
      );
      setNumberFour(
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
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne + newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} + ${newNumberTwo}) ÷ ${newNumberThree}`
        );
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
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne - newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} - ${newNumberTwo}) ÷ ${newNumberThree}`
        );
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
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+") {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} + ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "-") {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} - ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "*") {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} * ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "/") {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }
      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "+" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne + numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "-"

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} + ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne - numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} - ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }

      // 16 IFS COM operationOne === "*"

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo + numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo - numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo * numberThree + numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} + ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo + numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo - numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo * numberThree - numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} - ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo + numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} + ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo - numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} - ${numberThree} * ${numberFour}`
        );
      }

      if (
        operationOne === "*" &&
        operationTwo === "*" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        setResultExpected(numberOne * numberTwo * numberThree * numberFour);
        setQuestionAsk(
          `${numberOne} * ${numberTwo} * ${numberThree} * ${numberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo / newNumberThree) * newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} / ${newNumberThree}) * ${newNumberFour}`
        );
      }
      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo + newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) + ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo - newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo}) - ${newNumberThree} - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "+" &&
        operationThree === "/" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo + newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} + ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "-" &&
        operationThree === "/" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo - newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `(${newNumberOne} / ${newNumberTwo} - ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "+" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree - newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) - ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "/" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          ((newNumberOne / newNumberTwo) * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 25
      ) {
        do {
          newNumberOne =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberTwo =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberThree =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
          newNumberFour =
            numbersHard[Math.floor(Math.random() * numbersHard.length)];
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / newNumberTwo / newNumberThree / newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} / ${newNumberTwo} / ${newNumberThree} / ${newNumberFour}`
        );
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
        <StyledScoreAndResult>
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

          <>
            <InfoAnswers chances={chances} setChances={setChances} />
          </>
          <ExitGame onClick={() => exitGame()}>Sair</ExitGame>
        </StyledScoreAndResult>

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
            resultsGame={resultsGame}
          />
        )}

        {resultsGame === "Resposta Correta" ||
        resultsGame === "Resposta Errada" ||
        resultsGame === "Tempo Esgotado" ? (
          chances > 0 ? (
            <button onClick={() => setTimeout(createQuestion, 500)}>
              Próxima Pergunta
            </button>
          ) : null
        ) : null}

        <ModalLose
          chances={chances}
          setChances={setChances}
          correct={correct}
          setSelect={setSelect}
          setBegin={setBegin}
          setCounter={setCounter}
          setCounterQuestions={setCounterQuestions}
          resultExpected={resultExpected}
          resultReceived={resultReceived}
          questionAsk={questionAsk}
        />
      </>
    );
  }
}

export default Game;
