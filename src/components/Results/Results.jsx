import { ScoreCorrect, ScoreWrong } from "./style";

function Results({resultsGame}){
        return (
          resultsGame === "Tempo Esgotado" || resultsGame === "Resposta Errada" ? (
            <ScoreWrong>{resultsGame}</ScoreWrong>
            ) : (
              <ScoreCorrect>{resultsGame}</ScoreCorrect>
              )
  )

}

export default Results;