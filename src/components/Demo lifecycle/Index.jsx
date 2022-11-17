import { useMemo } from 'react';
import {React,useState,useCallback} from 'react'
import Todo from './Todo'

export default function Index() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };
    const calculation = useMemo(()=>expensiveCalculation(count),[count]);
    const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      },[todos]);

     
  return (
    <>
    <Todo todos={todos} addTodo={addTodo} />
    <hr />
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
    </div>
  </>
  )
}
