import { useState } from "react";
import { Confetti, DivGameOver } from "./style";

function ModalLose({
  correct,
  chances,
  setBegin,
  setSelect,
  setCounter,
  setCounterQuestions,
  setChances,
  showModal,
  setShowModal,
}) {
  const [loading, setLoading] = useState(true);

  // Simula a carga de informações por 2 segundos
  setTimeout(() => setLoading(false), 2000);
  function mainMenu() {
    setBegin(false);
    setSelect(false);
    setCounter(3);
    setCounterQuestions(10);
    setChances(3);
  }

  function backDifficulty() {
    setBegin(false);
    setSelect(true);
    setCounter(3);
    setCounterQuestions(10);
    setChances(3);
  }

  return chances === 0 ? (
    <>
      {loading ? (
        <DivGameOver>Loading...</DivGameOver>
      ) : (
        <DivGameOver className="game-over">
          <div>
            <h1>FIM DE JOGO</h1>
            <h1>Sua Pontuação foi {correct}</h1>
            <button onClick={() => backDifficulty()}>Tentar de Novo</button>
            <button onClick={() => mainMenu()}>Voltar ao Menu Principal</button>
          </div>
        </DivGameOver>
      )}
    </>
  ) : null;
}

export default ModalLose;
