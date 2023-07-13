export function NextQuestion({ questionAsk, resultExpected, resultReceived }) {
  return (
    <>
      <>
        <h1>Pergunta</h1>
        <p>{questionAsk}</p>
        <p>A resposta Correta é: {+resultExpected}</p>
        <p>A sua resposta foi: {resultReceived}</p>
      </>
    </>
  );
}

export default NextQuestion;
