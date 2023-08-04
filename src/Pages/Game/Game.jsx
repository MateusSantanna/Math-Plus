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
  const [correct, setCorrect] = useState(69);
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

  function generateOperations(op) {
    return op[Math.floor(Math.random() * op.length)];
  }

  function generateNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

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
      return (a / (b * c)) % d === 0;
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
    setOperationOne(generateOperations(operations));
    setOperationTwo(generateOperations(operations));
    setOperationThree(generateOperations(operations));
    setResultsGame("");
    setCounterQuestions(10);
    setResultReceived("");

    generateNumber(numbersEasy);

    let newNumberOne, newNumberTwo, newNumberThree, newNumberFour;

    if (difficulty === "Fácil") {
      do {
        newNumberOne = generateNumber(numbersEasy);
        newNumberTwo = generateNumber(numbersEasy);
      } while (
        operations.includes("/") &&
        !isIntegerEasy(newNumberOne, newNumberTwo)
      );
      setNumberOne(generateNumber(numbersEasy));
      setNumberTwo(generateNumber(numbersEasy));
      setNumberThree(generateNumber(numbersEasy));
      setNumberFour(generateNumber(numbersEasy));

      if (operationOne === "+") {
        setResultExpected(numberOne + numberTwo);
        setQuestionAsk(`${numberOne} + ${numberTwo}`);
      }

      if (operationOne === "-") {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 25) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) + ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 25) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) - ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 25) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) * ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 25) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne - newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} - (${newNumberTwo} / ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / (newNumberTwo * newNumberThree) / newNumberFour
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
          newNumberOne = generateNumber(numbersEasy);
          newNumberTwo = generateNumber(numbersEasy);
          newNumberThree = generateNumber(numbersEasy);
          newNumberFour = generateNumber(numbersEasy);
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
      setNumberOne(generateNumber(numbersNormal));
      setNumberTwo(generateNumber(numbersNormal));
      setNumberThree(generateNumber(numbersNormal));
      setNumberFour(generateNumber(numbersNormal));

      do {
        newNumberOne = generateNumber(numbersNormal);
        newNumberTwo = generateNumber(numbersNormal);
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
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
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
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
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
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+" && correct >= 10) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} + ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "-" && correct >= 10) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} - ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "*" && correct >= 10) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} ÷ ${newNumberTwo}) * ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "/" && correct >= 10) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
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
        operationTwo === "/" &&
        operationThree === "*" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne - newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} - (${newNumberTwo} / ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        operationThree === "*" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / (newNumberTwo * newNumberThree) / newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) / ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "/" &&
        operationThree === "/" &&
        correct >= 50
      ) {
        do {
          newNumberOne = generateNumber(numbersNormal);
          newNumberTwo = generateNumber(numbersNormal);
          newNumberThree = generateNumber(numbersNormal);
          newNumberFour = generateNumber(numbersNormal);
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
      setNumberOne(generateNumber(numbersHard));
      setNumberTwo(generateNumber(numbersHard));
      setNumberThree(generateNumber(numbersHard));
      setNumberFour(generateNumber(numbersHard));
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne * newNumberTwo) / newNumberThree);
        setQuestionAsk(
          `(${newNumberOne} * ${newNumberTwo}) ÷ ${newNumberThree}`
        );
      }

      if (operationOne === "/" && operationTwo === "+") {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo + newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} + ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "-") {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected(newNumberOne / newNumberTwo - newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} - ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "*") {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
        } while (!isIntegerHard(newNumberOne, newNumberTwo, newNumberThree));
        setResultExpected((newNumberOne / newNumberTwo) * newNumberThree);
        setQuestionAsk(`${newNumberOne} ÷ ${newNumberTwo} * ${newNumberThree}`);
      }

      if (operationOne === "/" && operationTwo === "/") {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
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
        operationOne === "+" &&
        operationTwo === "/" &&
        operationThree === "+" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne - newNumberTwo / newNumberThree + newNumberFour
        );
        setQuestionAsk(
          `${newNumberOne} - (${newNumberTwo} / ${newNumberThree}) + ${newNumberFour}`
        );
      }

      if (
        operationOne === "-" &&
        operationTwo === "/" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
        operationThree === "*" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          (newNumberOne / newNumberTwo) * newNumberThree * newNumberFour
        );
        setQuestionAsk(
          `((${newNumberOne} / ${newNumberTwo}) * ${newNumberThree}) * ${newNumberFour}`
        );
      }

      if (
        operationOne === "/" &&
        operationTwo === "*" &&
        operationThree === "-" &&
        correct >= 70
      ) {
        do {
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
        } while (
          !isIntegerUltraHard(
            newNumberOne,
            newNumberTwo,
            newNumberThree,
            newNumberFour
          )
        );
        setResultExpected(
          newNumberOne / (newNumberTwo * newNumberThree) / newNumberFour
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
          newNumberOne = generateNumber(numbersHard);
          newNumberTwo = generateNumber(numbersHard);
          newNumberThree = generateNumber(numbersHard);
          newNumberFour = generateNumber(numbersHard);
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
