import { ScoreActual, ScoreText } from "./style";

function Score({correct}){

  return ( <>
  <ScoreText>Pontuação</ScoreText>
  <ScoreActual>{correct}</ScoreActual>
  </>
  )
}

export default Score;