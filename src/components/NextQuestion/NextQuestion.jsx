export function NextQuestion({setResultsGame, 
  questionAsk, setQuestionAsk, 
  resultExpected, setResultExpected, 
  difficulty, 
  numberOne, setNumberOne, 
  numberTwo, setNumberTwo, 
  numberThree, setNumberThree,
  operationOne, setOperationOne, 
  operationTwo, setOperationTwo,
  setCounterQuestions, resultReceived,
correct, chances}){

  let numbersEasy = [...Array(10).keys()]
  let operations = ["+", "-", "*", "/"]
  let numbersNormal = [...Array(20).keys()]
  let numbersHard = [...Array(100).keys()]

     function createQuestion(){
      setOperationOne(operations[Math.floor(Math.random() * operations.length)])
      setOperationTwo(operations[Math.floor(Math.random() * operations.length)])
      setResultsGame("")
      setCounterQuestions(10)
      
      if(difficulty === "Fácil"){
        setNumberOne(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])
        setNumberTwo(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])
        setNumberThree(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])

        if(operationOne === "+"){
          setResultExpected(numberOne + numberTwo)
          setQuestionAsk(`${numberOne} + ${numberTwo}`)
          }
      
          if(operationOne === "-"){
            setResultExpected(numberOne - numberTwo)
            setQuestionAsk(`${numberOne} - ${numberTwo}`)
          }
      
          if(operationOne === "*"){
            setResultExpected(numberOne * numberTwo)
            setQuestionAsk(`${numberOne} * ${numberTwo}`)
          }
      
          if(operationOne === "/"){
            setResultExpected(Math.floor(numberOne / (numberTwo + 1)))
            setQuestionAsk(`${numberOne} / ${numberTwo + 1}`)
          }

        // Ultrapassar os 20 Pontos 
          if(operationOne === "+" && operationTwo === "+" && correct >= 20){
            setResultExpected(numberOne + numberTwo + numberThree)
            setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`)
            }
        
            if(operationOne === "+" && operationTwo === "-" && correct >= 20){
              setResultExpected(numberOne + numberTwo - numberThree)
              setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`)
              }
        
              if(operationOne === "+" && operationTwo === "*" && correct >= 20){
                setResultExpected(numberOne + numberTwo * numberThree)
                setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`)
                }
            
                if(operationOne === "+" && operationTwo === "/" && correct >= 20){
                  setResultExpected(numberOne + Math.floor(numberTwo / (numberThree + 1)))
                  setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree + 1}`)
                  }

                  if(operationOne === "-" && operationTwo === "+" && correct >= 20){
                    setResultExpected(numberOne - numberTwo + numberThree)
                    setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`)
                    }
                
                    if(operationOne === "-" && operationTwo === "-" && correct >= 20){
                      setResultExpected(numberOne - numberTwo - numberThree)
                      setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`)
                      }

                      if(operationOne === "-" && operationTwo === "*" && correct >= 20){
                        setResultExpected(numberOne - numberTwo * numberThree)
                        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`)
                        }
                    
                        if(operationOne === "-" && operationTwo === "/" && correct >= 20){
                          setResultExpected(numberOne - Math.floor(numberTwo / (numberThree + 1)))
                          setQuestionAsk(`${numberOne} - ${numberTwo} / ${(numberThree + 1)}`)
                          }

                          if(operationOne === "*" && operationTwo === "+" && correct >= 20){
                            setResultExpected(numberOne * numberTwo + numberThree)
                            setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`)
                            }
                        
                            if(operationOne === "*" && operationTwo === "-" && correct >= 20){
                              setResultExpected(numberOne * numberTwo - numberThree)
                              setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`)
                              }

                              if(operationOne === "*" && operationTwo === "*" && correct >= 20){
                                setResultExpected(numberOne * numberTwo * numberThree)
                                setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`)
                                }
                            
                                if(operationOne === "*" && operationTwo === "/" && correct >= 20){
                                  setResultExpected(numberOne * Math.floor(numberTwo / (numberThree + 1)))
                                  setQuestionAsk(`${numberOne} * ${numberTwo} / ${(numberThree + 1)}`)
                                  }

                                  if(operationOne === "/" && operationTwo === "+" && correct >= 20){
                                    setResultExpected(Math.floor(numberOne / (numberTwo + 1)) + numberThree)
                                    setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} + ${numberThree}`)
                                    }
                                
                                    if(operationOne === "/" && operationTwo === "-" && correct >= 20){
                                      setResultExpected(Math.floor(numberOne / (numberTwo + 1)) - numberThree)
                                      setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} - ${numberThree}`)
                                      }

                                      if(operationOne === "/" && operationTwo === "*" && correct >= 20){
                                        setResultExpected(Math.floor(numberOne / (numberTwo + 1)) * numberThree)
                                        setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} * ${numberThree}`)
                                        }
                                    
                                        if(operationOne === "/" && operationTwo === "/" && correct >= 20){
                                          setResultExpected(Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1)))
                                          setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} / ${(numberThree + 1)}`)
                                          }
                                        }
                                          
                                          
                                          
                                          if(difficulty === "Normal"){
                                            setNumberOne(numbersNormal[Math.floor(Math.random() * numbersNormal.length)])
                                            setNumberTwo(numbersNormal[Math.floor(Math.random() * numbersNormal.length)])
                                            setNumberThree(numbersNormal[Math.floor(Math.random() * numbersNormal.length)])

                                                if(operationOne === "+"){
                                                  setResultExpected(numberOne + numberTwo)
                                                  setQuestionAsk(`${numberOne} + ${numberTwo}`)
                                                  }
                                              
                                                  if(operationOne === "-"){
                                                    setResultExpected(numberOne - numberTwo)
                                                    setQuestionAsk(`${numberOne} - ${numberTwo}`)
                                                  }
                                              
                                                  if(operationOne === "*"){
                                                    setResultExpected(numberOne * numberTwo)
                                                    setQuestionAsk(`${numberOne} * ${numberTwo}`)
                                                  }
                                              
                                                  if(operationOne === "/"){
                                                    setResultExpected(Math.floor(numberOne / (numberTwo + 1)))
                                                    setQuestionAsk(`${numberOne} / ${numberTwo + 1}`)
                                                  }

                                                // Ultrapassar os 10 Pontos 
                                                if(operationOne === "+" && operationTwo === "+" && correct >= 10){
                                                  setResultExpected(numberOne + numberTwo + numberThree)
                                                  setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`)
                                                  }
                                              
                                                  if(operationOne === "+" && operationTwo === "-" && correct >= 10){
                                                    setResultExpected(numberOne + numberTwo - numberThree)
                                                    setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`)
                                                    }
                                              
                                                    if(operationOne === "+" && operationTwo === "*" && correct >= 10){
                                                      setResultExpected(numberOne + numberTwo * numberThree)
                                                      setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`)
                                                      }
                                                  
                                                      if(operationOne === "+" && operationTwo === "/" && correct >= 10){
                                                        setResultExpected(numberOne + Math.floor(numberTwo / (numberThree + 1)))
                                                        setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree + 1}`)
                                                        }
                                      
                                                        if(operationOne === "-" && operationTwo === "+" && correct >= 10){
                                                          setResultExpected(numberOne - numberTwo + numberThree)
                                                          setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`)
                                                          }
                                                      
                                                          if(operationOne === "-" && operationTwo === "-" && correct >= 10){
                                                            setResultExpected(numberOne - numberTwo - numberThree)
                                                            setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`)
                                                            }
                                      
                                                            if(operationOne === "-" && operationTwo === "*" && correct >= 10){
                                                              setResultExpected(numberOne - numberTwo * numberThree)
                                                              setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`)
                                                              }
                                                          
                                                              if(operationOne === "-" && operationTwo === "/" && correct >= 10){
                                                                setResultExpected(numberOne - Math.floor(numberTwo / (numberThree + 1)))
                                                                setQuestionAsk(`${numberOne} - ${numberTwo} / ${(numberThree + 1)}`)
                                                                }
                                      
                                                                if(operationOne === "*" && operationTwo === "+" && correct >= 10){
                                                                  setResultExpected(numberOne * numberTwo + numberThree)
                                                                  setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`)
                                                                  }
                                                              
                                                                  if(operationOne === "*" && operationTwo === "-" && correct >= 10){
                                                                    setResultExpected(numberOne * numberTwo - numberThree)
                                                                    setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`)
                                                                    }
                                      
                                                                    if(operationOne === "*" && operationTwo === "*" && correct >= 10){
                                                                      setResultExpected(numberOne * numberTwo * numberThree)
                                                                      setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`)
                                                                      }
                                                                  
                                                                      if(operationOne === "*" && operationTwo === "/" && correct >= 10){
                                                                        setResultExpected(numberOne * Math.floor(numberTwo / (numberThree + 1)))
                                                                        setQuestionAsk(`${numberOne} * ${numberTwo} / ${(numberThree + 1)}`)
                                                                        }
                                      
                                                                        if(operationOne === "/" && operationTwo === "+" && correct >= 10){
                                                                          setResultExpected(Math.floor(numberOne / (numberTwo + 1)) + numberThree)
                                                                          setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} + ${numberThree}`)
                                                                          }
                                                                      
                                                                          if(operationOne === "/" && operationTwo === "-" && correct >= 10){
                                                                            setResultExpected(Math.floor(numberOne / (numberTwo + 1)) - numberThree)
                                                                            setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} - ${numberThree}`)
                                                                            }
                                      
                                                                            if(operationOne === "/" && operationTwo === "*" && correct >= 10){
                                                                              setResultExpected(Math.floor(numberOne / (numberTwo + 1)) * numberThree)
                                                                              setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} * ${numberThree}`)
                                                                              }
                                                                          
                                                                              if(operationOne === "/" && operationTwo === "/" && correct >= 10){
                                                                                setResultExpected(Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1)))
                                                                                setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} / ${(numberThree + 1)}`)
                                                                                }
                                                                              }
      
                                                                              

                                                                              if(difficulty === "Difícil"){
                                                                                setNumberOne(numbersHard[Math.floor(Math.random() * numbersHard.length)])
                                                                                setNumberTwo(numbersHard[Math.floor(Math.random() * numbersHard.length)])
                                                                                setNumberThree(numbersHard[Math.floor(Math.random() * numbersHard.length)])
                                    
                                                                                if(operationOne === "+" && operationTwo === "+"){
                                                                                  setResultExpected(numberOne + numberTwo + numberThree)
                                                                                  setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`)
                                                                                  }
                                                                              
                                                                                  if(operationOne === "+" && operationTwo === "-"){
                                                                                    setResultExpected(numberOne + numberTwo - numberThree)
                                                                                    setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`)
                                                                                    }
                                                                              
                                                                                    if(operationOne === "+" && operationTwo === "*"){
                                                                                      setResultExpected(numberOne + numberTwo * numberThree)
                                                                                      setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`)
                                                                                      }
                                                                                  
                                                                                      if(operationOne === "+" && operationTwo === "/"){
                                                                                        setResultExpected(numberOne + Math.floor(numberTwo / (numberThree + 1)))
                                                                                        setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree + 1}`)
                                                                                        }
                                                                      
                                                                                        if(operationOne === "-" && operationTwo === "+"){
                                                                                          setResultExpected(numberOne - numberTwo + numberThree)
                                                                                          setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`)
                                                                                          }
                                                                                      
                                                                                          if(operationOne === "-" && operationTwo === "-"){
                                                                                            setResultExpected(numberOne - numberTwo - numberThree)
                                                                                            setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`)
                                                                                            }
                                                                      
                                                                                            if(operationOne === "-" && operationTwo === "*"){
                                                                                              setResultExpected(numberOne - numberTwo * numberThree)
                                                                                              setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`)
                                                                                              }
                                                                                          
                                                                                              if(operationOne === "-" && operationTwo === "/"){
                                                                                                setResultExpected(numberOne - Math.floor(numberTwo / (numberThree + 1)))
                                                                                                setQuestionAsk(`${numberOne} - ${numberTwo} / ${(numberThree + 1)}`)
                                                                                                }
                                                                      
                                                                                                if(operationOne === "*" && operationTwo === "+"){
                                                                                                  setResultExpected(numberOne * numberTwo + numberThree)
                                                                                                  setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`)
                                                                                                  }
                                                                                              
                                                                                                  if(operationOne === "*" && operationTwo === "-"){
                                                                                                    setResultExpected(numberOne * numberTwo - numberThree)
                                                                                                    setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`)
                                                                                                    }
                                                                      
                                                                                                    if(operationOne === "*" && operationTwo === "*"){
                                                                                                      setResultExpected(numberOne * numberTwo * numberThree)
                                                                                                      setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`)
                                                                                                      }
                                                                                                  
                                                                                                      if(operationOne === "*" && operationTwo === "/"){
                                                                                                        setResultExpected(numberOne * Math.floor(numberTwo / (numberThree + 1)))
                                                                                                        setQuestionAsk(`${numberOne} * ${numberTwo} / ${(numberThree + 1)}`)
                                                                                                        }
                                                                      
                                                                                                        if(operationOne === "/" && operationTwo === "+"){
                                                                                                          setResultExpected(Math.floor(numberOne / (numberTwo + 1)) + numberThree)
                                                                                                          setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} + ${numberThree}`)
                                                                                                          }
                                                                                                      
                                                                                                          if(operationOne === "/" && operationTwo === "-"){
                                                                                                            setResultExpected(Math.floor(numberOne / (numberTwo + 1)) - numberThree)
                                                                                                            setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} - ${numberThree}`)
                                                                                                            }
                                                                      
                                                                                                            if(operationOne === "/" && operationTwo === "*"){
                                                                                                              setResultExpected(Math.floor(numberOne / (numberTwo + 1)) * numberThree)
                                                                                                              setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} * ${numberThree}`)
                                                                                                              }
                                                                                                          
                                                                                                              if(operationOne === "/" && operationTwo === "/"){
                                                                                                                setResultExpected(Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1)))
                                                                                                                setQuestionAsk(`${numberOne} / ${(numberTwo + 1)} / ${(numberThree + 1)}`)
                                                                                                                }
                                                                                                              }
                                          
                                                                                                                  
 
}

  return ( <>
    <>
   <h1>Pergunta</h1>
    <p>{questionAsk}</p>
    <p>A resposta Correta é: {+resultExpected}</p>
    <p>A sua resposta foi: {resultReceived}</p>


    {chances > 0 ? (
      <button onClick={(e) => setTimeout(createQuestion, 500)}>Próxima Pergunta</button>
    )
    :  
    null
    }

    </>

  </>
  )
}

export default NextQuestion;