import {
  ParagraphQuestion,
  ResultExpected,
  ResultReceived,
  StyledQuestion,
} from "./style";

export function NextQuestion({ questionAsk, resultExpected, resultReceived }) {
  return (
    <>
      <>
        <StyledQuestion>
          <h1>Pergunta</h1>
          <ParagraphQuestion>{questionAsk}</ParagraphQuestion>
          <ResultExpected>
            A resposta Correta é: {+resultExpected}
          </ResultExpected>
          <ResultReceived>A sua resposta foi: {resultReceived}</ResultReceived>
        </StyledQuestion>
      </>
    </>
  );
}

export default NextQuestion;
