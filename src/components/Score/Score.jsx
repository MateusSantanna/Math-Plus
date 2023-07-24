import { ScoreActual, ScoreText, StyledDivScore } from "./style";

function Score({ correct, chances }) {
  return (
    <>
      {chances > 0 ? (
        <>
          <StyledDivScore>
            <ScoreText>Pontuação:</ScoreText>
            <ScoreActual>{correct}</ScoreActual>
          </StyledDivScore>
        </>
      ) : null}
    </>
  );
}

export default Score;
