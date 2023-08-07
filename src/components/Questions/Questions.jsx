import {
  InputAnswers,
  QuestionScreen,
  StyledQuestions,
  TitleQuestions,
} from "./style";
import { OneToFiveClick, SixToFinalClick } from "./style";

function Questions({
  setResultsGame,
  resultExpected,
  resultReceived,
  setResultReceived,
  chances,
  setChances,
  correct,
  setCorrect,
  questionAsk,
}) {
  function checkAnswer() {
    if (resultExpected === +resultReceived) {
      setResultsGame("Resposta Correta");
      setCorrect(correct + 1);
    }

    if (resultExpected !== +resultReceived || resultReceived === "") {
      setResultsGame("Resposta Errada");
      setChances(chances - 1);
    }
  }

  const handleChange = (e) => {
    const inputText = e.target.value;

    const isValidInput = /^-?\d*$/.test(inputText);

    if (isValidInput) {
      setResultReceived(inputText);
    }
  };

  return (
    <>
      <StyledQuestions>
        <TitleQuestions>Pergunta</TitleQuestions>
        <QuestionScreen>{questionAsk}</QuestionScreen>
      </StyledQuestions>

      <InputAnswers>
        <input
          required
          placeholder="Sua resposta"
          value={resultReceived}
          onChange={handleChange}
        />
        <button onClick={() => checkAnswer()}>→</button>
      </InputAnswers>

      <OneToFiveClick>
        <button onClick={() => setResultReceived(resultReceived + "-")}>
          -
        </button>
        <button onClick={() => setResultReceived(resultReceived + "1")}>
          1
        </button>
        <button onClick={() => setResultReceived(resultReceived + "2")}>
          2
        </button>
        <button onClick={() => setResultReceived(resultReceived + "3")}>
          3
        </button>
        <button onClick={() => setResultReceived(resultReceived + "4")}>
          4
        </button>
        <button onClick={() => setResultReceived(resultReceived + "5")}>
          5
        </button>
      </OneToFiveClick>

      <SixToFinalClick>
        <button onClick={() => setResultReceived(resultReceived + "6")}>
          6
        </button>

        <button onClick={() => setResultReceived(resultReceived + "7")}>
          7
        </button>
        <button onClick={() => setResultReceived(resultReceived + "8")}>
          8
        </button>
        <button onClick={() => setResultReceived(resultReceived + "9")}>
          9
        </button>

        <button onClick={() => setResultReceived(resultReceived + "0")}>
          0
        </button>

        <button onClick={() => setResultReceived(resultReceived.slice(0, -1))}>
          ←
        </button>
      </SixToFinalClick>
    </>
  );
}

export default Questions;
