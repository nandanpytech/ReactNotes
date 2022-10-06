import React,{useReducer} from 'react'

const intialstate=0
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state-1 
        case "reset":
            return intialstate
        default:
            return state            
    }
}

export default function CounterOne() {
    const [count, dispatch] = useReducer(reducer, intialstate)
  return (
    <div>
        <h1>Count-{count}</h1>
        <button onClick={()=> dispatch("increment")}>Increment</button>
        <button onClick={()=> dispatch("decrement")}>Decrement</button>
        <button onClick={()=> dispatch("reset")}>Reset</button>
    </div>
  )
}
