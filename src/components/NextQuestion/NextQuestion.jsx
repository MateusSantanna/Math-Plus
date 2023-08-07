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
             Resposta Correta: {+resultExpected}
          </ResultExpected>
          {resultsGame === "Resposta Correta" ||
          resultsGame === "Resposta Errada" ? (
            <ResultReceived>
            Sua resposta: {resultReceived}
            </ResultReceived>
          ) : null}
        </StyledNextQuestion>
      </>
    </>
  );
}

export default NextQuestion;
