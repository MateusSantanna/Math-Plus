import { DivError } from "./style";

function ModalLose({correct, chances, setBegin, setSelect, setCounter, setCounterQuestions, setChances}){

  function mainMenu(){
    setBegin(false)
    setSelect(false)
    setCounter(3)
    setCounterQuestions(10)
    setChances(3)
  }

  function backDifficulty(){
    setBegin(false)
    setSelect(true)
    setCounter(3)
    setCounterQuestions(10)
    setChances(3)
  }

      
    
      return chances === 0 ? ( 
        <>
          <DivError>  
      <h1>FIM DE JOGO</h1>
      <h1>Sua Pontuação foi {correct}</h1>
      <button onClick={() => backDifficulty()}>Tentar de Novo</button>
      <button onClick={() => mainMenu()}>Voltar ao Menu Principal</button>
        </DivError>
        </>
      ) : (
         null
      )

}

export default ModalLose;