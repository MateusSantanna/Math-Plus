function NextQuestion({setResultsGame, 
  questionAsk, setQuestionAsk, 
  resultExpected, setResultExpected, 
  difficulty, 
  numberOne, setNumberOne, 
  numberTwo, setNumberTwo, 
  numberThree, setNumberThree,
  operationOne, setOperationOne, 
  operationTwo, setOperationTwo,
  setCounterQuestions, setResultsReceived,
correct}){

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
            setResultExpected(Math.floor(numberOne / numberTwo))
            setQuestionAsk(`${numberOne} / ${numberTwo}`)
          }

        // Ultrapassar os 10 Pontos 
          if(operationOne === "+" && operationTwo === "+" && correct >= 10 && correct < 20){
            setResultExpected(numberOne + numberTwo + numberThree)
            setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`)
            }
        
            if(operationOne === "+" && operationTwo === "-" && correct >= 10 && correct < 20){
              setResultExpected(numberOne + numberTwo - numberThree)
              setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`)
              }
        
              if(operationOne === "+" && operationTwo === "*" && correct >= 10 && correct < 20){
                setResultExpected(numberOne + numberTwo * numberThree)
                setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`)
                }
            
                if(operationOne === "+" && operationTwo === "/" && correct >= 10 && correct < 20){
                  setResultExpected(Math.floor(numberOne + numberTwo / numberThree))
                  setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree}`)
                  }

                  if(operationOne === "-" && operationTwo === "+" && correct >= 10 && correct < 20){
                    setResultExpected(numberOne - numberTwo + numberThree)
                    setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`)
                    }
                
                    if(operationOne === "-" && operationTwo === "-" && correct >= 10 && correct < 20){
                      setResultExpected(numberOne - numberTwo - numberThree)
                      setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`)
                      }

                      if(operationOne === "-" && operationTwo === "*" && correct >= 10 && correct < 20){
                        setResultExpected(numberOne - numberTwo * numberThree)
                        setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`)
                        }
                    
                        if(operationOne === "-" && operationTwo === "/" && correct >= 10 && correct < 20){
                          setResultExpected(Math.floor(numberOne - numberTwo / numberThree))
                          setQuestionAsk(`${numberOne} - ${numberTwo} / ${numberThree}`)
                          }

                          if(operationOne === "*" && operationTwo === "+" && correct >= 10 && correct < 20){
                            setResultExpected(numberOne * numberTwo + numberThree)
                            setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`)
                            }
                        
                            if(operationOne === "*" && operationTwo === "-" && correct >= 10 && correct < 20){
                              setResultExpected(numberOne * numberTwo - numberThree)
                              setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`)
                              }

                              if(operationOne === "*" && operationTwo === "*" && correct >= 10 && correct < 20){
                                setResultExpected(numberOne * numberTwo * numberThree)
                                setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`)
                                }
                            
                                if(operationOne === "*" && operationTwo === "/" && correct >= 10 && correct < 20){
                                  setResultExpected(Math.floor(numberOne * numberTwo / numberThree))
                                  setQuestionAsk(`${numberOne} * ${numberTwo} / ${numberThree}`)
                                  }

                                  if(operationOne === "/" && operationTwo === "+" && correct >= 10 && correct < 20){
                                    setResultExpected(Math.floor(numberOne / numberTwo + numberThree))
                                    setQuestionAsk(`${numberOne} / ${numberTwo} + ${numberThree}`)
                                    }
                                
                                    if(operationOne === "/" && operationTwo === "-" && correct >= 10 && correct < 20){
                                      setResultExpected(Math.floor(numberOne / numberTwo - numberThree))
                                      setQuestionAsk(`${numberOne} / ${numberTwo} - ${numberThree}`)
                                      }

                                      if(operationOne === "/" && operationTwo === "*" && correct >= 10 && correct < 20){
                                        setResultExpected(Math.floor(numberOne / numberTwo * numberThree))
                                        setQuestionAsk(`${numberOne} / ${numberTwo} * ${numberThree}`)
                                        }
                                    
                                        if(operationOne === "/" && operationTwo === "/" && correct >= 10 && correct < 20){
                                          setResultExpected(Math.floor(numberOne / numberTwo / numberThree))
                                          setQuestionAsk(`${numberOne} / ${numberTwo} / ${numberThree}`)
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
                                                    setResultExpected(Math.floor(numberOne / numberTwo))
                                                    setQuestionAsk(`${numberOne} / ${numberTwo}`)
                                                  }

                                                // Ultrapassar os 10 Pontos 
                                                  if(operationOne === "+" && operationTwo === "+" && correct >= 10 && correct < 20){
                                                    setResultExpected(numberOne + numberTwo + numberThree)
                                                    setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`)
                                                    }
                                                
                                                    if(operationOne === "+" && operationTwo === "-" && correct >= 10 && correct < 20){
                                                      setResultExpected(numberOne + numberTwo - numberThree)
                                                      setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`)
                                                      }
                                                
                                                      if(operationOne === "+" && operationTwo === "*" && correct >= 10 && correct < 20){
                                                        setResultExpected(numberOne + numberTwo * numberThree)
                                                        setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`)
                                                        }
                                                    
                                                        if(operationOne === "+" && operationTwo === "/" && correct >= 10 && correct < 20){
                                                          setResultExpected(Math.floor(numberOne + numberTwo / numberThree))
                                                          setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree}`)
                                                          }

                                                          if(operationOne === "-" && operationTwo === "+" && correct >= 10 && correct < 20){
                                                            setResultExpected(numberOne - numberTwo + numberThree)
                                                            setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`)
                                                            }
                                                        
                                                            if(operationOne === "-" && operationTwo === "-" && correct >= 10 && correct < 20){
                                                              setResultExpected(numberOne - numberTwo - numberThree)
                                                              setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`)
                                                              }

                                                              if(operationOne === "-" && operationTwo === "*" && correct >= 10 && correct < 20){
                                                                setResultExpected(numberOne - numberTwo * numberThree)
                                                                setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`)
                                                                }
                                                            
                                                                if(operationOne === "-" && operationTwo === "/" && correct >= 10 && correct < 20){
                                                                  setResultExpected(Math.floor(numberOne - numberTwo / numberThree))
                                                                  setQuestionAsk(`${numberOne} - ${numberTwo} / ${numberThree}`)
                                                                  }

                                                                  if(operationOne === "*" && operationTwo === "+" && correct >= 10 && correct < 20){
                                                                    setResultExpected(numberOne * numberTwo + numberThree)
                                                                    setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`)
                                                                    }
                                                                
                                                                    if(operationOne === "*" && operationTwo === "-" && correct >= 10 && correct < 20){
                                                                      setResultExpected(numberOne * numberTwo - numberThree)
                                                                      setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`)
                                                                      }

                                                                      if(operationOne === "*" && operationTwo === "*" && correct >= 10 && correct < 20){
                                                                        setResultExpected(numberOne * numberTwo * numberThree)
                                                                        setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`)
                                                                        }
                                                                    
                                                                        if(operationOne === "*" && operationTwo === "/" && correct >= 10 && correct < 20){
                                                                          setResultExpected(Math.floor(numberOne * numberTwo / numberThree))
                                                                          setQuestionAsk(`${numberOne} * ${numberTwo} / ${numberThree}`)
                                                                          }

                                                                          if(operationOne === "/" && operationTwo === "+" && correct >= 10 && correct < 20){
                                                                            setResultExpected(Math.floor(numberOne / numberTwo + numberThree))
                                                                            setQuestionAsk(`${numberOne} / ${numberTwo} + ${numberThree}`)
                                                                            }
                                                                        
                                                                            if(operationOne === "/" && operationTwo === "-" && correct >= 10 && correct < 20){
                                                                              setResultExpected(Math.floor(numberOne / numberTwo - numberThree))
                                                                              setQuestionAsk(`${numberOne} / ${numberTwo} - ${numberThree}`)
                                                                              }

                                                                              if(operationOne === "/" && operationTwo === "*" && correct >= 10 && correct < 20){
                                                                                setResultExpected(Math.floor(numberOne / numberTwo * numberThree))
                                                                                setQuestionAsk(`${numberOne} / ${numberTwo} * ${numberThree}`)
                                                                                }
                                                                            
                                                                                if(operationOne === "/" && operationTwo === "/" && correct >= 5 && correct < 20){
                                                                                  setResultExpected(Math.floor(numberOne / numberTwo / numberThree))
                                                                                  setQuestionAsk(`${numberOne} / ${numberTwo} / ${numberThree}`)
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
                                                                                              setResultExpected(Math.floor(numberOne + numberTwo / numberThree))
                                                                                              setQuestionAsk(`${numberOne} + ${numberTwo} / ${numberThree}`)
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
                                                                                                      setResultExpected(Math.floor(numberOne - numberTwo / numberThree))
                                                                                                      setQuestionAsk(`${numberOne} - ${numberTwo} / ${numberThree}`)
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
                                                                                                              setResultExpected(Math.floor(numberOne * numberTwo / numberThree))
                                                                                                              setQuestionAsk(`${numberOne} * ${numberTwo} / ${numberThree}`)
                                                                                                              }
                                    
                                                                                                              if(operationOne === "/" && operationTwo === "+"){
                                                                                                                setResultExpected(Math.floor(numberOne / numberTwo + numberThree))
                                                                                                                setQuestionAsk(`${numberOne} / ${numberTwo} + ${numberThree}`)
                                                                                                                }
                                                                                                            
                                                                                                                if(operationOne === "/" && operationTwo === "-"){
                                                                                                                  setResultExpected(Math.floor(numberOne / numberTwo - numberThree))
                                                                                                                  setQuestionAsk(`${numberOne} / ${numberTwo} - ${numberThree}`)
                                                                                                                  }
                                    
                                                                                                                  if(operationOne === "/" && operationTwo === "*"){
                                                                                                                    setResultExpected(Math.floor(numberOne / numberTwo * numberThree))
                                                                                                                    setQuestionAsk(`${numberOne} / ${numberTwo} * ${numberThree}`)
                                                                                                                    }
                                                                                                                
                                                                                                                    if(operationOne === "/" && operationTwo === "/"){
                                                                                                                      setResultExpected(Math.floor(numberOne / numberTwo / numberThree))
                                                                                                                      setQuestionAsk(`${numberOne} / ${numberTwo} / ${numberThree}`)
                                                                                                                      }
                                          
                                                                                                                  }
 
}

  return ( <>
    <>
   <h1>Pergunta</h1>
    <p>{questionAsk}</p>
    <p>A resposta Correta é: {+resultExpected}</p>
    <button onClick={(e) => setTimeout(createQuestion, 500)}>Próxima Pergunta</button>
    </>

  </>
  )
}

export default NextQuestion;










  // const [numberThree, setNumberThree] = useState(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])
  // const [numberFour, setNumberFour] = useState(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])
  // const [numberFive, setNumberFive] = useState(numbersEasy[Math.floor(Math.random() * numbersEasy.length)])

  // const [operationTwo, setOperationTwo] = useState(operations[Math.floor(Math.random() * operations.length)])
  // const [operationThree, setOperationThree] = useState(operations[Math.floor(Math.random() * operations.length)])
  // const [operationFour, setOperationFour] = useState(operations[Math.floor(Math.random() * operations.length)])


