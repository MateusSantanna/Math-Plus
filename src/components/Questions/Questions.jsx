import {
  InputAnswers,
  QuestionScreen,
  StyledQuestions,
  TitleQuestions,
} from "./style";

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
    </>
  );
}

export default Questions;
