import React, { useState } from 'react'

export default function Usestatearray() {
    const [array,setarray]=useState([])
    const arraylist=array.map(items=><li key={items.id}>{items.value}</li>)

    const additem=()=>{
        setarray([...array,{id:arraylist.length,
            value:Math.floor(Math.random()*10)+1}]
            )
    }
  return (
    <div>
        <button onClick={additem}>click me</button>
        <ul>{arraylist}</ul>
    </div>
  )
}
