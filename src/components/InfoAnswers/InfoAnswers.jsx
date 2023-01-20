import { ColorDefaultOne, ColorDefaultThree, ColorDefaultTwo, ColorErrorsOne, ColorErrorsTwo, ColorErrorsThree, WrongAnswers } from "./style";

function InfoAnswers({chances}){

      return ( 
        <WrongAnswers>
          {chances === 3 ?(
            <ColorDefaultOne></ColorDefaultOne>
          ) : (
            <ColorErrorsOne>
            <h1>X</h1>
            </ColorErrorsOne>
          )}

          {chances >= 2?(
            <ColorDefaultTwo></ColorDefaultTwo>
          ) : (
            <ColorErrorsTwo>
            <h1>X</h1>
            </ColorErrorsTwo>
          )}

          {chances >= 1 ?(
            <ColorDefaultThree></ColorDefaultThree>
          ) : (
            <ColorErrorsThree>
            <h1>X</h1>
            </ColorErrorsThree>
          )}
        </WrongAnswers>
      )
}

export default InfoAnswers;