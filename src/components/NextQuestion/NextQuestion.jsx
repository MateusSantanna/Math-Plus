import {
  ParagraphQuestion,
  ResultExpected,
  ResultReceived,
  StyledNextQuestion,
} from "./style";

export function NextQuestion({ questionAsk, resultExpected, resultReceived }) {
  return (
    <>
      <>
        <StyledNextQuestion>
          <h1>Pergunta</h1>
          <ParagraphQuestion>{questionAsk}</ParagraphQuestion>
          <ResultExpected>
            A resposta Correta é: {+resultExpected}
          </ResultExpected>
          <ResultReceived>A sua resposta foi: {resultReceived}</ResultReceived>
        </StyledNextQuestion>
      </>
    </>
  );
}

export default NextQuestion;
