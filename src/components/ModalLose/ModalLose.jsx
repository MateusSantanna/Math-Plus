import { DivError } from "./style";

function ModalLose({correct, chances}){
      
    
      return chances === 0 ? ( 
        <>
          <DivError>  
      <h1>FIM DE JOGO</h1>
      <h1>Sua Pontuação foi {correct}</h1>
      <button>Tentar de Novo</button>
      <button>Voltar ao Menu Principal</button>
        </DivError>
        </>
      
      ) : (
        null
      )

}

export default ModalLose;