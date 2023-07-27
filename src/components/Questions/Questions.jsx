import { InputAnswer } from "./style";

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

    // Verifica se o input contém somente números negativos e números inteiros positivos
    const isValidInput = /^-?\d*$/.test(inputText);

    if (isValidInput) {
      setResultReceived(inputText);
    }
  };

  let confirmar = "->";

  return (
    <>
      <InputAnswer>
        <h1>Pergunta</h1>
        <h1>{questionAsk}</h1>
        <input required value={resultReceived} onChange={handleChange} />
      </InputAnswer>

      <div></div>

      <button onClick={() => checkAnswer()}>{confirmar}</button>
    </>
  );
}

export default Questions;
