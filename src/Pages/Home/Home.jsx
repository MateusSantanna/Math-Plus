import {
  ButtonBack,
  ButtonBegin,
  ButtonEasy,
  ButtonHard,
  ButtonNormal,
  TitleWeb,
  InfoDifficultyEasy,
  InfoDifficultyNormal,
  InfoDifficultyHard,
} from "./style";

export function Home({
  select,
  setSelect,
  setDifficulty,
  setBegin,
  setQuestionAsk,
}) {
  function changeMode(level) {
    setDifficulty(level);
    setBegin(true);
  }

  return (
    <>
      {select === false ? (
        <>
          <TitleWeb>
            <h1>MATH</h1>
            <h4>mática</h4>
          </TitleWeb>
          <h1>Venha testar seus conhecimentos de Matemática</h1>
          <ButtonBegin onClick={() => setSelect(true)}>Começar</ButtonBegin>
        </>
      ) : (
        <>
          <TitleWeb>
            <h1>MATH</h1>
            <h4>mática</h4>
          </TitleWeb>

          <h1>Selecione sua dificuldade</h1>
          <div>
            <div></div>
            <ButtonEasy
              onClick={() => {
                changeMode("Fácil");
              }}
            >
              Fácil
            </ButtonEasy>

            <div></div>
            <ButtonNormal
              onClick={() => {
                changeMode("Normal");
              }}
            >
              Normal
            </ButtonNormal>

            <div></div>
            <ButtonHard
              onClick={() => {
                changeMode("Difícil");
              }}
            >
              Difícil
            </ButtonHard>
          </div>

          <ButtonBack onClick={() => setSelect(false)}>Voltar</ButtonBack>

          <InfoDifficultyEasy>
            Fácil: Recomendado para aqueles que desejam praticar e entender o
            jogo{" "}
          </InfoDifficultyEasy>
          <InfoDifficultyNormal>
            Normal: Recomendado para aqueles que querem uma experiência
            balanceada{" "}
          </InfoDifficultyNormal>
          <InfoDifficultyHard>
            Difícil: Recomendado para aqueles que buscam um Desafio{" "}
          </InfoDifficultyHard>
        </>
      )}
    </>
  );
}
