import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import CounterQuestions from "../../components/CounterQuestions/CounterQuestions";
import { CenterTime } from "../../components/CounterQuestions/style";
import InfoAnswers from "../../components/InfoAnswers/InfoAnswers";
import ModalLose from "../../components/ModalLose/ModalLose";
import NextQuestion from "../../components/NextQuestion/NextQuestion";
import Questions from "../../components/Questions/Questions";
import Results from "../../components/Results/Results";
import Score from "../../components/Score/Score";

function Game({difficulty, setDifficulty, setBegin, counter, setCounter, counterQuestions, setCounterQuestions}){
    const [chances, setChances] = useState(3)
    const [resultsGame, setResultsGame] = useState("")
    const [correct, setCorrect] = useState(0);
    const [questionAsk, setQuestionAsk] = useState("2+2")
    const [resultExpected, setResultExpected] = useState(4)
    const [resultReceived, setResultReceived] = useState()    
    const [numberOne, setNumberOne] = useState()
    const [numberTwo, setNumberTwo] = useState()
    const [numberThree, setNumberThree] = useState()
    const [numberFour, setNumberFour] = useState()
    const [numberFive, setNumberFive] = useState()
    const [operationOne, setOperationOne] = useState()
    const [operationTwo, setOperationTwo] = useState()



    if(["Fácil","Normal","Difícil"].includes(difficulty)){

        return counter > 0 ? (
                 <>
                    <Counter counter={counter} setCounter={setCounter} />
                 </>
            ) : (

                <> 
                {resultsGame === "" ? (
                    <Score correct={correct} />
                    ) : (
                        <>
                        <Score correct={correct} />
                        <Results resultsGame={resultsGame} chances={chances} setChances={setChances} />
                        </>
                )}

                <>
                <InfoAnswers chances={chances} setChances={setChances} />
                </>
               
                {resultsGame === "" ? (
                <CenterTime>
                <CounterQuestions counterQuestions={counterQuestions} setCounterQuestions={setCounterQuestions} chances={chances} setChances={setChances} resultsGame={resultsGame} setResultsGame={setResultsGame} />
                </CenterTime>
                    ) : (
                        null
                )}

                {resultsGame === "" ? (
                <Questions 
                setResultsGame={setResultsGame} 
                chances={chances} setChances={setChances} 
                correct={correct} setCorrect={setCorrect} 
                resultExpected={resultExpected}
                resultReceived={resultReceived} setResultReceived={setResultReceived} 
                questionAsk={questionAsk} setQuestionAsk={setQuestionAsk}

                />
                    ) : (
                    <NextQuestion setResultsGame={setResultsGame} difficulty={difficulty} 
                    correct={correct}
                    resultExpected={resultExpected} setResultExpected={setResultExpected} 
                    resultReceived={resultReceived} setResultReceived={setResultReceived} 
                    questionAsk={questionAsk} setQuestionAsk={setQuestionAsk}
                    numberOne={numberOne} setNumberOne={setNumberOne}
                    numberTwo={numberTwo} setNumberTwo={setNumberTwo}
                    numberThree={numberThree} setNumberThree={setNumberThree}
                    numberFour={numberFour} setNumberFour={setNumberFour}
                    numberFive={numberFive} setNumberFive={setNumberFive}
                    operationOne={operationOne} setOperationOne={setOperationOne}
                    operationTwo={operationTwo} setOperationTwo={setOperationTwo}
                    setCounterQuestions={setCounterQuestions}
                    />    
                    
                    )}
                    <ModalLose chances={chances} correct={correct} />
                </>
            )

    }
                 


}

export default Game;

// [{
//     number1: 3,
//     operator: +,
//     number2: 4,
// }]