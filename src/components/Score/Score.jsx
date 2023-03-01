import { ScoreActual, ScoreText } from "./style";

function Score({ correct, chances }) {
  return (
    <>
      {chances > 0 ? (
        <>
          <ScoreText>Pontuação</ScoreText>
          <ScoreActual>{correct}</ScoreActual>
        </>
      ) : null}
    </>
  );
}

export default Score;
