import {
  ParagraphQuestion,
  ResultExpected,
  ResultReceived,
  StyledNextQuestion,
} from "./style";

export function NextQuestion({
  resultsGame,
  questionAsk,
  resultExpected,
  resultReceived,
}) {
  return (
    <>
      <>
        <StyledNextQuestion>
          <h1>Pergunta</h1>
          <ParagraphQuestion>{questionAsk}</ParagraphQuestion>
          <ResultExpected>
            A resposta Correta é: {+resultExpected}
          </ResultExpected>
          {resultsGame === "Resposta Correta" ||
          resultsGame === "Resposta Errada" ? (
            <ResultReceived>
              A sua resposta foi: {resultReceived}
            </ResultReceived>
          ) : null}
        </StyledNextQuestion>
      </>
    </>
  );
}

export default NextQuestion;
