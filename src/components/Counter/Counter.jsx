import { CounterTime } from "./style";

function Counter({counter, setCounter}){
  function changeTime(){
    if(counter > 0){
    setCounter(counter - 1)
    }
    
    if(counter === 1){
      return setCounter(0)
    }

  }
  setTimeout(changeTime, 1000)

  return ( <>
  <CounterTime>{counter}</CounterTime>
  </>
  )
}

export default Counter;